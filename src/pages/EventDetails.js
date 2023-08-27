import React from 'react'
import {useParams} from 'react-router-dom'

export default function EventDetails() {
    const parms = useParams();
  return (
      <>
      <div>EventDetails</div>
      <div>{parms.eventId}</div>
        
    </>
  )
}
