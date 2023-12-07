import React, { useEffect } from 'react'; // ini script notifikasi

function Notification({ message, handleClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose(); 
    }, 3000); 

    return () => {
      clearTimeout(timer);
    };
  }, [handleClose]);
  
  const notificationStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};

const closeButtonStyle = {
    backgroundColor: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    opacity: "0.7",
};

  return (
    <div style={notificationStyle}>
            <p>{message}</p>
            <button style={closeButtonStyle} onClick={handleClose}>
                 ! X
            </button>
        </div>
  );
}

export default Notification;
