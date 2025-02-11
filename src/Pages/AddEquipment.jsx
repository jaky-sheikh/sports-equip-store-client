import { useState } from "react";


const AddEquipment = () => {

    const user = JSON.parse(localStorage.getItem("user"));
    const [formData, setFormData] = useState({
        image: "",
        itemName: "",
        categoryName: "",
        description: "",
        price: "",
        rating: "",
        customization: "",
        processingTime: "",
        stockStatus: "",
        userEmail: user?.email || "",
        userName: user?.name || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/equipments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Equipment added successfully!");
            setFormData({
                image: "",
                itemName: "",
                categoryName: "",
                description: "",
                price: "",
                rating: "",
                customization: "",
                processingTime: "",
                stockStatus: "",
                userEmail: user?.email || "",
                userName: user?.name || "",
            });
        }
    };



    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded">
            <h2 className="text-2xl font-bold mb-4">Add Equipment</h2>
            <form onSubmit={handleSubmit} className="grid gap-4">
                <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="input input-bordered w-full" />
                <input type="text" name="itemName" placeholder="Item Name" value={formData.itemName} onChange={handleChange} className="input input-bordered w-full" />
                <input type="text" name="categoryName" placeholder="Category Name" value={formData.categoryName} onChange={handleChange} className="input input-bordered w-full" />
                <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="textarea textarea-bordered w-full"></textarea>
                <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="input input-bordered w-full" />
                <input type="number" name="rating" placeholder="Rating" value={formData.rating} onChange={handleChange} className="input input-bordered w-full" />
                <input type="text" name="customization" placeholder="Customization" value={formData.customization} onChange={handleChange} className="input input-bordered w-full" />
                <input type="text" name="processingTime" placeholder="Processing Time" value={formData.processingTime} onChange={handleChange} className="input input-bordered w-full" />
                <input type="number" name="stockStatus" placeholder="Stock Status" value={formData.stockStatus} onChange={handleChange} className="input input-bordered w-full" />
                <input type="email" name="userEmail" value={formData.userEmail} className="input input-bordered w-full bg-gray-200" readOnly />
                <input type="text" name="userName" value={formData.userName} className="input input-bordered w-full bg-gray-200" readOnly />
                <button type="submit" className="btn btn-primary">Add Equipment</button>
            </form>
        </div>
    );
};

export default AddEquipment;