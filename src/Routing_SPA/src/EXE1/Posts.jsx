import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {getUsersPosts} from '../Utilis'


export default function Posts() {

    const [posts , setPosts] = useState ([]);
    const params = useParams();

    const getPosts = async ()=>{
        const response = await getUsersPosts(params.id);
        setPosts(response);
    }




useEffect(()=>{
    getPosts();
},[])



  return (
    <>
    <h2>Posts</h2>
    {
        posts.map((post)=>{ return(
           <div style={{border:"1px solid black"}}>
            <div><strong>Title: <br/></strong>{post.title}</div>
            <div><strong>Body: <br/></strong>{post.body}</div>
         </div>
        )
        })
    }
    </>



  )
}
