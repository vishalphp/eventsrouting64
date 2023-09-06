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