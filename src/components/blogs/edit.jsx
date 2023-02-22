import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { firestore } from '../firebase';
import { addDoc, collection } from "@firebase/firestore"

const ref = collection(firestore,'blogs');

const BlogEdit = () => {
    const {id} = useParams();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect((id) => {
        Blogs.doc(id).get()
        .then((snapshot) => {
            const data = snapshot.data();
            setTitle(data.Title);
            setBody(data.body);
        });
    }, [])

    const sub = (e) => {
        e.preventDefault();
        //Add data to the store
        Blogs.doc(id).update({
            Title: title,
            Body: body,
            last_updated: fb.firestore.Timestamp.fromDate(new Date())
        })
        .then((docRef) => {
            alert('Data Successfully Submitted')
        })
        .catch((error) => {
            console.error('Error adding document: ', error)
        })
    }

    return (
        <div>
            <form onSubmit={(event) => {sub(event)}}>
                <input type='text' placeholder='Title' 
                    onChange={(e) => {setTitle(e.target.value)}} required/>
                
                <textarea name='content' type='text' placeholder='Write your content here' rows='10' cols='150' 
                    onChange={(e) => {setBody(e.target.value)}} required>
                </textarea>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default BlogEdit;