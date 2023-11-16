import { timingSafeEqual } from "crypto";
import React from "react";

function Chat() {
    return (
      <div className="chat-page">
        <div className="chat- bubbles">
          <div className="user">
            <img 
              className="avatar"
              src="https://user1.png" 
            />
            <div className="message">
              Hi there! 
            </div>
          </div>
  
          <div className="friend">
           <img
             className="avatar"  
             src="https://user2.png"
           />
           <div className="message">
             Hey, nice to meet you!
           </div>
          </div>
        </div>
      </div>
    );
  }