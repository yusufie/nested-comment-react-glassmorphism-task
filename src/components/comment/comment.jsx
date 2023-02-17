import React from "react";

import { useComment } from "./useComment";
import { Header } from "./header";
import { Body } from "./body";
import { Footer } from "./footer";
import { Replies } from "./replies";
import { NewCommentEditor } from "../new-comment-editor";
import styles from "./styles.module.scss";

function Comment() {
  const { comment, currentUser, isReplying, onSendReply } = useComment();

  if (!comment) {
    return null;
  }

  return (
    <>
      <div className={styles.commentWrapper}>
        <div className={styles.commentContent}>
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
      {comment.replies?.length > 0 && <Replies />}
      {isReplying && (
        <NewCommentEditor {...currentUser} isReply onSend={onSendReply} />
      )}
    </>
  );
}

export { Comment };
