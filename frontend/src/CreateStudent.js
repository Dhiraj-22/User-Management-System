import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './createstudent.css'

function CreateStudent() {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const navigate = useNavigate();

    function handleSubmit(event){
        //console.log('Element addeed successfully');
        //console.log(event.body.value);
        event.preventDefault();
        axios.post('http://localhost:8080/create',{name,email})
        .then(res => {
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log("Error:",err));
    }

  return (
    <div>
        <div className='header__update'>
            <form onSubmit={handleSubmit}>
                <h2>Add student</h2>

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

                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateStudent