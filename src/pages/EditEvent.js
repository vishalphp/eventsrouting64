import React from 'react'
import EventForm from '../components/EventForm'
import { useRouteLoaderData } from 'react-router-dom'

export default function EditEvent() {
  const data = useRouteLoaderData('event-detail');

  return (
    <>
    <div>EditEvent</div>
    <EventForm event={data.event}/>
    </>
  )
}
