import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Heading from "./common/heading/Heading"
import React, { useState, useEffect } from 'react'

const Calendar = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    // Fetch events from your source and set them in the state
    const fetchedEvents = [
      { title: 'Event 1', date: '2024-04-03' },
      { title: 'Event 2', date: '2024-04-07' }
    ]
    setEvents(fetchedEvents)
  }, [])

  return (
    <div className='container'>
        <Heading title='Upcoming Events' />
        <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        />
    </div>
  )
}

export default Calendar;