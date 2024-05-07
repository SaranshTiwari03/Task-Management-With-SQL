import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function User() {

    const myNav=useNavigate();
    const [input,setInput]=useState(({
        name:"",
        email:"",
        mobile:""
    }))

    const handleChange=(e)=>{
        setInput(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleSubmit=async e=>{
        e.preventDefault()

        try {
            let url="http://localhost:8000/userinsert"
            await axios.post(url,input)
            myNav("/userdisplay")
        } catch (error) {
            console.log(error)
        }
    }

    const closeModal = () => {
        myNav(-1); // Navigate back one step in history
      };
  return (
    <>
     <div className="modal-overlay">
      <div className="insert-modal">
        <span className="close-modal" onClick={closeModal}>
          &times;
        </span>
        <h1 className="modal-title">Insert Task</h1>
        <div className="insert-task">
        <div class="my-form">
        <div> 
            <input type="text" class="my-input" placeholder='Enter Name' name="name" onChange={handleChange} />
            <input type="email" class="my-input" placeholder='Enter Email' name="email" onChange={handleChange} />
            <input type="text" class="my-input" placeholder='Enter Mobile No.' name="mobile" onChange={handleChange} />

            <button class="my-button" onClick={handleSubmit}>Submit</button>
            </div>
            </div>
        </div>
      </div>
    </div>
      
        
    </>
  )
}

export default User
