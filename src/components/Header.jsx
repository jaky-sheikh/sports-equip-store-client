import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div className="w-11/12 mx-auto text-center bg-blue-400 p-6">
            <h1 className="text-4xl text-white">Sports Equipment Store</h1>
            <Marquee pauseOnHover={true} speed={100}>
                <p className="text-fuchsia-700 text-lg">Gear Up for Greatness</p>
            </Marquee>

        </div>
    );
};

export default Header;