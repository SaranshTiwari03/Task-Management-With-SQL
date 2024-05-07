import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "../StyleComponents/modal.css"

function Task() {
    const [user,setUser]=useState([])

    const myNav=useNavigate();
    const [input,setInput]=useState(({
        name:"",
        task:"",
        status:""
    }))

    const fetchUser=async()=>{
        try{
            let url="http://localhost:8000/userdisplay"
            const ans=await axios.get(url)
            setUser(ans.data);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{

        fetchUser();
    },[])



    const handleChange=(e)=>{
        setInput(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleSubmit=async e=>{
        e.preventDefault()

        try {
            let url="http://localhost:8000/taskinsert"
            await axios.post(url,input)
            myNav("/taskdisplay")
        } catch (error) {
            console.log(error)
        }
    }

    const name=user.map((key)=>{
        return(
            <>
               <option>{key.name}</option>
            </>
        )
    })
    


  // Function to close the modal
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
                <select class="my-select" name="name" onChange={handleChange}>
                    <option>Select User Name</option>
                    {name}
                </select>
                <input class="my-input" type="text" placeholder='Enter task' name="task" onChange={handleChange} />
                <select class="my-select" name="status" onChange={handleChange}>
                    <option>Select User Name</option>
                    <option>Pending</option>
                    <option>Completed</option>
                </select>
                <button class="my-button" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Task







