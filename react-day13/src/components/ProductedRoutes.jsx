import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'//navigate to next page

function ProtectedRoutes({ children }) {//user login or not in children
  const user = useSelector(loggedUser => loggedUser.user);//user-globa data key
  return user ? children : <Navigate to="/login" />
}

export default ProtectedRoutes