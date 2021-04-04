import { useState, useEffect } from "react";

export default function Search() {
    const [data, setData] = useState([]);
    const [q, setQ] = useState("");
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((result) => result.json())
            .then((result) => setData(result))
            .catch((err) => console.log(err));
    }, [])
    console.log(q);
    return (
        <div className="App">
            <input type="text" placeholder="search..." onChange={(e)=>{setQ(e.target.value)}} />
            {data.filter((item) => {
                if (q ==="") {
                    return item;
                } else if (item.title.toLowerCase().includes(q.toLowerCase())) {
                    return item;
                }
            }).map((item, key) => {
                    return (
                        <div>
                           <h4>{item.title}</h4>
                        <h4>{item.id}</h4>
                        <h4>{item.body}</h4>
                        </div>
                    );
                }
                )}
        </div>
    )
}
