import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div className="w-11/12 mx-auto text-center bg-cyan-200 p-6">
            <h1 className="text-4xl text-emerald-500">Sports Equipment Store</h1>
            <Marquee pauseOnHover={true} speed={100}>
                <p className="">Gear Up for Greatness</p>
            </Marquee>

        </div>
    );
};

export default Header;