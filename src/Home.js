//import { useState, useEffect } from "react";
import MyList from "./MyList";
import useFetch from "./useFetch";
//import Schedule from "./Schedule";

const Home = () => {
    const {data:lists, isPending, error} = useFetch("http://localhost:8000/lists");

    return ( 
        <div className="home">
            {isPending && <div>Loading...</div>}
            {lists && <MyList lists = {lists} title="All lists!" /> }
            {error && <div>{error}</div>}
        </div>
    );
}

export default Home;




//         {title: "Landing on Reality", body: "Be focused, success is....", author: 'God', id: 1},
//         {title: "Practice is the KEY", body: "Go deep into the topic and practice as....", author: 'Evil Santanu', id: 2},
//         {title: "Closer than Ever", body: "Keep doing good things....", author: 'Maa Saraswati', id: 3},
//         {title: "You will get the Result", body: "Do well, and get the results", author: 'Lord Krishna', id: 4}