import { useEffect, useState } from "react";
import { Bounce } from "react-awesome-reveal";
import { Link } from "react-router-dom";


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch((error) => console.error("Error", error));
    }, []);

    return (
        <div className="container mx-auto my-8">
            <Bounce><h2 className="text-3xl font-bold text-center mb-6">Sports Equipments</h2></Bounce>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-lg rounded-lg p-4"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-75 lg:h-auto object-cover rounded-md"
                        />
                        <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                        <p className="text-gray-800 mt-2 font-medium">
                            Pricing: ${product.price}
                        </p>
                        <Link to={`/products/${product.id}`}>
                            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">
                                View Details
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;