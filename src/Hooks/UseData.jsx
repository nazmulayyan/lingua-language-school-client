import { useEffect, useState } from "react";

const UseData = () => {
    const [instructors, setInstructor] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const popularInstructor = data.filter(item => item.category === 'instructor');
                setInstructor(popularInstructor);
            });
    }, []);
};

export default UseData;