import { useLoaderData } from 'react-router-dom'

import EventsList from '../components/EventsList';

function Event() {

const data = useLoaderData();

  return (
    <>
    
      {<EventsList events={data} />}
    </>
  );
}

export default Event;