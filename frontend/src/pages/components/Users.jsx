import React from 'react'
import { useState } from 'react'
// import axios from "../api/axios";
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import useRefreshToken from '../../hooks/useRefreshToken';

const Users = () => {

    const [ users, setUsers] = useState();
    // const refresh = useRefreshToken();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true; // note this flag denote mount status
        const controller = new AbortController(); 

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/users', { 
                    signal: controller.signal 
                }); 
                console.log(response.data)
                if (isMounted) {
                    setUsers(response.data);
                }
            } catch (err) {
                console.log(err);
                navigate('/login', { state: { from: location }, replace: true});
            }
        }
        getUsers();
        return () => {
            isMounted = false;
            controller.abort();
        }
    },[]);
        

  return (
    <div className='flex-col justify-center items-center text-center w-screen h-screen'>
        <h2>Users List</h2>
        {users?.length
         ? (
            <ul>
                {users.map((user, i) => <li key={i}>{user?.userName}</li>)}
            </ul>
           ) :   
            (
                <p>No users found</p>
            )
        }

        {/* <button onClick={() => refresh()} className='rounded-md border-2 px-4 py-1 hover:bg-green-200 duration-300 ease-in-out'>Refresh</button> */}
        <br />
    </div>
  )
}

export default Users