import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
         document.title = `Lingua | ${title}`;
    }, [title])
}

export default useTitle;