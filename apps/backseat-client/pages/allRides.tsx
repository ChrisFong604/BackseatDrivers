import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Field, Form, Formik } from 'formik';

export async function getServerSideProps() {
    console.log("hi")
    const res = await axios.get('http://localhost:3333/api/rides');
    const data = await res.data;
    console.log(data);
    
    return { props: { rides: data } };
}

function allRides({rides})  {
    console.log(rides)
    return (
        <div>
            {rides.map((ride) => (
                <div key = {ride.ride_id}>
                    <div style={{color: "red"}}>
                        Driver name: {ride.host_name}
                    </div>
                    <div>
                        Email: {ride.email}
                    </div>
                    <iframe
                                width="25%"
                                height="250"
                                
                                
                                src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDXYIKlauR9teuVU4RHWACY6T1x_fPbZFY
                                &origin= ${ride.departure_location}
                                &destination= ${ride.school_location}`}
                                
                    ></iframe>
                    <div>{ride.is_full}</div>
                    <div>
                        {ride.is_full ? <button>full</button> : <button>not full</button>}
                    </div>
                    <br></br>
                    
                </div>
            ))}
        </div>
    )
}

export default allRides;

