import React from 'react'
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  
   const error = useRouteError();

   return (
    <div>
        <h1>오류가 발생하였습니다</h1>
        <p>{error.message || "unknown error ouccured"}</p>
    </div>
  );
};

export default ErrorPage;