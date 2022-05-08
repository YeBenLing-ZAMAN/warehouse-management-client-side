import { useEffect, useState } from "react";

const useItemLoad = (id) => {
const [item, setItem] = useState([]);
    useEffect(() => {
        const url = `https://mysterious-scrubland-93327.herokuapp.com/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id]);
    return [item]
}

export default useItemLoad;
