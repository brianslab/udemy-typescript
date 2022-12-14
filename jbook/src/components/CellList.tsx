import { Fragment } from 'react';

import { useTypedSelector } from '../hooks/useTypedSelector';
import CellListItem from './CellListItem';
import AddCell from './AddCell';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <AddCell nextCellID={cell.id} />
      <CellListItem key={cell.id} cell={cell} />
    </Fragment>
  ));

  return (
    <div>
      {renderedCells}
      <AddCell nextCellID={null} />
    </div>
  );
};

export default CellList;
