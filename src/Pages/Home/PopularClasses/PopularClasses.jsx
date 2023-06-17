import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle.jsx";
import ClassItem from "../ClassItem/ClassItem.jsx";

const PopularClasses = () => {
    const [classList, setClassList] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const popularClasses = data.filter(item => item.category === 'class');
                setClassList(popularClasses);
            });
    }, []);

    return (
        <div className="w-11/12 mx-auto mb-28">
            <div>
                <SectionTitle heading={'Top Classes'} />
                <SectionTitle subHeading={'Discover the best classes available'} />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-20">
                {classList.map(item => (
                    <ClassItem key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default PopularClasses;
