import { useState } from "react";
import { useParams } from "react-router-dom";

import { firestore } from '../firebase';
import { addDoc, collection } from "@firebase/firestore"

const ref = collection(firestore,'blogs');

const BlogView = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState([]);

    ref.doc(id).get()
        .then((snapshot) => {
            const data = snapshot.data();
            setBlog(data);
        });

    return (
        <div>
            <div className='w-full max-w-2xl mx-auto'>
                <h1 className='text-2xl'>
                    <span><b>Title:</b></span>
                    <span>{blog.Title}</span>
                </h1>
                <p><b>Body:</b></p>
                <p>{blog.Body}</p>
            </div>
        </div>
    )
}

export default BlogView;