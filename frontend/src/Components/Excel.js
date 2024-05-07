import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import { RiFileExcel2Fill } from "react-icons/ri";

function Excel() {

    const exportexcel=async()=>{
        try {
            const response = await axios.get('http://localhost:8000/export', {
                responseType: 'blob' // Set the response type to blob to receive binary data
            });

            // Create a URL for the blob data and create a link element to trigger download
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Taskmanagement.xlsx');
            document.body.appendChild(link);
            link.click();

            // Cleanup: Remove the created URL and link element
            window.URL.revokeObjectURL(url);
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error exporting data:', error);
        }
    }


  return (
    <div>
        
        <button className="logout-button" onClick={exportexcel}>
            <RiFileExcel2Fill className="logout-icon" />
            Export
        </button>
    </div>
  )
}

export default Excel
