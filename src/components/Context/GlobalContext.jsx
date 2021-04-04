import React, { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Context = React.createContext({});

const Provider = Context.Provider;
const Consumer = Context.Consumer;


const GlobalContext = ({ children }) => {
    // const [likedPosts, setLikedPosts] = useState([
    //     { 
    //         username: "philin.nguyen",
    //         caption: "please work",
    //         imageUrl: "https://www.onlinekittencare.com/wp-content/uploads/2020/07/vChK6pTy3vN3KbYZ7UU7k3-1200-80.jpg",
    //         like: true,
    //       },
    // ])
    

    const [posts, setPosts] = useState([
        { 
            id: "8137",
            username: "philin.nguyen",
            ueserAvatar: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s320x320/131463823_683091529042013_7715560538458632465_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=nUq7TPe2Jd4AX_4KAj3&ccb=7-4&oh=011a632d6d2bd441ef13a58f403b1fc9&oe=607F6298',
            caption: "111111111111",
            imageUrl: "https://www.onlinekittencare.com/wp-content/uploads/2020/07/vChK6pTy3vN3KbYZ7UU7k3-1200-80.jpg",
            like: true,
            comment: [
                {
                    id: 1,
                    user: 'philin.nguyen',
                    text: 'loerem lorem'
                }
            ],
        },
        {
            id: "1312",
            username: "philin.nguyen",
            ueserAvatar: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s320x320/131463823_683091529042013_7715560538458632465_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=nUq7TPe2Jd4AX_4KAj3&ccb=7-4&oh=011a632d6d2bd441ef13a58f403b1fc9&oe=607F6298',
            caption: "222222222222222",
            imageUrl: "https://www.onlinekittencare.com/wp-content/uploads/2020/07/vChK6pTy3vN3KbYZ7UU7k3-1200-80.jpg",
            like: false,
            comment: [],
        },
    ]);
    
    const getPost = useCallback(async () => {
		const post = JSON.parse(localStorage.getItem('posts') || [])
		setPosts(post);
	 }, []);

	useEffect(() => {
        getPost();
    }, []);
	
	
	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(posts))
	},[posts])
	


    function createComment(selectedPost, text) {  

        const newCommnet = {
            id: uuidv4(),
            text: text,
            user: 'philin.nguyen'
        }
        
        const prevState = [...posts]
        
        
        prevState.forEach(post => {
            return selectedPost === post ? post.comment = [ ...post.comment, newCommnet] : null
        })
        setPosts([...prevState])       
    }; 



    function delitePost(post) {
        setPosts(posts.filter(item => item !== post))   
    }

    function createPost(post) {
        const newPost = {
          username: "philin",
          caption: post.caption,
          imageUrl: post.imageUrl,
          ueserAvatar: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s320x320/131463823_683091529042013_7715560538458632465_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=nUq7TPe2Jd4AX_4KAj3&ccb=7-4&oh=011a632d6d2bd441ef13a58f403b1fc9&oe=607F6298',
          like: false,
          comment: [],  
        }
        setPosts([...posts, newPost])
    }
    
    const onLike = (selectedPost) => {
      
        
        const prevState = [...posts]
        prevState.forEach(post => {
            return selectedPost === post ? post.like = !post.like : null
        })
        setPosts([...prevState])    
    }; 

    const [currentPost,seTcurrentPost] = useState()
    const [open, setOpen] = useState(false);

    const handleOpen = (post) => {
        seTcurrentPost(post)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const state = {
        posts,
        setPosts,
        createPost,
        onLike,
        open, setOpen, handleOpen, handleClose, 
        currentPost, seTcurrentPost,
        createComment,
        delitePost,
    }

    return (
        <Provider value={state}>
            {children}
        </Provider>
    );
};

export default GlobalContext;
