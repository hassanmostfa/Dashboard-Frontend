import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from "./Header";

async function updateProduct(productId, data) {
    try {
        let result = await fetch(`http://localhost:8000/api/updateProduct/${productId}`, {
            method: "put",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });
        result = await result.json();
        return result;
    } catch (error) {
        console.error('Error updating product:', error);
        return null;
    }
}

const UpdateProduct = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            let result = await fetch(`http://localhost:8000/api/getProduct/${id}`);
            result = await result.json();
            setData(result);
        };
        fetchData();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedData = {
            name: e.target.elements.name.value,
            price: e.target.elements.price.value,
            description: e.target.elements.description.value,
            image: e.target.elements.image.value
        };
        const result = await updateProduct(id, updatedData);
        console.log(result);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            e.target.nextElementSibling.src = event.target.result;
        };
        reader.readAsDataURL(file);
    };

    return (
        <div>
            <Header />
            Update Product
            <form className='form' onSubmit={handleUpdate}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" defaultValue={data.name} />
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" name="price" defaultValue={data.price} />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" name="description" defaultValue={data.description} />
                </div>
                <div>
                    <label>Image</label>
                    <input type="file" name="image" defaultValue={data.image} onChange={handleImageChange}/>
                    <br />
                    <img width={100} height={100} src={`http://localhost:8000/${data.image}`} alt="" />
                    <br/>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Update Product</button>
            </form>
        </div>
    )
}

export default UpdateProduct;