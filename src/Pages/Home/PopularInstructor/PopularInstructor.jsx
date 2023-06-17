import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseInstructor from "../../../Hooks/UseInstructor";
import InstructorItem from "../InstructorItems/InstructorItem";

const PopularInstructor = () => {
    const [instructors, loading] = UseInstructor();
    const popular = instructors.filter(item => item.category === 'instructor');

    if (loading) {
        return <div>Loading...</div>; // Display a loading state
    }

    return (
        <div className="w-11/12 mx-auto mb-28">
            <div>
                <SectionTitle heading={'popular instructor'} />
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

export default PopularInstructor;
