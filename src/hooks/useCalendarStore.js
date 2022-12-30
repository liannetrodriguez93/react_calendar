import {useDispatch, useSelector} from "react-redux";
import {onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent} from "../store/index.js";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const {events, activeEvent} = useSelector(state => state.calendar)

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  }

  const startSavingEvent = async (calendarEvent) => {

    if (calendarEvent._id) {
      //Actualizando
      dispatch(onUpdateEvent({...calendarEvent}))
    } else {
      //Creando
      dispatch(onAddNewEvent({
        ...calendarEvent,
        _id: new Date().getTime()}
      ))
    }
  }

  const startDeletingEvent = async () => {
    dispatch(onDeleteEvent());
  }

  return {
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    startDeletingEvent,
    setActiveEvent,
    startSavingEvent
  };
}