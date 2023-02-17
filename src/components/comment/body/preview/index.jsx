import React from "react";
import styles from "./styles.module.scss";

import { useComment } from "../../useComment";

function Preview() {
  const {
    comment: { replyingTo, content, image, user },
  } = useComment();

  return (
    <div>
      <p>
        {!!replyingTo && (
          <span className={styles.commentReplyingTo}>@{replyingTo}&nbsp;</span>
        )}
        {content}
      </p>
            {image && (
              <img
                className={styles.commentImage}
                src={image.webp}
                alt={user.username}
              />
            )}
    </div>
  );
}

export { Preview };
