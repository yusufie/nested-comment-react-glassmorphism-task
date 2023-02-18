import React from "react";

import { useComment } from "../../useComment";

function Preview() {
  const {
    comment: { replyingTo, content, image, user },
  } = useComment();

  return (
    <div>
      <p className="text-white-75">
        {!!replyingTo && (
          <span className="fw-bold text-info">@{replyingTo}&nbsp;</span>
        )}
        {content}
      </p>
            {image && (
              <img
                className="w-100 h-100 object-fit-cover rounded"
                src={image.webp}
                alt={user.username}
              />
            )}
    </div>
  );
}

export { Preview };
