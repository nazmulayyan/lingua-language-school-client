import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useClass from "../../Hooks/useClass";
import ClassItem from "../Home/ClassItem/ClassItem";
import img1 from '../../assets/classes/img1.jpg'
import { Link } from "react-router-dom";


const Classes = () => {
    
    const [classList] = useClass()
    const popularClasses = classList.filter(item => item.category === 'class')

    return (
        <div className="w-11/12 mx-auto mb-28">
            <div className="relative ">
                <img className="h-screen w-full" src={img1} alt="" />
                <div className="flex justify-center  items-center absolute glassEffect top-0 w-full h-full capitalize">
                    <div>
                        <h3 className="md:text-4xl text-3xl font-bold uppercase  text-white"> welcome to our classes</h3>
                        <div className="flex mt-5 justify-center">
                            <Link to='/' className="py-3 px-4 bg-white text-gray-700 font-semibold text-xl capitalize rounded-lg ">go back</Link>
                            <p className="py-3 px-4 bg-white font-semibold text-xl capitalize rounded-lg text-cyan-500 ml-5">Classes</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-28">
                <SectionTitle heading={'our Classes'} />
                <SectionTitle subHeading={'Discover the best classes available'} />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-20">
                {popularClasses.map(item => (
                    <ClassItem key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Classes;