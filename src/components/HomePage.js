import React from 'react'
import image from './image7.jpeg'
import axios from 'axios'
import { useState } from "react";



export default function HomePage() {

    // function renderTableData() {

    //     let data = [];
    //     let html = "";
    //     axios.get('http://localhost:1000/all_exercises').then((response) => {

    //         data = response.data;
    //         console.log(response.data);
    //         // console.log( typeof(response.data) ) ; 

    //         for (let i = 0; i < data.length; i++) {
    //             html += `<tr>
    //             <th scope="row">${i + 1}</th>
    //             <td>${data[i].username}</td>
    //             <td>${data[i].description}</td>
    //             <td>${data[i].duration}</td>
    //             </tr>`
    //         }

    //         console.log("html=")
    //         console.log(html);
    //         html = "<tbody>" + html + "<tbody/>";


    //     }).catch((err) => {
    //         console.log("GET request error");
    //     })
    //     return html;
    // }



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
                        </tbody>
                    </table>
                </div>
            </div>



        </>
    )
}
