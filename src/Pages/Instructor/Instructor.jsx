import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import UseInstructor from "../../Hooks/UseInstructor";
import InstructorItem from "../Home/InstructorItems/InstructorItem";
import img1 from '../../assets/instructor/img1.jpg'
import { Link } from "react-router-dom";


const Instructor = () => {

    const [instructors, loading] = UseInstructor();
    const popular = instructors.filter(item => item.category === 'instructor');

    if (loading) {
        return <div>Loading...</div>; // Display a loading state
    }

    return (
        <div className="w-11/12 mx-auto mb-28">
            <div className="relative ">
                <img className="h-screen w-full" src={img1} alt="" />
                <div className="flex justify-center  items-center absolute glassEffect top-0 w-full h-full capitalize">
                    <div>
                        <h3 className="md:text-4xl text-3xl font-bold uppercase shadow-lg text-white"> our world class instructor</h3>
                        <div className="flex mt-5 justify-center">
                            <Link to='/' className="py-3 px-4 bg-white text-gray-700 font-semibold text-xl capitalize rounded-lg ">go back</Link>
                            <p className="py-3 px-4 bg-white font-semibold text-xl capitalize rounded-lg text-cyan-500 ml-5">Instructor</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-28">
                <SectionTitle heading={'our instructors'} />
                <SectionTitle subHeading={'Learn from the best instructors'} />
            </div>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-20">
                {popular.map(item => (
                    <InstructorItem key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Instructor;