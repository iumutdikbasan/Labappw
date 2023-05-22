import React, { useState, useEffect } from 'react'
import LaborantService from '../services/LaborantService'
import { Link } from 'react-router-dom'

const ListLaborantComponent = () => {

  const [laborants, setLaborants] = useState([])

  useEffect(() => { 

    getAllLaborants();
  }, [])

  const getAllLaborants = () =>{
    LaborantService.getAllLaborants().then((response) => {
        setLaborants(response.data)
        console.log(response.data);
    }).catch(error =>{
        console.log(error);
    })
  }
  

  const deleteLaborant = (laborantId) =>{
        LaborantService.deleteLaborant(laborantId).then((response) => {
            getAllLaborants();
        }).catch(error =>{
            console.log(error);
        })
  }
  return (
    <div className="container">
    <h2 className="text-center"> Laborant List </h2>
    <Link to={"/add-laborants"} className="btn btn-primary mb-2">Add Laborant</Link>
    <table className="table table-bordered table-striped">
        <thead>
            <th>Laborant Id</th>
            <th>Laborant Name</th>
            <th>Laborant Surname</th>
            <th>Actions</th>
        </thead>
        <tbody>
            {
                laborants.map(
                    laborant =>
                    <tr key= {laborant.id}>
                        <td>{laborant.id}</td>
                        <td>{laborant.laborantName}</td>
                        <td>{laborant.laborantSurname}</td>
                        <td>
                            <Link  className="btn btn-info" to={`/edit-laborant/${laborant.id}`}>Update</Link>
                            <button className="btn btn-danger" onClick={()=> deleteLaborant(laborant.id)}
                            style={{marginLeft:"10px"}}>Delete</button>
                        </td>
                    </tr>
                )
                
            }
        </tbody>
    </table>
    </div>
  )
}

export default ListLaborantComponent
