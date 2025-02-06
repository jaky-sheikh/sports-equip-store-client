
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import './styles.css';
import { EffectCube, Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <div className='max-w-full mx-auto px-4'>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper w-full sm:w-[400px] md:w-[500px] h-auto"
            >
                <SwiperSlide>
                    <img className='rounded-lg object-cover w-full h-auto sm:h-[300px] lg:h-[350px]' src="https://i.ibb.co.com/d0njsL2N/2149872099.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-lg object-cover w-full h-auto sm:h-[300px] lg:h-[350px]' src="https://i.ibb.co.com/gMFWxvFP/2150275276.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-lg object-cover w-full h-auto sm:h-[300px] lg:h-[350px]' src="https://i.ibb.co.com/8LyQX905/8973.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-lg object-cover w-full h-auto sm:h-[300px] lg:h-[350px]' src="https://i.ibb.co.com/bM2Hq55D/2149564366.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;