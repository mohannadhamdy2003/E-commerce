import React from 'react'
import Cookie from "cookie-universal"
import { Navigate, Outlet } from 'react-router-dom'
const RequireBack = () => {
    const cookie=Cookie()
    const token=cookie.get("e-commerce")
    
  return token?<Navigate to="/"/>:<Outlet/>
    
  
}

export default RequireBack