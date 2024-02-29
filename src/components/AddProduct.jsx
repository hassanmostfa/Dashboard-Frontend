import React from 'react'
import Header from './Header';
import { useState } from "react";


const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    async function addProduct() {
        console.log(name, price, description, image);
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("image", image);
        await fetch("http://localhost:8000/api/addProduct", {
            method: "post" ,
            body : formData ,
        });
        alert("Product Added Successfully");
    }
    return (
        <div>
            <Header/>
            <div className="col-sm-6 offset-sm-3">
                <h1>Add Product</h1>
                <br/>
                    <div className="form-group">
                        <input name="name" type="text" placeholder='Product Name'
                        onChange={(e) => setName(e.target.value)} 
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <input name="price" type="text" 
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder='Product Price' className="form-control" />
                    </div>
                    <div className="form-group">
                        <input name="description" type="text"
                        onChange={(e) => setDescription(e.target.value)} 
                        placeholder='Product Description' className="form-control" />
                    </div>
                    <div className="form-group">
                        <input name="image" type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        placeholder='Product Image' className="form-control" />
                    </div>
                    <button className="btn btn-primary" type="submit" onClick={addProduct}>Add Product</button>
            </div>
        </div>
    )
}

export default AddProduct
