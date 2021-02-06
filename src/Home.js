import React from 'react'
import { useState, useEffect } from "react";
import {getUsers} from '../src/services/users'
export default function Home() {
    const[users,setUsers] = useState([]);

    useEffect(() => {
        let mounted = true;

        getUsers().then(items => {
            if(mounted){
                setUsers(items)
            }
        })
        return() => mounted = false;
    }, [])
    return (
        <div className="container">
            <div className="col">
                <div className="col-md-6">
                    {users.map(item => 
                    <p key={item.id}>{item.name}</p>
                    )}
                </div>
               
            </div>
        </div>
    )
}
