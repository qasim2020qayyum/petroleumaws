import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const GetTakhatMahal = () => {
    
const [uData, setUData] = useState([]);
    
const userData = async() =>{
    let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/takhatMahal/data/reverse`)
    res = await res.json();    
    setUData(res)
}

console.log(uData)

    useEffect(() => {
        userData()
    }, [])

    const deleteUser = async(id) =>{
        
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL_KEY}/joiya/takhatMahal/data/`+id,{
            method: "delete"
        })
        res = await res.json()
        if(res){
            userData()
        }

    }



  return (
    <div>
        <h1 className='display-0 fw-bold my-4 text-danger'>ID Takhat Mahal</h1>
        <hr />
    <table  class="table table-hover w-75 mx-auto">
    <thead>
    <tr className='bg-danger'>
      <th scope="col">Sr.No.</th>
      <th scope="col">Pump Name</th>
      <th scope="col">Date & Time</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
    <tbody>
        {
            uData.map((user, ind)=>{
                return(
                    <>
                        <tr key={user._id}>
                            <th scope="row">{ind+1}</th>
                            <td>ID Takhat Mahal</td>
                            <td>{user.createdDate}</td>
                            <td><Link to={`/id-takhat-mahal-details/${user._id}`} className='btn btn-success btn-sm me-2'>Check Details</Link> </td>
                            <td>
                                <Link to={`/edit-id-takhat-mahal-data/${user._id}`} className='btn btn-success btn-sm me-2'><i class="fas fa-edit"></i></Link> 
                                <a onClick={()=>deleteUser(user._id)}  className='btn btn-danger btn-sm'><i class="fa fa-trash" aria-hidden="true"></i></a>
                            </td>
                        </tr>
                    </>
                )
            })
        }
        </tbody>
    </table>



    </div>
  )
}

export default GetTakhatMahal
