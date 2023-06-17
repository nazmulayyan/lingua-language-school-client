
const ClassItem = ({ item }) => {

    const { image, name, instructor_name, available_seat, price, } = item
    return (
        <div>
                <div className="bg-gray-100 rounded-xl shadow-xl hover:shadow-none duration-200">
                    <div >
                        <img className="rounded-t-xl w-full h-80" src={image} alt={name} />
                    </div>
                    <div className="px-4 py-5">
                        <div className='grid grid-cols-3'>
                            <span className='col-span-2 font-semibold text-base text-gray-600 pb-3'>Course Name:</span>
                            <span className='col-span-1 font-semibold text-base text-gray-800 pb-3'>{name}</span>
                        </div>

                        <div className='grid grid-cols-3'>
                            <span className='col-span-2 font-semibold text-base text-gray-600 pb-3'>Instructor Name:</span>
                            <span className='col-span-1 font-semibold text-base text-gray-800 pb-3'>{instructor_name}</span>
                        </div>

                        <div className='grid grid-cols-3'>
                            <span className='col-span-2 font-semibold text-base text-gray-600 pb-3'>Available seat:</span>
                            <span className='col-span-1 font-semibold text-base text-gray-800 pb-3'>{available_seat}</span>
                        </div>
                        <div className='grid grid-cols-3'>
                            <span className='col-span-2 font-semibold text-base text-gray-600 pb-3'>Price:</span>
                            <span className='col-span-1 font-semibold text-base text-gray-800 pb-3'>${price}</span>
                        </div>
                        
                    </div>
                    <button className="w-full btn rounded-none rounded-b-xl bg-cyan-500 hover:bg-cyan-300 text-xl font-semibold py-2">Enroll Now</button>
                </div>
            </div>
    );
};

export default ClassItem;