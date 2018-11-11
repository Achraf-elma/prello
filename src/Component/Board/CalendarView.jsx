import React, { Component } from "react";
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';
import Calendar from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
//import events from '../events';
import "../../style/calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
//import logo from "./logo.svg";   <img src={logo} className="App-logo" alt="logo" />
import { setCardDueDate } from '../../action/actionCard';
import CardSettings from './MyCard/CardSettings'

const localizer = Calendar.momentLocalizer(moment);

const DnDCalendar = withDragAndDrop(Calendar);

class CalendarView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events : this.props.events,
      selectedEventID : null,
      modal : false
    }
    this.toggle = this.toggle.bind(this);
}

toggle = (event) => {
  this.props.history.push(`${this.props.match.url}/card/${event.id}`)
}

  onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.cards };
    });
  };

  moveEvent({ event, start, end, issAllDay: droppedOnAllDaySlot }) {
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
          onSelectEvent={this.toggle}
          onEventDrop={this.moveEvent}
          onEventResize={this.onEventResize}
          resizable
          selectable
          style={{ height: "100vh" }}
        />
        <Route path={`${this.props.match.path}/card/:idCard`} component={CardSettings} />
      </div>
    );
  }
}
const mapStateToProps = ( state, props ) => ({
  events : state.cards.filter(card => card.closed !== true).map( card => ({
    id : card.id,
    title: card.name,
    start: card.dueDate,
    end: card.dueDate,
    allDay: true,
    closed : card.closed
  }))
});

const mapDispatchToProps = (dispatch, props) => ({
  setCardDueDate: (id, end) => dispatch(setCardDueDate(id, end))
});


// Export connected Components
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {
    mapStateToProps:'deepEqual'
  }
)(CalendarView); 