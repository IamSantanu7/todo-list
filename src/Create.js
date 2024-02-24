import { useState } from "react";
// navigate is like history of browsing
import { useNavigate } from "react-router-dom";

const Create = () => {
    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('god');
    const[isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    // submit process
    const handleSubmit = (e) => {
        e.preventDefault();

        const list = {title, body, author};

        setIsPending(true);

        fetch("http://localhost:8000/lists", {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(list)
        }).then(() => {
            console.log("New list added.");
            setIsPending(false);
            navigate('/');
        })
    }
    return (
        <div className="create">
            <h2>Add a New List</h2>
            <form onSubmit={handleSubmit}>
                <label>List title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>List body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>List author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Santanu">Evil Santanu</option>
                    <option value="God">God</option>
                    <option value="Saraswati">Maa Saraswati</option>
                    <option value="Krishna">Lord Krishna</option>
                </select>
                { !isPending && <button>Add List</button>}
                { isPending && <button disabled>Adding...</button>}
                
            </form>
        </div>
    );
}

export default Create;