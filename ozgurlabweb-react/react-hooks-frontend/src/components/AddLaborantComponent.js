import React, { useEffect, useState } from 'react'
import LaborantService from '../services/LaborantService'
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddLaborantComponent = () => {

    const [laborantName, setlaborantName] = useState('')
    const [laborantSurname, setlaborantSurname] = useState('')
    const navigate  = useNavigate();
    const {id} = useParams();

    const saveOrUpdateLaborant = (e) =>{
        e.preventDefault();

        const laborant = {laborantName, laborantSurname}

        if(id){
            LaborantService.updateLaborant(id, laborant).then((response) =>{
                navigate.push('/laborants')
            }).catch(error => {
                console.log(error);
            })

        }else{
            LaborantService.createLaborant(laborant).then((response) =>{

                console.log(response.data)
    
                navigate.push('/laborants');
    
            }).catch(error =>{
                console.log(error)
            })
        }

       
    }
    useEffect(() => {

        LaborantService.getLaborantById(id).then((response) =>{
            setlaborantName(response.data.laborantName)
            setlaborantSurname(response.data.laborantSurname)
        }).catch(error =>{
            console.log(error)
        })
      
    }, [])
    

  const title =() =>{

    if(id){
        return <h2  className="text-center">Update Laborant</h2>
    }else{
        return <h2  className="text-center">Add Laborant</h2>
    }
  }
  return (
    <div>
      <br/><br/>
      <div className="container">
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                {
                    title()
                }
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label className="form-label">First Name : </label>
                            <input type="text" 
                            placeholder = "Enter first name"
                            name = "firstName"
                            className = "form-control"
                            value={laborantName}
                            onChange={(e) => setlaborantName(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className = "form-group mb-2">
                            <label className = "form-label"> Last Name :</label>
                            <input
                            type = "text"
                            placeholder = "Enter last name"
                            name = "Surname"
                            className = "form-control"
                            value = {laborantSurname}
                            onChange = {(e) => setlaborantSurname(e.target.value)}
                            >
                            </input>
                        </div>
                        <button className = "btn btn-success" onClick = {(e) => saveOrUpdateLaborant(e)} >Submit </button>
                        <Link to="/laborants" className="btn btn-danger">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddLaborantComponent
