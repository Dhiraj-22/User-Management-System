import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './updatestudent.css'

function UpdateStudent() {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const {id} =  useParams();

    const navigate = useNavigate();

    function handleSubmit(event){
        //console.log(event.body.value);
        event.preventDefault();
        axios.put('http://localhost:8080/update/'+id,{name,email})
        .then(res => {
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log("Error:",err));
    }

  return (
    <div>
        <div className='header__update'>
            <form onSubmit={handleSubmit} className='form__update'>
                <h2>Update student</h2>

                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Name'
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter email' 
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <button>Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateStudent