import { Bounce, Fade } from "react-awesome-reveal";


const Message = () => {
    return (
        <div className="text-center bg-yellow-300 py-10 px-4 md:px-10 lg:px-20">
            <div className="divider text-lg md:text-2xl text-pink-600">Message from EquiSports</div>
            <div>
                <h2 className="text-lg md:text-2xl font-semibold">First-class materials and innovative technologies</h2>
                <p className="text-sm md:text-base">Quality doesn’t have to be expensive! Being sports enthusiasts ourselves we know about the importance of <br /> high-quality sports equipment. That’s why we regularly offer low-priced sportswear by famous manufacturers.</p>
            </div>
            <div className="mt-4">
                <h2 className="text-lg md:text-2xl font-semibold">For football fans and sporting aces</h2>
                <Fade><p className="text-sm md:text-base">Your heart beats for the round leather ball? </p></Fade>
                <Bounce><p className="text-sm md:text-base text-red-600">Ours too!</p></Bounce>
            </div>
            <div className="mt-4">
                <h2 className="text-lg md:text-2xl font-semibold">Score now and get your benefits!</h2>
                <p className="text-sm md:text-base">EquiSports sells original products as good as new and licenced merchandise like cheap soccer jerseys at top prices. We can realise these extremely low <br /> prices because we buy remaining stock items and discontinued goods from manufacturers. We deliver your favourite items worldwide! Start now and save money!</p>
            </div>
        </div>
    );
};

export default Message;