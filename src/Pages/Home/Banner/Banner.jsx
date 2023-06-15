import img1 from '../../../assets/banner/img1.png'
const Banner = () => {
    return (
        <div className=''>
            <div className='w-11/12 mx-auto mt-5 mb-28'>
                <div className='w-full flex lg:flex-row flex-col-reverse justify-between items-center lg:border-b-4 border-cyan-500'>
                    <div className='lg:w-2/4 text-center lg:text-left pt-8 lg:pt-8'>
                        <h1 className=' text-4xl md:text-7xl font-semibold text-gray-800'>Learn New Languages and Move Forward</h1>
                        <p className='text-gray-700 pt-5 lg:text-left '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        <div className='flex justify-center lg:justify-normal lg:block'>
                            <button className='py-3 px-5 flex justify-center bg-cyan-500 text-xl font-semibold capitalize rounded-lg mt-5'>get started</button>
                        </div>
                    </div>
                    <div className='lg:w-2/5 relative lg:border-b-0 border-b-4 border-cyan-500'>
                        <img src={img1} alt="" />

                        <div className='absolute top-1/3 lg:block hidden -right-5 glassEffect p-3 rounded-lg'>
                            <h4 className='font-semibold text-xl text-black'>60+</h4>
                            <p className='font-semibold text-black'>interactive courses</p>
                        </div>

                        <div className='absolute top-2/3 lg:block hidden z-10 -left-20 glassEffect p-3 rounded-lg'>
                            <h4 className='font-semibold text-xl text-black'>1250+</h4>
                            <p className='font-semibold text-black'>active students</p>
                        </div>

                        <div className='absolute top-44 lg:block hidden -z-10 left-0 glassEffect p-3 rounded-lg'>
                            <p className='font-semibold text-black'>largest collection <br /> in every courses</p>
                            <p className='font-semibold text-black'>expert teacher</p>
                        </div>

                        <div className='absolute top-3/4 lg:block hidden right-0 glassEffect p-3 rounded-lg'>
                            <p className='font-semibold text-black'>Get 20% Disc Off <br /> On Every Courses </p>
                            <p className='font-semibold text-black'>Learn New Skills</p>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;