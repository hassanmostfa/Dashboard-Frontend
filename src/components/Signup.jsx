import React from "react";
import { useState , useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
const Signup = () => {

    useEffect(() => {
        const user = localStorage.getItem("user-info");
        if (user) {
        navigate("/add");
        }
    });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

async function signUp() {
let item = { name, email, password };
// console.log(item);
let result = await fetch("http://localhost:8000/api/signup", {
    method: "post",
    body: JSON.stringify(item),
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    },
});
result = await result.json();
localStorage.setItem("user-info", JSON.stringify(result));
navigate("/add");
}
return (
<div>
    <Header />
    <div className="container">
    <h1>signup page</h1>
        <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        type="text"
        placeholder="Username"
        />{" "}
        <br />
        <input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        type="email"
        placeholder="Email"
        />{" "}
        <br />
        <input
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        type="password"
        placeholder="Password"
        />{" "}
        <br />
        <button className="btn btn-primary" onClick={signUp} type="submit">
        Sign up
        </button>
    </div>
</div>
);
};

export default Signup;
