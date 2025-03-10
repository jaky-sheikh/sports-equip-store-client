import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

const UpdateEquipment = () => {

    const { id } = useParams();
    const singleEquipmentData = useLoaderData();
    const { user } = useContext(AuthContext);

    const [image, setImage] = useState(singleEquipmentData?.image);
    const [itemName, setItemName] = useState(singleEquipmentData?.itemName);
    const [categoryName, setCategoryName] = useState(singleEquipmentData?.categoryName);
    const [description, setDescription] = useState(singleEquipmentData?.description);
    const [price, setPrice] = useState(singleEquipmentData?.price);
    const [rating, setRating] = useState(singleEquipmentData?.rating);
    const [customization, setCustomization] = useState(singleEquipmentData?.customization);
    const [processingTime, setProcessingTime] = useState(singleEquipmentData?.processingTime);
    const [stockStatus, setStockStatus] = useState(singleEquipmentData?.stockStatus);



    // const { image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus, userEmail, userName } = singleEquipmentData;



    const handleUpdateEquipment = event => {
        event.preventDefault();

        // const form = event.target;

        // const image = form.image.value;
        // const itemName = form.itemName.value;
        // const categoryName = form.categoryName.value;
        // const description = form.description.value;
        // const price = form.price.value;
        // const rating = form.rating.value;
        // const customization = form.customization.value;
        // const processingTime = form.processingTime.value;
        // const stockStatus = form.stockStatus.value;
        // const userEmail = form.userEmail.value;
        // const userName = form.userName.value;

        const updatedEquipments = { image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus };
        // // console.log(updatedEquipments);

        fetch(`https://sports-equipment-store.vercel.app/equipment/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedEquipments)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Equipment updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    event.target.reset();
                }
            })
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded">
            <h2 className="text-2xl font-bold mb-4">Update Equipment:{itemName}</h2>
            <form onSubmit={handleUpdateEquipment} className="grid gap-4">
                <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" className="input input-bordered w-full" />
                <input type="text" name="itemName" value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder="Item Name" className="input input-bordered w-full" />
                <input type="text" name="categoryName" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} placeholder="Category Name" className="input input-bordered w-full" />
                <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="textarea textarea-bordered w-full"></textarea>
                <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" className="input input-bordered w-full" />
                <input type="number" name="rating" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating" className="input input-bordered w-full" />
                <input type="text" name="customization" value={customization} onChange={(e) => setCustomization(e.target.value)} placeholder="Customization" className="input input-bordered w-full" />
                <input type="text" name="processingTime" value={processingTime} onChange={(e) => setProcessingTime(e.target.value)} placeholder="Processing Time" className="input input-bordered w-full" />
                <input type="number" name="stockStatus" value={stockStatus} onChange={(e) => setStockStatus(e.target.value)} placeholder="Stock Status" className="input input-bordered w-full" />
                <input defaultValue={user.email} type="email" name="userEmail" className="input input-bordered w-full bg-gray-200" readOnly />
                <input defaultValue={user.displayName} type="text" name="userName" className="input input-bordered w-full bg-gray-200" readOnly />
                <button type="submit" className="btn btn-primary">Update Equipment</button>
            </form>
        </div>
    );
};

export default UpdateEquipment;