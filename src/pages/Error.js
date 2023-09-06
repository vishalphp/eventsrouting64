import React from 'react';
import { useRouteError } from 'react-router-dom'

export default function Error() {

  const errorMsg = useRouteError();

  //console.log(JSON.parse(errorMsg.data).message);

  const errMsg = errorMsg.status === 500 ? JSON.parse(errorMsg.data).message : 'Something went wrong';

  return (
    <>
    <h1>Error</h1>
    <p>{errMsg}</p>
    </>
  )
}
