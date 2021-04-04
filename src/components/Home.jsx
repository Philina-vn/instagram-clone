import React, { useState, useContext, useContex } from 'react';
import {Card, makeStyles, TextField, Button } from "@material-ui/core";
import Post from './Post';
import Form from './Form';
import { Context } from "./Context/GlobalContext";


function Home({onSubmitPost}) {
    const { posts, setPosts, createPost} = useContext(Context);
  

    return (
        <div className="app">
      
            
            {
                posts.map((post, index )=> {
                    return <Post post={post} key={index}/> 
                })
            }
            
        </div>
    )
}

export default Home

