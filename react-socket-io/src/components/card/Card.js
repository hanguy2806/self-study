import { useState } from "react";
import "./card.css";

function Card({ post, socket, user }) {
  const [liked, setLiked] = useState(false);

  const handleNotication = (type)=>{
    type === "like" && setLiked(true);
    socket.emit("sendNotification",{
      senderName : user,
      receiverName: post.username,
      type: type
    })
  }
  return (
    <div className='card'>
      <div className='info'>
        <img src={post.userImg} alt='' className='userImg' />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt='' className='postImg' />
      <div className='interaction'>
        {liked ? (
          <img
            src='https://raw.githubusercontent.com/safak/youtube/2cacb5e48365d9f674940a21c9d1daf0c67e4617/client/src/img/heartFilled.svg'
            alt=''
            className='cardIcon'
          />
        ) : (
          <img
            onClick={()=>handleNotication("like")}
            src='https://raw.githubusercontent.com/safak/youtube/2cacb5e48365d9f674940a21c9d1daf0c67e4617/client/src/img/heart.svg'
            alt=''
            className='cardIcon'
          />
        )}
        <img
          onClick={()=>handleNotication("comment")}
          src='https://raw.githubusercontent.com/safak/youtube/2cacb5e48365d9f674940a21c9d1daf0c67e4617/client/src/img/comment.svg'
          alt=''
          className='cardIcon'
        />
        <img
          onClick={()=>handleNotication("share")}
          src='https://raw.githubusercontent.com/safak/youtube/2cacb5e48365d9f674940a21c9d1daf0c67e4617/client/src/img/share.svg'
          alt=''
          className='cardIcon'
        />
        <img
          onClick={()=>handleNotication("info")}
          src='https://raw.githubusercontent.com/safak/youtube/2cacb5e48365d9f674940a21c9d1daf0c67e4617/client/src/img/info.svg'
          alt=''
          className='cardIcon'
        />
      </div>
    </div>
  );
}

export default Card;
