import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const addItems = () => {
    const { user } = useContext(AuthContext);


    const { refetch, data: addClass = [] } = useQuery({
        queryKey: ['addClass', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://lingua-language-school-server.vercel.app/addClass?email=${user.email}`)
            return res.json;
        },
    })

    return [addClass, refetch]
}


export default addItems;