import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";


const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:5000/additem', data)
            .then(function (response) {
                console.log(response);
                if(response?.data?.acknowledged===true){
                    alert('your items is successfully added');
                    reset();
                }
            })
            .catch(function (error) {
                console.log("Error", error);
            });

        console.log(data);
    }

    return (
        <div style={{ 'height': "100vh" }} className='d-flex align-items-center justify-content-center'>
            <div className='container w-100 w-md-50'>
                <h3 className='text-center'>Add New Item in Inventory Managemant System</h3>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='mb-2' placeholder='Descripion' {...register("description")} />
                    <input className='mb-2' placeholder='Quantity Your put only 1 to 5000 items' type="number" {...register("Quantity", {setValueAs: v => parseInt(v),max : 5000, min: 1})} />
                    <input className='mb-2' placeholder='Supplier Name' {...register("supplier", { required: true, maxLength: 20 })} />
                    <input className='mb-2' placeholder='Photo Url' type="text" {...register("img")} />
                    <input className='btn btn-dark' type="submit" value='Add Service ' />
                </form>
            </div>
        </div>
    );
};

export default AddItem;