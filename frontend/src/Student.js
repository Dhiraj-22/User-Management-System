import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './student.css'

function Student() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/')
            .then(res => setStudents(res))
            .catch(err => console.log(err));
    }, []);

    // console.log('Student',student);

    const handleDelete = async(id) => {
        try{
            await axios.delete('http://localhost:8080/student/'+id)
            window.location.reload();
        }
        catch(err){
            console.log(err);
        }
    }


    return (
        <div>
            <div className='heading'>
                <h1>User Management System</h1>
            </div>
                <table className='users'>
                    <thead>
                        <tr className='header'>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                          {/* {console.log(students.data)} */}
                       {
                        students!==undefined && students.data!==undefined &&
                        students.data.map(data1=>{
                            return (
                                <tr>
                                    <td>{data1.name}</td>
                                    <td>{data1.email}</td>
                                    <td className='action'>
                                        <Link className='update__link' style={{color:"blue", padding:"8px" , border:"1.5px solid black", margin:"4px"}} to={`/update/${data1.id}`}>Update</Link>
                                        <button className='btn' onClick={e => handleDelete(data1.id)}>Delete</button>   
                                    </td>

                                </tr>
                            )
                        })
                       }
                    </tbody>
                </table>
                <div className='bottom'>
                    <Link className="bottom_link" style={{color:"black", padding:"8px" ,border:"1.5px solid black" , margin:"4px"}} to='/create'>Add</Link>
                </div>
        </div>
    )
}

export default Student