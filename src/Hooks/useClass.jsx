import { useEffect, useState } from "react";

const useClass = () => {
    const [classList, setClassList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://lingua-language-school-server.vercel.app/allData')
            .then(res => res.json())
            .then(data => {
                setClassList(data);
                setLoading(false)
            });
    }, []);
    return[classList, loading]
};

export default useClass;