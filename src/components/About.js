import React from 'react'
import image from './image3.jpeg'


export default function About() {
    return (
        <>

            <div className="card container " >


                <div className="in-center">
                    <div className="card-body container">
                        <strong className="d-inline-block mb-2 text-success"><h5>Developer</h5></strong>
                        <br />
                        <h1><u>Avikal Goel</u></h1>
                    </div>
                    <img src={image} className="card-img-top image container" />
                </div>

                <div className="jumbotron my-4 py-4">
                    <h2 className="in-center"><u>Fitness Matters</u></h2>
                    <br />

                    <p className="lead p-font">A full stack (MERN) exercise-tracking web application which has features to add usernames, add exercise logs (i.e the name of exercise, date, duration etc) , stores the data in mongoDB Atlas data cluser, fetches and displays all exercise logs on the home page, which can then be edited or deleted in future if required and it has a functional search bar.
                    </p>
                    <hr className="my-4" />

                    <p className="lead p-font">
                        This project helps understand and implement various concepts for building MERN tech stack web applications which include creating APIs which perform all CRUD operations on the MongoDB database, implementation of UI in ReactJS, linking the React frontend with NodeJS backend through axios calls.
                    </p>
                    <hr className="my-4" />

                    <p className="lead p-font">
                        The implementation of UI involves breaking the UI into several reuseable components and implementing concepts of hooks, states, passing props to components, navigating between various components from navBar as well as from within different components, and use of React lifecycle components, which are implemeted in this project using useEffect() in functional based components. The components states are getting updated based on either user inputs or the live data fetched from the database.
                    </p>
                </div>

            </div>
        </>
    )
}
