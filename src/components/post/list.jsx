import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase/firebase';
import { collection, query, orderBy, getDocs } from "@firebase/firestore"

const BlogList = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const retrievePosts = async () => {
      const ref = collection(firestore, 'posts');

      try {
        const docsSnap = await getDocs(ref);

        docsSnap.forEach(doc => {
          setPostList((postList) => [...postList, doc])
        })
      } catch (error) {
        console.log(error);
      }
    }

    retrievePosts()
  }, [])

  return (
    <div>
      <h2 className='w-full text-center font-bold text-xl'>All posts</h2>
      <div className='posts-list' style={{ backgroundColor: 'ligh-blue', marginBottom: '10px' }}>
        {postList.map((post) => {
          return (
            <div className='posts-card' key={post.id}>
              <p>Title: {post.data().title}</p>
              <p>Body: {post.data().body}</p>
              <Link to={"/blog/" + post.id}
                className='mr-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-2 border border-indigo-500 rounded'>
                View
              </Link>
              <Link to={"/blog/edit/" + post.id}
                className='mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded'>
                Edit
              </Link>
            </div>
          )

        })}
      </div>
    </div>
  )
}

export default BlogList;