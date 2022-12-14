import { useActions } from '../hooks/useActions';
import './AddCell.css';

interface AddCellProps {
  nextCellID: string | null;
}

const AddCell: React.FC<AddCellProps> = ({ nextCellID }) => {
  const { insertCellBefore } = useActions();

  return (
    <div className='add-cell'>
      <button onClick={() => insertCellBefore(nextCellID, 'javascript')}>
        Code
      </button>
      <button onClick={() => insertCellBefore(nextCellID, 'text')}>Text</button>
      <div className='divider' />
    </div>
  );
};

export default AddCell;
