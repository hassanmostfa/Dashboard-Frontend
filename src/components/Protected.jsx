import React from 'react'
import { useState , useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    let Cmp = props.Cmp ;
    const navigate = useNavigate();
    
    useEffect(() => {
        const user = localStorage.getItem("user-info");
        if (!user) {
            navigate("/signup");
        }
    } , []);
    return (
        <div>
        <Cmp/>
        </div>
    )
}

export default Protected
