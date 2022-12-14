import AddCellButton from './AddCellButton';

import './AddCell.css';

interface AddCellProps {
  nextCellID: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ nextCellID, forceVisible }) => {
  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <div className='add-buttons'>
        <AddCellButton type='javascript' nextCellID={nextCellID} />
        <AddCellButton type='text' nextCellID={nextCellID} />
      </div>
      <div className='divider' />
    </div>
  );
};

export default AddCell;
