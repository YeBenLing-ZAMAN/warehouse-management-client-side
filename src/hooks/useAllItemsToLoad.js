import { useEffect, useState } from "react";

const useAllItemsToLoad = () => {
const [items, setItems] = useState([]);

    useEffect(() => {
        const toLoad=async ()=>{
            const url = `http://localhost:5000/items`
            await fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
        }
        toLoad();
    }, []);
    return [items]
}

export default useAllItemsToLoad;