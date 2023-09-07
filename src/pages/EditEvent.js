import React from 'react'
import EventForm from '../components/EventForm'
import { useRouteLoaderData } from 'react-router-dom'

export default function EditEvent() {
  const data = useRouteLoaderData('event-detail');

  return (
    <>
    <div>Edit Event</div>
    <EventForm methodType="put" event={data.event}/>
    </>
  )
}
