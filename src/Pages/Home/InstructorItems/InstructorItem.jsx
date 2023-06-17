
const InstructorItem = ({item}) => {
    const { image, name, email } = item;
    return (
        <div>
            <div className="bg-gray-100 rounded-xl shadow-xl hover:shadow-none duration-200">
                    <div >
                        <img className="rounded-t-xl w-full h-80" src={image} alt={name} />
                    </div>
                    <div className="px-4 py-5">
                        <div className='flex justify-between'>
                            <span className='w-2/4 font-semibold text-base text-gray-600 pb-3'>Instructor Name:</span>
                            <span className='w-2/4 font-semibold text-base text-gray-800 pb-3'>{name}</span>
                        </div>

                        <div className='flex '>
                            <span className='w-1/4 font-semibold text-base text-gray-600 pb-3'>Email:</span>
                            <span className='w-fit font-semibold text-base text-gray-800 pb-3'>{email}</span>
                        </div>

                        
                        
                    </div>
                </div>
        </div>
    );
};

export default InstructorItem;