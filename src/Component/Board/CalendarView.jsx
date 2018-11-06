import React, { Component } from "react";
import {connect} from 'react-redux';
import Calendar from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
//import events from '../events';
import "../../style/calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
//import logo from "./logo.svg";   <img src={logo} className="App-logo" alt="logo" />
import { setCardDueDate } from '../../action/actionCard';

const localizer = Calendar.momentLocalizer(moment);

const DnDCalendar = withDragAndDrop(Calendar);

class CalendarView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props
    }

    this.moveEvent = this.moveEvent.bind(this)
   // this.newEvent = this.newEvent.bind(this)
}


  onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.cards };
    });
  };

  moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
    const { events } = this.state
    console.log(event);
    const idx = events.indexOf(event)
    let allDay = true;
/** 
 *  let allDay = event.allDay
    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }
*/
    const updatedEvent = { ...event, start, end, allDay }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)
    this.setState({
      events: nextEvents,
    })
    console.log("MOVE FUNCTION " + event.id)
     this.props.setCardDueDate(event.id, end)

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }


  render() {
    const { events, setCardDueDate} = this.props
    return (
      <div className="calendar">
        <header className="calendar-header">
        <i className="fa fa-calendar"></i>   Calendar View of yours cards
       
        </header>
      
        <DnDCalendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          onEventDrop={this.moveEvent}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}
const mapStateToProps = ( state, props ) => ({
  events : state.cards.map(function(obj) {
    return {
        id : obj.id,
        title: obj.name,
        start: obj.dueDate,
        end: obj.dueDate,
        allDay: true
    }
})


})

const mapDispatchToProps = (dispatch, props) => ({
  setCardDueDate: (id, end) =>{
    dispatch(setCardDueDate(id, end))
  }
});


// Export connected Components
export default connect(mapStateToProps, mapDispatchToProps)(CalendarView); 