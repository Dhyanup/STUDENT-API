import React, { useEffect, useState } from 'react'
import Navi from './Navi'
import axios from 'axios'

const ViewAll = () => {
    const [userData, changeuserData] = useState(
        { "status": "success", "data": [] }
    )

    const fetchData = () => {
        axios.get("http://18.144.111.41/view_all_students.php").then(
            (response) => {
                changeuserData(response.data)
            }
        ).catch()
    }
    useEffect(() => { fetchData() }, [])


    return (
        <div>
            <Navi />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {userData.data.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">{value["name"]}</h5>
                                                    <p class="card-text">Roll no:{value.roll}</p>
                                                    <p class="card-text">College:{value.college}</p>
                                                    <p class="card-text">Admission no:{value.admissionno}</p>
                                                    <a href="#" class="btn btn-primary">VIEW</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewAll