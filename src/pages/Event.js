import { useLoaderData } from 'react-router-dom'

import EventsList from '../components/EventsList';

function Event() {

//const data = useLoaderData();
const dataResp = useLoaderData();
const data = dataResp.events;

  return (
    <>
       {/*<EventsList  />*/}
      {<EventsList events={data} />}
    </>
  );
}

export default Event;

export async function loader(){

  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    //..
  } else {
    //const resData = await response.json();
    //return resData.events;
    return response;
  }
  
}