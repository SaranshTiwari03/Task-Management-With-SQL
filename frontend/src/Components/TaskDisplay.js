import React, { useState,useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import "../StyleComponents/Table.css"

function Display() {
    const [user,setUser]=useState([])

    const fetchUser=async()=>{
        try{
            let url="http://localhost:8000/task"
            const ans=await axios.get(url)
            console.log(ans.data);
            setUser(ans.data);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{

        fetchUser();
    },[])

    const myData=user.map((key)=>{
        return(
            <>
                <tr>
                    <td>{key.id}</td>
                    <td>{key.name}</td>
                    <td>{key.task}</td>
                    <td>{key.status}</td>
                </tr>
            </>
        )
    })

  return (
    <>
      <div class="content-container">
        <h1>Display</h1>
            <table class="custom-table">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Task</th>
                    <th>Status</th>
                </tr>
                {myData}
            </table>
            <button class="custom-button"><Link className="Link" to="/inserttask">Add New Task</Link></button>
    </div>

    </>
  )
}

export default Display
