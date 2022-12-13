import { useState, useEffect } from 'react';

import Resizable from './Resizeable';
import CodeEditor from './CodeEditor';
import Preview from './Preview';
import bundler from '../bundler';

const CodeCell = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');
  const [err, setErr] = useState('');

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundler(input);
      setCode(output.code);
      setErr(output.err);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction='vertical'>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction='horizontal'>
          <CodeEditor
            initialValue='console.log("Hello, World!");'
            onChange={(value) => setInput(value)}
          />
        </Resizable>
        <Preview code={code} bundlerStatus={err} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
