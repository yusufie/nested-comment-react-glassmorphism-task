import React from "react";
import { Reactions } from "../reactions";
import { Button } from "../../button";
import { useComment } from "../useComment";

function Footer() {
  const {
    onEdit,
    onReply,
    onDelete,
    ownByCurrentUser,
  } = useComment();

  return (
    <div className="d-flex align-items-center gap-3">
      <Reactions />
      <div className=" d-flex me-auto gap-3 border-0">
        {ownByCurrentUser ? (
          <>
            <Button 
            className="bg-transparent border-0"
            onClick={onDelete} variant="warn">
              <img src="./images/icon-delete.svg" alt="delete-button" aria-hidden="true" height={25} />
              Delete
            </Button>
            <Button 
            className="w-100 bg-transparent border-0"
            onClick={onEdit}>
              <img src="./images/icon-reply.svg" alt="edit-button" aria-hidden="true" height={25} />
              Edit
            </Button>
          </>
        ) : (
          <Button 
          className="w-100 bg-transparent border-0"
          onClick={onReply}>
            <img src="./images/icon-reply.svg" alt="reply-button" aria-hidden="true" height={36} />
            Reply
          </Button>
        )}

      </div>
    </div>
  );
}

export { Footer };
