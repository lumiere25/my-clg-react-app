// import React from 'react';
 // Here we call in the isLoggedIn state and it gets passed in as props,in our return we define the logic for when the content is hidden or displayed whether a user is logged in or logged out.
  const ProtectedRoute = (props) => {
  const { isloggedIn } = props;
  const token = isloggedIn ? true : false;
 
  return (
    <>
     
    </>
  )
    
export default ProtectedRoute;







// import { useLocation, Navigate, Outlet } from "react-router-dom";




// import { Outlet, Navigate } from 'react-router-dom';
// import SignUp from './pages/SignUp';

// const PrivateRoutes = () => {
//     let auth = {'token':true}
//     return(
//         auth.token ? <Outlet/> : <SignUp/>
//     )
// }

// export default PrivateRoutes;

