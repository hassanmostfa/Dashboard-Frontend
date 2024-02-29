import React from 'react'
import Header from './Header'
import { useState } from "react";
import { Table } from 'react-bootstrap';



const SearchProduct = () => {
    const [data , setData] = useState([]);

    async function searchProduct(key) {
        let result = await fetch(`http://localhost:8000/api/search/${key}`);
        result = await result.json();
        console.log(result);
        setData(result);
    }
    return (
        <div>
            <Header/>
            <div className='col-sm-6 offset-sm-3'>
                <h1>Search Product</h1>
                <br/>
                <input type='search' onChange={(e) => searchProduct(e.target.value)} className='form-control' placeholder='Search Product'/>
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
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
                        </tr>
                    ))}
                </tbody>
            </Table>
            </div>
        </div>
    )
}

export default SearchProduct
