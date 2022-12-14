import { useActions } from '../hooks/useActions';
import ActionBarButton from './ActionBarButton';

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div>
      <ActionBarButton icon='fa-arrow-up' onClick={() => moveCell(id, 'up')} />
      <ActionBarButton
        icon='fa-arrow-down'
        onClick={() => moveCell(id, 'down')}
      />
      <ActionBarButton icon='fa-times' onClick={() => deleteCell(id)} />
    </div>
  );
};

export default ActionBar;
