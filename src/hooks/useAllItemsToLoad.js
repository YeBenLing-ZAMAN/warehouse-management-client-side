import { useEffect, useState } from "react";

const useAllItemsToLoad = () => {
const [items, setItems] = useState([]);

    useEffect(() => {
        const toLoad=async ()=>{
            const url = `https://mysterious-scrubland-93327.herokuapp.com/items`
            await fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
        }
        toLoad();
    }, []);
    return [items, setItems];
}

export default useAllItemsToLoad;