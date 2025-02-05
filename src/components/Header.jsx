import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div className="w-11/12 mx-auto text-center bg-blue-400 p-6">
            <h1 className="text-4xl text-white">Sports Equipment Store</h1>
            <Marquee pauseOnHover={true} speed={100}>
                <p className="text-fuchsia-700 text-lg">Gear Up for Greatness</p>
                <p className="text-white text-lg ml-6">Choose your sports and gym equipments</p>
                <p className="text-fuchsia-700 text-lg ml-6">Build your health </p>
            </Marquee>

        </div>
    );
};

export default Header;