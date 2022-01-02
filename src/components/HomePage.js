import React from 'react'
import image from './image7.jpeg'
import axios from 'axios'
import { useState } from "react";



export default function HomePage() {

    const [list, setlist] = useState([]);

    function fetchlist() {

        renderTableData();

        return list.map((elem) => {
            return (
                // <option key={username} value={username}>{username}</option>
                <>
                    {console.log('inside JSX', elem)}
                    <tr>
                        <th scope="row">{elem.no}</th>
                        <td>{elem.username}</td>
                        <td>{elem.description}</td>
                        <td>{elem.duration}</td>
                    </tr>
                </>
            );
        })
    }

    function renderTableData() {

        axios.get('http://localhost:1000/all_exercises').then((response) => {

            let temp = []
            let obj = {
                no: 0,
                username: "",
                description: "",
                duration: 0,
            };


            let data = response.data;
            console.log('Response data is here:', response.data);
            console.log('aapke data ka size: ', data.length);

            // for (let i = 0; i < data.length; i++) {
            //     obj.no = i;
            //     obj.username = data[i].username;
            //     obj.description = data[i].description;
            //     obj.duration = data[i].duration;

            //     temp.push(obj);
            //     // console.log('oBJECT', obj)
            //     console.log('temp is  ', temp)
            // }
            let i = 1;
            data.forEach(element => {
                obj = {
                    no: i++ ,
                    username: element.username,
                    description: element.description,
                    duration: element.duration
                }

                temp.push(obj);
                // console.log('oBJECT', obj)
                // console.log('temp is  ', temp)
            });

            if (list.length != temp.length) {
                setlist(temp);
            }

            console.log('aapki list ka size: ', list.length);
            console.log('List Array ', list);

        }).catch((err) => {
            console.log("GET request error");
        })
    }



    return (
        <>

            <div className="in-center">
                <h2><u>Welcome to "Fitness-Matters"</u></h2>
            </div>

            <div className="card container " >
                <img src={image} className="card-img-top image container" />
                <br />
                <div className="card-header container in-center">
                    <u><h5>List of all the exercises by different users</h5></u>
                </div>


                <div className="card-body" >

                    <table className="table table-hover table-striped " id="info">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Duration</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {fetchlist()}
                        </tbody>
                    </table>
                </div>
            </div>



        </>
    )
}
