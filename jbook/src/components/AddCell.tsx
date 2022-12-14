import AddCellButton from './AddCellButton';

import './AddCell.css';

interface AddCellProps {
  nextCellID: string | null;
}

const AddCell: React.FC<AddCellProps> = ({ nextCellID }) => {
  return (
    <div className='add-cell'>
      <div className='add-buttons'>
        <AddCellButton type='javascript' nextCellID={nextCellID} />
        <AddCellButton type='text' nextCellID={nextCellID} />
      </div>
      <div className='divider' />
    </div>
  );
};

export default AddCell;
