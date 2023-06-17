import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Instructor from "../../Instructor/Instructor";

const PopularInstructor = () => {
    const [instructors, setInstructor] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const popularInstructor = data.filter(item => item.category === 'instructor');
                setInstructor(popularInstructor);
            });
    }, []);
    return (
        <div className="w-11/12 mx-auto mb-28">
            <div>
                <SectionTitle heading={'popular instructor'} />
                <SectionTitle subHeading={'Learn from the best instructors'} />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-20">
                {instructors.map(item => (
                    <Instructor key={item._id} item={item} />
                    
                ))}
            </div>
        </div>
    );
};

export default PopularInstructor;