import React from 'react'
import { useState, useEffect } from "react";
import {getAlbums,getPhotos} from '../src/services/users';
import {Link} from 'react-router-dom'

export default function UserDetail(props) {
    console.log(props.match.params.id)
    const[albums,setAlbums] = useState([]);

    useEffect(() => {
        let mounted = true;
        let i;
        getAlbums().then(items => {
                console.log(items)
                if(mounted ){
                    setAlbums(JSON.parse(items))       
                }
        })
        return() => mounted = false;
    }, [])
    return (
        <div className="container">
            <p>albums</p>
            <div className="row">
                <div className="title">
                    <h3>Kullanıcılar</h3>
                </div>
                <div className="col-md-12">
                     {albums.filter(name => name.userId == props.match.params.id).map(filteredName => (
                            <li>
                            {filteredName}
                            </li>
                        ))}
                </div>
            </div>
    </div>
    )
}
