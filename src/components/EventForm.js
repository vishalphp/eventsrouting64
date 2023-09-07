import { useNavigate, Form, useActionData, redirect } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ methodType, event }) {

  const actionData = useActionData();

  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }
 

  return (
    <Form method={methodType} className={classes.form}>
      <ul>{actionData && Object.values(actionData.errors).map(err => <li key={err}>{err}</li>)}</ul>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event.title ? event.title : ''}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event.image ? event.image : ''}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event.date ? event.date : ''} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required  defaultValue={event.description ? event.description : ''}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function actions({request, params}){

  const data = await request.formData();
  const method = request.method;

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description')
  }

  let url = 'http://localhost:8080/events';


  if(method === 'PATCH'){
   const eventid = params.eventId;
   url = 'http://localhost:8080/events/'+eventid;
  }

  const response = await fetch(url,{
    method: method,
    body: JSON.stringify(eventData),
    headers: {
      'Content-Type':'application/json'
    }
  });

  if(response.status === 422){
   return response;
  }

  if (!response.ok) {
    // eslint-disable-next-line no-throw-literal
    const msgIn = { message: 'something went wrong ...' };
    throw new Response( JSON.stringify(msgIn) ,{status: 500});
    //..
  }

  return redirect('/events');

}
