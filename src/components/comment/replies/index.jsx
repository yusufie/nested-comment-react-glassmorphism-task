import React from "react";
import { useComment } from "../useComment";
import { Comment } from "../index";

function Replies() {
  const {
    comment: { replies },
    currentUser,
  } = useComment();

  const repliesStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    marginLeft: "64px",
    position: "relative",
  };

  const repliesBeforeStyles = {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "2px",
    backgroundColor: "hsl(223, 19%, 93%)",
    content: "",
    left: "-32px",
    borderRadius: "999px",
  };

  return (
    <div style={repliesStyles}>
      <div style={repliesBeforeStyles}></div>
      {replies.map((reply) => (
        <Comment data={{ comment: reply, currentUser }} key={reply.id} />
      ))}
    </div>
  );
}

export { Replies };
