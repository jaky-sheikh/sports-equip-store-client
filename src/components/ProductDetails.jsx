import { Link, useParams, useSearchParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";


const ProductDetails = () => {

    const { id } = useParams();
    const [productDetail, setProductDetail] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => {
                const selectedProduct = data.find((item) => item.id === parseInt(id));
                setProductDetail(selectedProduct);
            })
            .catch((err) => console.error(err));
    }, [id]);

    if (!productDetail) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <header>
                <Header></Header>
                <Navbar></Navbar>
            </header>
            <main>
                <div className="max-w-4xl mx-auto px-4 py-8">
                    <h2 className="text-3xl font-bold text-center mb-4">
                        {productDetail.name}
                    </h2>
                    <img
                        src={productDetail.image}
                        alt={productDetail.name}
                        className="w-full h-auto object-cover mb-4 rounded-lg"
                    />
                    <p className="text-gray-500 mb-4">
                        <span className="font-bold">Pricing: $</span>{productDetail.price}
                    </p>
                    <p className="text-gray-700 mb-8">
                        <span className="font-bold">Details:</span> {productDetail.details}</p>
                    <Link to="/">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Back to Services
                        </button>
                    </Link>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;