import React from "react";

import { Button } from "../../button";
import { useComment } from "../useComment";

function Reactions() {
  const {
    comment: { score },
    onPositiveReaction,
    onNegativeReaction,
  } = useComment();

  return (
    <div className=" d-flex flex-row align-items-center rounded border-0">
      <Button
        className="w-100 bg-transparent border-0"
        aria-labelledby="Positive reaction button"
        onClick={onPositiveReaction}
      >
        <img src="./images/icon-like.svg" aria-hidden="true" height={30} alt="like-icon" />
      </Button>
      <p className=" text-white-75">{score}</p>
      <Button
        className="w-100 bg-transparent border-0"
        aria-labelledby="Negative reaction button"
        onClick={onNegativeReaction}
      >
        <img src="./images/icon-dislike.svg" aria-hidden="true" height={30} alt="dislike-icon"/>
      </Button>
    </div>
  );
}

export { Reactions };
