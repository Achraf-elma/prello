import React, { Component , Children} from "react";
import {connect} from 'react-redux';
import Download from '@axetroy/react-download';
import { Route } from 'react-router-dom';
import Calendar from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "../../style/calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { setCardDueDate, setCardAllDay } from '../../action/actionCard';
import CardSettings from './MyCard/CardSettings'


const ics = require('ics')
const localizer = Calendar.momentLocalizer(moment);

const DnDCalendar = withDragAndDrop(Calendar);

const CURRENT_DATE = moment().toDate();

const ColoredDateCellWrapper = ({children, value}) =>
  React.cloneElement(Children.only(children), {
    style: {
      ...children.style,
      backgroundColor: value < CURRENT_DATE ? 'lightgreen' : 'lightblue',
    },
  });
class CalendarView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events : props.events,
      selectedEventID : null,
      modal : false,
      calendarICS : null
    }
    this.toggle = this.toggle.bind(this);
    this.moveEvent = this.moveEvent.bind(this);
}



  componentDidMount(){
   let events = this.state.events.map( event => ({
    title: event.title,
    start: moment(event.start).format('YYYY-M-D-H-m').split("-"),
    end: moment(event.end).format('YYYY-M-D-H-m').split("-")
  }));
    ics.createEvents(events, (error, value) => {
      if (error) {
        console.log(error)
      } else {
      console.log("event" + value)
      this.setState({
        calendarICS: value
      })
      }
    })
}

  toggle = (event) => {
    console.log(event)
    this.props.history.push(`${this.props.match.url}/card/${event.id}`)
  }

 

  moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
    let events = this.state.events
    const idx = events.indexOf(event)
  

   let allDay = event.allDay
    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const updatedEvent = { ...event, start, end, allDay }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)
    this.setState({
      events: nextEvents,
    })
    console.log("MOVE FUNCTION " + event.id)
     this.props.setCardDueDate(event.id, end, allDay)

    alert(`${event.title} was dropped into ${updatedEvent.start}`)
  }

  render() {
    const { match , events} = this.props;
    return (
      <div className="calendar">
        <Download file="test.ics" content={this.state.calendarICS}>
          <button type="button">Click and Download file</button>
        </Download>
        <header className="calendar-header">
          <i className="fa fa-calendar"></i> Calendar View of yours cards
        </header>
      
        <DnDCalendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          onSelectEvent={this.toggle}
          onEventDrop={this.moveEvent}
          selectable
          style={{ height: "100vh" }}
            components={{
        dateCellWrapper: ColoredDateCellWrapper,
      }}
        />
        <Route path={`${match.path}/card/:idCard`} component={CardSettings} />

      </div>
    );
  }
}
const mapStateToProps = ( state, props ) => ({
  events : state.cards.filter(card => card.closed !== true).map( card => ({
    id : card.id,
    title: card.name,
    start: moment(card.dueDate).subtract(1, 'hours').toDate(),
    end: moment(card.dueDate).toDate(),
    allDay: card.allDay || false,
    closed : card.closed,
    description : card.desc
  }))
});

const mapDispatchToProps = (dispatch, props) => ({
  setCardDueDate: (id, end, allDay) => {
    dispatch(setCardDueDate(id, end));
    dispatch(setCardAllDay(id, allDay))
  }
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