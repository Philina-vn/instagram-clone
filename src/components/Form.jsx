import React, { useState, useContext } from 'react';
import {Card, makeStyles, TextField, Button } from "@material-ui/core";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import Context from './Context'

import { Context } from "./Context/GlobalContext";

const useStyles = makeStyles({
    createTask: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '15px',
        border: '1px solid',
        margin: '15px',
    },
    margin: {
        margin: '10px 0',
    }
})


function Form() {
    const [post, setPost] = useState({
        caption: "",
        imageUrl: "",
    })

    const { createPost } = useContext(Context);
    
   
    function savePost(ev) {
        ev.preventDefault()
        if (post.caption.trim() && post.imageUrl.trim() ){
            createPost(post) 

            setPost({
                caption: "",
                imageUrl: "",
            });
        }
    }


    return (
        <div className="colum__item card"> 
            <form onSubmit={(ev) => savePost(ev)} className="card__form">
                <div className="card__body">
                    <label className="card__label">Caption</label>
                    <input  onChange={ev => setPost({...post, caption: ev.target.value,})} className="card__input" type="text"/>

                    <label className="card__label">imageUrl</label>
                    <input  onChange={ev => setPost({...post, imageUrl: ev.target.value,})} className="card__input" type="text"/>
                </div>
                <div className="card__footer">
                    <button type="submit" className="card__btn btn-primary">Create</button>
                </div>
            </form> 
        </div>
    )
}

export default Form

