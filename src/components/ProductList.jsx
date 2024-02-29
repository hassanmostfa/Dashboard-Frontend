import React from 'react'
import Header from './Header';
import { useState , useEffect } from "react";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ProductList = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    async function deleteProduct(id) {
        let result = await fetch(`http://localhost:8000/api/delete/${id}`, {
            method: "delete",
        });
        result = await result.json();
        fetchData();
        console.log(result);
    }
    const fetchData = async () => {
        let result = await fetch("http://localhost:8000/api/listProducts");
        result = await result.json();
        setData(result);
    };

    return (
        <div>
        <Header/>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td><img src={"http://localhost:8000/" + item.image} alt='No' width="100" /></td>
                        <td>
                            <button onClick={() => deleteProduct(item.id)} className="btn btn-danger">Delete</button>
                            <Link className="btn btn-primary ms-3" to={`/update/${item.id}`}>Update</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
            
        </div>
    )
}

export default ProductList
