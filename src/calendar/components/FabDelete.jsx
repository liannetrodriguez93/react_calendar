import {useCalendarStore, useUiStore} from "../../hooks/index.js";
import {addHours} from "date-fns";

export const FabDelete = () => {
  const {hasEventSelected, startDeletingEvent} = useCalendarStore();

  const handleDelete = () => {
    startDeletingEvent();
  }

  return (
    <button
      className="btn btn-danger fab-danger"
      onClick={handleDelete}
      style={{
        display: hasEventSelected ? '' : 'none'
      }}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
}