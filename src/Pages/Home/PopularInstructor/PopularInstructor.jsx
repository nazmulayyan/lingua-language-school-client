import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Instructor from "../../Instructor/Instructor";
import UseInstructor from "../../../Hooks/UseInstructor";

const PopularInstructor = () => {
    
    const [instructors] = UseInstructor();
    const popular = instructors.filter(item => item.category ==='instructor')

    return (
        <div className="w-11/12 mx-auto mb-28">
            <div>
                <SectionTitle heading={'popular instructor'} />
                <SectionTitle subHeading={'Learn from the best instructors'} />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-20">
                {popular.map(item => (
                    <Instructor key={item._id} item={item} />
                    
                ))}
            </div>
        </div>
    );
};

export default PopularInstructor;