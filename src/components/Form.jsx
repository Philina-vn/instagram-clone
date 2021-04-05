import React, { useState, useContext } from 'react';
import './Form.css'
// import Context from './Context'

import { Context } from "./Context/GlobalContext";




function Form() {
    const [post, setPost] = useState({
        caption: "",
        imageUrl: "",
    })

    const { createPost } = useContext(Context);
    
   
    function savePost(ev) {
        ev.preventDefault()
        if (post.caption && post.imageUrl ){
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

                    <label className="card__label">Image URL</label>
                    <input  onChange={ev => setPost({...post, imageUrl: ev.target.value,})} className="card__input" type="text"/>
                </div>
                <div className="card__footer">
                    <button type="submit" className="card__btn btn-primary">POST</button>
                </div>
            </form> 
        </div>
    )
}

export default Form

