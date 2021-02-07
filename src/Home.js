import React from 'react'
import { useState, useEffect } from "react";
import {getUsers} from '../src/services/users';
import { Link } from 'react-router';


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


    function pageDetail() {
        console.log("leyla")
    }
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
                        <a  onClick={pageDetail} className="user-btn"><Link to="/react">Detay</Link></a>
                    </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}
