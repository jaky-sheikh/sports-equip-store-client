import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllEquipment = () => {
    const [products, setProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setSortedProducts(data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleSortByPrice = () => {
        const sorted = [...products].sort((a, b) => a.price - b.price);
        setSortedProducts(sorted);


        fetch('http://localhost:5000/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sorted),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Optionally handle success response
            })
            .catch((error) => {
                console.error('Error sending data to server:', error);
            });
    };

    return (
        <div className="container mx-auto my-8">
            <h2 className="text-3xl font-bold text-center mb-6">All Sports Equipment</h2>
            <div className="text-center mb-4">
                <button
                    onClick={handleSortByPrice}
                    className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                >
                    Sort by Price
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Price</th>
                            <th className="py-2 px-4 border-b">Details</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedProducts.map((product) => (
                            <tr key={product.id}>
                                <td className="py-2 px-4 border-b">{product.name}</td>
                                <td className="py-2 px-4 border-b">${product.price}</td>
                                <td className="py-2 px-4 border-b">{product.details.slice(0, 30)}...</td>
                                <td className="py-2 px-4 border-b">
                                    <Link to={`/products/${product.id}`}>
                                        <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                                            View Details
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllEquipment;
