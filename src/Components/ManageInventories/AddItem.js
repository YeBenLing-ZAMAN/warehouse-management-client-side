import React from 'react';
import { useForm } from "react-hook-form";


const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    }
    return (
        <div style={{'height':"100vh"}} className='d-flex align-items-center justify-content-center'>
            <div className='container w-100 w-md-50'>
                <h3 className='text-center'>Add New Item in Inventory Managemant System</h3>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='mb-2' placeholder='Descripion' {...register("description")} />
                    <input className='mb-2' placeholder='Quantity' type="number" {...register("Quantity")} />
                    <input className='mb-2' placeholder='Supplier Name' {...register("supplier", { required: true, maxLength: 20 })} />
                    <input className='mb-2' placeholder='Photo Url' type="text" {...register("img")} />
                    <input className='btn btn-dark' type="submit" value='Add Service ' />
                </form>
            </div>
        </div>
    );
};

export default AddItem;