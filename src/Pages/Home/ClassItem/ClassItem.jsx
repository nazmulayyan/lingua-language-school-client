import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import addItems from "../../../Hooks/addItems";

const ClassItem = ({ item }) => {

    const { image, name, instructor_name, available_seat, price, _id} = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = addItems()

    const handleAddToClass = item =>{
        console.log(item);
        if(user && user.email){
            const addedClass = {classId: _id, image, name, instructor_name, available_seat, price, email: user.email}
            fetch('http://localhost:5000/addClass',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addedClass)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }
    }
    return (
        <div>
                <div className="bg-gray-100 rounded-xl shadow-xl hover:shadow-none duration-200">
                    <div >
                        <img className="rounded-t-xl w-full h-80" src={image} alt={name} />
                    </div>
                    <div className="px-4 py-5">
                        <div className='flex justify-between'>
                            <span className='w-2/4 font-semibold text-base text-gray-600 pb-3'>Course Name:</span>
                            <span className='w-2/4 font-semibold text-base text-gray-800 pb-3'>{name}</span>
                        </div>

                        <div className='flex justify-between'>
                            <span className='w-2/4 font-semibold text-base text-gray-600 pb-3'>Instructor Name:</span>
                            <span className='w-2/4 font-semibold text-base text-gray-800 pb-3'>{instructor_name}</span>
                        </div>

                        <div className='flex justify-between'>
                            <span className='w-2/4 font-semibold text-base text-gray-600 pb-3'>Available seat:</span>
                            <span className='w-2/4 font-semibold text-base text-gray-800 pb-3'>{available_seat}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='w-2/4 font-semibold text-base text-gray-600 pb-3'>Price:</span>
                            <span className='w-2/4 font-semibold text-base text-gray-800 pb-3'>${price}</span>
                        </div>
                        
                    </div>
                    <button onClick={handleAddToClass} className="w-full btn rounded-none rounded-b-xl bg-cyan-500 hover:bg-cyan-300 text-xl font-semibold py-2">Enroll Now</button>
                </div>
            </div>
    );
};

export default ClassItem;