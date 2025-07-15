import React, { useState } from 'react'
import Navi from './Navi'
import axios from 'axios'

const Addstudent = () => {
    const [input,changeInput] =useState(
        {name:"",roll_number:"",college:"",admission_number:""}
    )
    const inputHandler=(event)=>{
        changeInput( {...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://18.144.111.41/student_api.php",input).then(
            (response)=>{
                alert("successfully added")
            }


        ).catch()
    }


    
    return (
        <div>
            <Navi/>
            <div className="container">
                <div className="row g-3 ">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3 col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-control">Name</label>
                            <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler}/>
                        </div>
                        <div className="row col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-control">College</label>
                            <input type="text" className="form-control" name='college' value={input.college} onChange={inputHandler} />
                        </div>
                        <div className="row col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-control">roll_number no</label>
                            <input type="text" className="form-control" name='roll_number' value={input.roll_number} onChange={inputHandler} />
                        </div>
                        <div className="row col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-control">Admission no</label>
                            <input type="text" className="form-control" name='admission_number' value={input.admission_number} onChange={inputHandler}/>
                        </div>
                        <div className="row col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-danger"onClick={readValues}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addstudent