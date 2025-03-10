import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyEquipmentList = () => {

    const { user } = useContext(AuthContext);
    const [equipments, setEquipments] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`https://sports-equipment-store.vercel.app/equipments/${user.email}`)
                .then(res => res.json())
                .then(data => setEquipments(data))
                .catch(err => console.error(err));
        }
    }, [user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sports-equipment-store.vercel.app/equipments/${id}`, {
                    method: 'DELETE',
                })
                    .then(() => {
                        setEquipments(equipments.filter(item => item._id !== id));

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your equipment has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(err => console.error(err));
            }
        });
    }


    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">My Equipment List</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {equipments.map((equipment) => (
                    <div key={equipment._id} className="bg-base-300 p-4 shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold">{equipment.itemName}</h3>
                        <img src={equipment.image} alt="" />
                        <p>Category: {equipment.categoryName}</p>
                        <p>{equipment.description}</p>
                        <p>Price: ${equipment.price}</p>
                        <div className="flex justify-between mt-2">
                            <Link to={`/updateEquipment/${equipment._id}`}>
                                <button
                                    className="bg-blue-500 text-white px-3 py-1 rounded"
                                >
                                    Update
                                </button>
                            </Link>
                            <button
                                onClick={() => handleDelete(equipment._id)}
                                className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyEquipmentList;