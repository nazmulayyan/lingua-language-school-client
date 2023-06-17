import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useClass from "../../Hooks/useClass";
import ClassItem from "../Home/ClassItem/ClassItem";


const Classes = () => {
    
    const [classList] = useClass()
    const popularClasses = classList.filter(item => item.category === 'class')

    return (
        <div className="w-11/12 mx-auto mb-28">
            <div>
                <SectionTitle heading={'popular Classes'} />
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