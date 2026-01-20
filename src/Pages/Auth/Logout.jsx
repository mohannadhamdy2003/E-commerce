import React from 'react'
import api from '@/Api/axios';
import { baseURL, LOGOUT } from '@/Api/Api';
import { Link } from 'react-router-dom';
const Logout = () => {
    async function handleLogout(){
        try{
            const res=await api.get(`${baseURL}${LOGOUT}`)
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }
  return (
    
      <Link className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-slate-900 border border-gray-400 bg-transparent hover:bg-gray-50 transition-all"
      onClick={handleLogout} to="/login">
        Logout
      </Link>
    
  );
}

export default Logout