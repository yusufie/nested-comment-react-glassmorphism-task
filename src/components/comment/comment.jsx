import React from "react";

import { useComment } from "./useComment";
import { Header } from "./header";
import { Body } from "./body";
import { Footer } from "./footer";
import { Replies } from "./replies";
import { NewCommentEditor } from "../new-comment-editor";

function Comment() {
  const { comment, currentUser, isReplying, onSendReply } = useComment();

  if (!comment) {
    return null;
  }

  return (
    <>
      <div className="d-flex align-items-start bg-black rounded p-3 w-100">
        <div className="d-flex flex-column flex-grow-1 gap-1 ">
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
