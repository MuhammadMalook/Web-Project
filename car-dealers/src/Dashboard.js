import React, { useState,useEffect } from 'react'
import './App.css'
import './css/component.css'
import { Redirect, useHistory } from 'react-router-dom'

const Statistics = () => {
    const [civic,setCivic] = useState([])
    const [brv,setBrv] = useState([])
    const [accord,setAccord] = useState([])
    const [soldCars, setSoldCars] = useState([])
    const [spare,setSpare] = useState([])
    const [soldSpare, setSoldSpare] = useState([])

    useEffect(  ()=>
{   
    fetch('/brv').then(data=> data.json()).then(results=> setBrv(results.result))
    fetch('/accord').then(data=> data.json()).then(results=> setAccord(results.result))
    fetch('/civic').then(data=> data.json()).then(results=> setCivic(results.result))
    fetch('/userCar').then(data=> data.json()).then(results=> setSoldCars(results.result))
    fetch('/spare').then(data=> data.json()).then(results=> setSpare(results.result))
    fetch('/userSpare').then(data=> data.json()).then(results=> setSoldSpare(results.result))
    
},[])

    return (

        <div className="col-md-6 mt-4">
            <div className="row mb-5">
                <div class="col-sm-3 offset-md-1 ">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Total Cars</h5>
                            <p class="card-text">{civic.length+brv.length+accord.length}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 offset-md-2 ">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Total Sold Cars</h5>
                            <p class="card-text">{soldCars.length}</p>
                        </div>
                    </div>
                </div>
            </div>

       <div className="row mb-2">
                <div class="col-sm-3 offset-md-1 ">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Spare Parts Available</h5>
                            <p class="card-text">{spare.length}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 offset-md-2 ">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Total Sold Spare Parts</h5>
                            <p class="card-text">{soldSpare.length}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )

}

const Operations = () => {

    

    const history = useHistory();
    const addCar = ()=>{
        history.push('/AddCar')
    }
    const addSpare = ()=>{
        history.push('/AddSpare')
    }
    const delCar = ()=>
    {
        history.push('/Accord')
    }
    const delSp = ()=>
    {
        history.push('/spare')
    }


    return (
        <div className="col-md-6">
            <div className="row mb-5">
                <div className="col-md-6">
                    <button class="btn btn-3 btn-3b icon-plus" onClick={addCar}>Add Car</button>
                </div>
                <div className="col-md-6">
                    <button class="btn btn-3 btn-3b icon-plus" onClick={addSpare}>Add SP</button>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-6">
                    <button class="btn btn-3 btn-3b icon-remove" onClick={delCar}>Delete Car</button>
                </div>
                <div className="col-md-6">
                    <button class="btn btn-3 btn-3b icon-remove" onClick={delSp}>Delete SP</button>

                </div>
            </div>

        </div>

    )
}
const Dashboard = () => {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <Operations></Operations>
                <Statistics></Statistics>


            </div>
        </div>
    )

}
export default Dashboard;