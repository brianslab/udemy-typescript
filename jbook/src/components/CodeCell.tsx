import { useEffect } from 'react';

import Resizable from './Resizeable';
import CodeEditor from './CodeEditor';
import Preview from './Preview';
import { Cell } from '../state';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

import './CodeCell.css';

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);
  const cumulativeCode = useTypedSelector((state) => {
    const { data, order } = state.cells;
    const orderedCells = order.map((id) => data[id]);

    const renderFunc = `
        import _React from 'react';
        import _ReactDOM from 'react-dom';

        var render = (value) => {
          const root = document.querySelector('#root');

          if (typeof value === 'object') {
            if (value.$$typeof && value.props) {
              _ReactDOM.render(value, root)
            } else {
               root.innerHTML = JSON.stringify(value);
            }
          } else {
            root.innerHTML = value;
          }
        };
      `;
    const renderFuncNoop = 'var render = () => {}';
    const cumulativeCode = [];
    for (let c of orderedCells) {
      if (c.type === 'javascript') {
        if (c.id === cell.id) {
          cumulativeCode.push(renderFunc);
        } else {
          cumulativeCode.push(renderFuncNoop);
        }
        cumulativeCode.push(c.content);
      }
      if (c.id === cell.id) {
        break;
      }
    }

    return cumulativeCode;
  });

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cumulativeCode.join('\n'));
      return;
    }
  });

  useEffect(() => {
    const timer = setTimeout(async () => {
      createBundle(cell.id, cumulativeCode.join('\n'));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createBundle, cell.id, cumulativeCode.join('\n')]);

  return (
    <Resizable direction='vertical'>
      <div
        style={{
          height: 'calc(100% - 8px)',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Resizable direction='horizontal'>
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        <div className='progress-wrapper'>
          {!bundle || bundle.loading ? (
            <div className='progress-cover'>
              <progress className='progress is-small is-primary' max='100'>
                Loading
              </progress>
            </div>
          ) : (
            bundle && <Preview code={bundle.code} bundlerStatus={bundle.err} />
          )}
        </div>
      </div>
    </Resizable>
  );
};

export default CodeCell;
