import { Slide } from "react-awesome-reveal";

const products = [
    {
        id: 1,
        name: "Treadmill Housefit Spiro 430",
        oldPrice: "$380.00",
        newPrice: "$369.00",
        image: "https://i.ibb.co.com/MkJLf294/tredmill.png",
    },
    {
        id: 2,
        name: "Badminton Racket Yonex",
        oldPrice: "$16.00",
        newPrice: "$10.00",
        image: "https://i.ibb.co.com/JjZCH362/pexels-karolina-grabowska-4966371.jpg",
    },
    {
        id: 3,
        name: "Badminton Racket Adidas",
        oldPrice: "$14.00",
        newPrice: "$10.00",
        image: "https://i.ibb.co.com/yFXP8gwf/adidas-padel-5018616-1280.jpg",
    },
    {
        id: 4,
        name: "Electric Treadmill Bolt H7",
        oldPrice: "$495.00",
        newPrice: "$450.00",
        image: "https://i.ibb.co.com/qFNxcWcB/3d-gym-equipment-23-2151114173.jpg",
    },
];


const TopDeal = () => {
    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 my-10">
            <Slide><h2 className="text-4xl text-center text-red-600 my-4">Top Deal</h2></Slide>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center mx-auto">
                {products.map((product) => (
                    <div key={product.id}
                        className="ml-20">
                        <img src={product.image} alt={product.name}
                            className="w-32 h-32 mx-auto mb-4" />
                        <h3 className="text-lg">{product.name}</h3>
                        <p className="text-red-500">OldPrice
                            <span className="line-through text-gray-500"> {product.oldPrice}</span>{" "} NewPrice   {product.newPrice}
                        </p>
                        <button className="btn btn-primary mt-3">Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopDeal;