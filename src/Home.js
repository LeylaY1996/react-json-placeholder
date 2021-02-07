import React from 'react'
import { useState, useEffect } from "react";
import {getUsers} from '../src/services/users'
export default function Home() {
    const[users,setUsers] = useState([]);

    useEffect(() => {
        let mounted = true;
        let i;
        getUsers().then(items => {
            if(mounted){
                setUsers(items)
            }
            console.log("Users",items);
        })
        return() => mounted = false;
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="title">
                    <h3>Kullanıcılar</h3>
                </div>
                <div className="col-md-12">
                    {users.map(user => (
                    <ul className="user-caption">
                        <li key={user.id}>{user.name}</li>
                        <button className="user-btn">Detay</button>
                    </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}
