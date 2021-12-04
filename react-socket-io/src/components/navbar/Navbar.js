import { useState, useEffect } from "react";
import "./navbar.css";

function Navbar({ socket }) {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    socket.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);

  const displayNotification = ({ senderName, type }) => {
    return (
      <span className='notification'>{`${senderName} ${type} your post`}</span>
    );
  };

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  }

  return (
    <div className='navbar'>
      <span className='logo'> Ha socket app</span>
      <div className='icon' onClick={() => setOpen(!open)}>
        <img
          src='https://raw.githubusercontent.com/safak/youtube/2cacb5e48365d9f674940a21c9d1daf0c67e4617/client/src/img/notification.svg'
          className='iconImg'
          alt=''
        />
        {notifications.length > 0 && <div className='counter'>{notifications.length}</div>}        
      </div>
      <div className='icon' onClick={() => setOpen(!open)}>
        <img
          src='https://raw.githubusercontent.com/safak/youtube/2cacb5e48365d9f674940a21c9d1daf0c67e4617/client/src/img/message.svg'
          className='iconImg'
          alt=''
        />
      </div>
      <div className='icon' onClick={() => setOpen(!open)}>
        <img
          src='https://raw.githubusercontent.com/safak/youtube/2cacb5e48365d9f674940a21c9d1daf0c67e4617/client/src/img/settings.svg'
          className='iconImg'
          alt=''
        />
      </div>
      {open && (
        <div className='notifications'>
          {notifications.map((noti) => displayNotification(noti))}
          {notifications.length > 0 &&  <button className="nButton" onClick={handleRead}>Mark as read</button>}
         
        </div>
      )}
    </div>
  );
}

export default Navbar;
