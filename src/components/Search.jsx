import React, { useState } from 'react'
import Navi from './Navi'

const Search = () => {
     const [input,changeInput] =useState(
        {roll:""}
     )
     const inputHandler=(event)=>{
        changeInput( {...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(input)
    }
  return (
    <div>
        <Navi/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-control"></label>
                            <input type="number" className="form-control" name='roll' value={input.roll} onChange={inputHandler}  />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValues}>SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search