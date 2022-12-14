import { useActions } from '../hooks/useActions';
import './AddCell.css';

interface AddCellProps {
  nextCellID: string | null;
}

const AddCell: React.FC<AddCellProps> = ({ nextCellID }) => {
  const { insertCellBefore } = useActions();

  return (
    <div className='add-cell'>
      <div className='add-buttons'>
        <button
          className='button is-rounded is-primary is-small'
          onClick={() => insertCellBefore(nextCellID, 'javascript')}
        >
          <span className='icon is-small'>
            <i className='fas fa-plus' />
          </span>
          <span>Code</span>
        </button>
        <button
          className='button is-rounded is-primary is-small'
          onClick={() => insertCellBefore(nextCellID, 'text')}
        >
          <span className='icon is-small'>
            <i className='fas fa-plus' />
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className='divider' />
    </div>
  );
};

export default AddCell;
