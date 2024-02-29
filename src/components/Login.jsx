import React from 'react'
import Header from './Header';
import { useState , useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';


const Login = () => {

    const navigate = useNavigate();
    useEffect(() => {
        const user = localStorage.getItem("user-info");
        if (user) {
        navigate("/add");
        }
    } , [])
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function login() {
        let item = {email, password};
        // console.log(item);
        let result = await fetch("http://localhost:8000/api/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(item),
        });
        result = await result.json();
        if (result.error == "invalid email or password") {
            setError(result.error);
        } else {
            localStorage.setItem("user-info", JSON.stringify(result));
            navigate("/add");
        }
        }
    return (
        <div>
        <Header />
        <div className="container">
        {error && <Alert variant="danger">{error}</Alert>}
        <h1>Login page</h1>
            <input
            name="email" onChange={(e) => setEmail(e.target.value)} 
            required type="email" placeholder="Email"/>{" "}
            <br />
            <input name="password"onChange={(e) => setPassword(e.target.value)}
            required type="password" placeholder="Password"/>{" "}
            <br />
            <button className="btn btn-primary" onClick={login} type="submit">
            Login
            </button> 
        </div>
        </div>
    )
}

export default Login
