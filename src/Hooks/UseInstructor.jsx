import { useEffect, useState } from "react";

const UseInstructor = () => {
    const [instructors, setInstructor] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setInstructor(data);
                setLoading(false)
            });
    }, []);
    return [instructors, loading]
};

export default UseInstructor;