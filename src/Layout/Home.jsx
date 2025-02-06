import Message from "../components/Message";
import Products from "../components/Products";
import Slider from "../components/Slider";
import TopDeal from "../components/TopDeal";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-3xl text-center italic text-purple-600 py-4">Welcome to Equisports</h2>
            {/* slide section */}
            <Slider></Slider>
            <Products></Products>
            <TopDeal></TopDeal>
            <Message></Message>
        </div>
    );
};

export default Home;