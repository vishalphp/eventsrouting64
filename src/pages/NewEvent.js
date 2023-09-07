import React from 'react'
import EventForm from '../components/EventForm'
import { redirect } from 'react-router-dom'


export default function NewEvent() {



  return (
    <>
    <div>NewEvent</div>
    <EventForm event=""/>
    </>
  )
}

export async function actions({request, params}){

  const data = await request.formData();

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description')
  }

  const response = await fetch('http://localhost:8080/events',{
    method: 'POST',
    body: JSON.stringify(eventData),
    headers: {
      'Content-Type':'application/json'
    }
  });
  if (!response.ok) {
    // eslint-disable-next-line no-throw-literal
    const msgIn = { message: 'something went wrong ...' };
    throw new Response( JSON.stringify(msgIn) ,{status: 500});
    //..
  }

  return redirect('/events');

}
