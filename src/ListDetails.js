import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ListDetails = () => {
    const { id } = useParams(); // Extract the 'id' parameter from the URL
    const { data: list, isPending, error } = useFetch("http://localhost:8000/lists/"+id); // Fetch data based on the extracted 'id'
    const navigate = useNavigate();

    const HandleClick = () => {
        fetch("http://localhost:8000/lists/"+id, {
            method: 'DELETE'
        }).then(() => {
            console.log("list deleted");
            navigate('/');
        })
    }

    return (
        <div className="list-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {list && (
                <article>
                    <h2>{list.title}</h2>
                    <p>written by {list.author}</p>
                    <div>{list.body}</div>
                    <button onClick={HandleClick}>Delete</button>
                </article>
            )}
        </div>
    );
};

export default ListDetails;
