import { useEffect, useState } from "react";


const useWareHouseLoad = (id) => {
    const [warehouses, setWarehouses] = useState([]);
    useEffect(() => {
        const toLoad=async ()=>{
            const url = `http://localhost:5000/warehouse`
            await fetch(url)
            .then(res => res.json())
            .then(data => setWarehouses(data));
        }
        toLoad();
    }, []);
    return [warehouses]
}

export default useWareHouseLoad;