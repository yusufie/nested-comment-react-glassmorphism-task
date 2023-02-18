import React, { useState } from "react";

import { TextArea } from "../textarea";
import { Button } from "../button";

function NewCommentEditor({ username, image, isReply = false, onSend }) {
  const [comment, setComment] = useState("");

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const handleSend = () => {
    onSend(comment);
    setComment("");
  };

  return (
    <div className="d-flex align-items-start bg-black rounded p-3">
      <img className="rounded-circle me-3" style={{width:'36px', height:'36px'}} src={image.webp} alt={username} />
      <TextArea
        value={comment}
        onChange={handleChangeComment}
        placeholder="Add a comment..."
      />
      <Button variant="primary" onClick={handleSend}>
        {isReply ? "Reply" : "Send"}
      </Button>
    </div>
  );
}

export { NewCommentEditor };
