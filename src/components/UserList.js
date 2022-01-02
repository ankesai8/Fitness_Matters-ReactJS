import React from 'react'
import image from './image4.png'
import axios from 'axios'
import { useState } from "react";


export default function UserList() {

    const [list, setlist] = useState([]);

    function fetchlist() {
        display_users();

        return list.map((elem) => {
            return (
                <>
                    <li class="list-group-item my-2">{elem}</li>
                    {/* <div className="container in-center mx-2 my-2 list-group-item">{elem}</div>  */}
                </>
            );
        })
    }

    function display_users() {
        axios.get('http://localhost:1000/all_users').then(response => {
            let temp = [];
            let data = response.data;

            for (let i = 0; i < data.length; i++) {
                temp.push(data[i].username);
            }

            if (temp.length != list.length) {
                setlist(temp);
            }

        }).catch(err => {
            console.log("axios GET request error");
        })
    }


    return (
        <>
            <br />
            <div className="in-center">
                <h3><u>Users of Fitness-Matters</u></h3>
            </div>

            <div className="card container " >
                <img src={image} className="card-img-top image container" />
                <div className="card-header container in-center">
                    <h5>This is the list of all our users</h5>
                </div>
                <div className="card-body">

                    <ul class="list-group in-center my-2 container">
                        {fetchlist()}
                    </ul>

                </div>
            </div>

        </>
    )
}
