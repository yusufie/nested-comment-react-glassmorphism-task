import React from "react";
import { useComment } from "../useComment";

function Header() {
  const {
    ownByCurrentUser,
    comment: { user, createdAt},
  } = useComment();

  return (
    <div className="d-flex align-items-center gap-3">
      <img
        className="rounded-circle" style={{width:'36px', height:'36px'}}
        src={user.image.webp}
        alt={user.username}
      />
      <p className="text-white-75 fw-bold ">{user.username}</p>
      {ownByCurrentUser && <span className="text-white-75 fw-light bg-success rounded ">you</span>}
      <p className="text-white-50 ms-auto">{createdAt}</p>
    </div>
  );
}

export { Header };
