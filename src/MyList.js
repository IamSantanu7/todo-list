import { Link } from "react-router-dom";

const MyList = (props) => {
    const lists = props.lists;
    //const handleDelete = props.handleDelete

    return ( 
        <div className="my-list">
            {lists.map((list) => (
                <div className="list-preview" key={list.id}>
                    {/*route parameters*/}
                    <Link to = {`/lists/${list.id}`}>    
                    <h2>{list.title}</h2>
                    </Link>
                    <p>-{list.author}</p>
                    {/* <button onClick={() => handleDelete(list.id)}>delete</button> */}
                </div>
            ))}
        </div>
     );
}
 
export default MyList;