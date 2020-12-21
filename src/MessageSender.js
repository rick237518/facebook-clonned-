import { Avatar } from '@material-ui/core';
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import React ,{useState} from 'react';
import "./messageSender.css";
import {useStateValue} from "./stateProvider";
import db from "./firebase";
import firebase from "./firebase";
import PostMessage from './PostMessage'





function MessageSender() {
    const[{user},]=useStateValue();


    const [input,setInput]=useState('');

        const [post,setPost]=useState([
            {
                name:'To day is my Birthday',
                image:'https://i.ibb.co/C5kdg7y/jd-380066-a.jpg'
            },
            {
                name:'felt glad ',
                image:'https://i.ibb.co/2W7cKzh/d516d2248fc04fc0b24fd1410c86acf2.jpg'
            }
        ]);

    const [imageUrl,setImageUrl]=useState('');
    const handleSubmit= (e)=>{
        e.preventDefault();

       const newItem={
           name: input,
           image:imageUrl
       }
       const newArray=[...post,newItem]
        setPost(newArray)

        setImageUrl("");
        setInput("");
    };

    return (
        <div className="messageSender">
              <div className="messageSender__top">
                  <Avatar src={user.photoURL}/>
                  <form>
                      <input
                      value={input}
                      onChange={(e)=>setInput(e.target.value)}
                      className="messageSender__Input"
                      placeholder={`Please leave a comment ,${user.displayName}?`}
                      />
                      <input  
                      value={imageUrl}
                      onChange={(e)=>setImageUrl(e.target.value)}

                      placeholder={'image URL(Optional )'}/>
                <button className="button" onClick={handleSubmit}>hidden sumit 
                        </button>
                      </form>
              </div>

<div className="messageSender__bottom">
    <div className="messageSender__option">
       <Videocam style={{color:"red"}}/>
           <h3>Video camera</h3>
       <PhotoLibrary style={{color:"green"}}/>
          <h3>PhotoVideo</h3>

       <InsertEmoticon style={{color:"orange"}}/>
       <h3>FeelingActivity</h3>
     
            </div>
          </div>
         <div>{post.map(({name,image})=>(<div><PostMessage image={image} name={name}/></div>))}</div>

        </div>

        )
}

export default MessageSender;