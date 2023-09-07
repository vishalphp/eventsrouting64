import React from 'react'
import EventItem from '../components/EventItem'
import {useParams, useRouteLoaderData} from 'react-router-dom';

export default function EventDetails() {
    //const parms = useParams();
    const data = useRouteLoaderData('event-detail');
    //console.log(data);
  return (
      <>
      <div>EventDetails</div>
      <EventItem event={data.event}/>
        
    </>
  )
}

export async function loader({request, params}){

  const id = params.eventId;
  

  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    // eslint-disable-next-line no-throw-literal
    const msgIn = { message: 'something went wrong ...' };
    throw new Response( JSON.stringify(msgIn) ,{status: 500});
    //..
  } else {
    //const resData = await response.json();
    //return resData.events;
    return response;
  }


}