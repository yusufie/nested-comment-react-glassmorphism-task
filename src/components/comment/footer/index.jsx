import React from "react";
import styles from "./styles.module.scss";
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
    <div className={styles.commentFooter}>
      <Reactions />
      <div className={styles.actionButtons}>
        {ownByCurrentUser ? (
          <>
            <Button onClick={onDelete} variant="warn">
              <img src="./images/icon-delete.svg" alt="delete-button" aria-hidden="true" height={25} />
              Delete
            </Button>
            <Button onClick={onEdit}>
              <img src="./images/icon-reply.svg" alt="edit-button" aria-hidden="true" height={25} />
              Edit
            </Button>
          </>
        ) : (
          <Button onClick={onReply}>
            <img src="./images/icon-reply.svg" alt="reply-button" aria-hidden="true" height={36} />
            Reply
          </Button>
        )}

      </div>
    </div>
  );
}

export { Footer };
