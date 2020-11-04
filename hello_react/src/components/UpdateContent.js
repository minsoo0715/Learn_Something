import React, {useState} from 'react'

function UpdateContent(props) {
    const [title, setTitle] = useState(props.data.title);
    const [desc, setDesc] = useState(props.data.desc);
    const [id, setID] = useState(props.data.id);

    return (
        <article>
            <h2>Update</h2>
            <form action="/create_process" method="post" onSubmit={function(e){
                e.preventDefault();
            props.onSubmit(id, title, desc);
                alert('Submit!');
            }}>
                <input type="hidden" name="id" value={id}></input>
                <p><input type="text" name="title" placeholder="title" value={title} onChange={function(e) {setTitle(e.target.value)}}></input></p>
                <p><textarea name="desc" placeholder="description" value={desc} onChange={function(e) {setDesc(e.target.value)}}></textarea></p>
                <p><input type="submit" value="완료"></input></p>
            </form>

        </article>
    );  
}




export default UpdateContent;