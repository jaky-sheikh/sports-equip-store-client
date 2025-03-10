import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";



const AddEquipment = () => {

    const { user } = useContext(AuthContext);

    const handleAddEquipment = event => {
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const itemName = form.itemName.value;
        const categoryName = form.categoryName.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;

        const newEquipments = { image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus, userEmail, userName };


        fetch('https://sports-equipment-store.vercel.app/equipments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEquipments)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Equipment added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    event.target.reset();
                }
            })
    }



    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded">
            <h2 className="text-2xl font-bold mb-4">Add Equipment</h2>
            <form onSubmit={handleAddEquipment} className="grid gap-4">
                <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                <input type="text" name="itemName" placeholder="Item Name" className="input input-bordered w-full" />
                <input type="text" name="categoryName" placeholder="Category Name" className="input input-bordered w-full" />
                <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full"></textarea>
                <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" />
                <input type="number" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                <input type="text" name="customization" placeholder="Customization" className="input input-bordered w-full" />
                <input type="text" name="processingTime" placeholder="Processing Time" className="input input-bordered w-full" />
                <input type="number" name="stockStatus" placeholder="Stock Status" className="input input-bordered w-full" />
                <input defaultValue={user.email} type="email" name="userEmail" className="input input-bordered w-full bg-gray-200" readOnly />
                <input defaultValue={user.displayName} type="text" name="userName" className="input input-bordered w-full bg-gray-200" readOnly />
                <button type="submit" className="btn btn-primary">Add Equipment</button>
            </form>
        </div>
    );
};

export default AddEquipment;