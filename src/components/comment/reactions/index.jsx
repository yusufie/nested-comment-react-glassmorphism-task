import React from "react";

import { Button } from "../../button";
import { useComment } from "../useComment";
import styles from "./styles.module.scss";

function Reactions() {
  const {
    comment: { score },
    onPositiveReaction,
    onNegativeReaction,
  } = useComment();

  return (
    <div className={styles.reactions}>
      <Button
        className={styles.reactionButton}
        aria-labelledby="Positive reaction button"
        onClick={onPositiveReaction}
      >
        <img src="./images/icon-like.svg" aria-hidden="true" height={30} />
      </Button>
      <p className={styles.score}>{score}</p>
      <Button
        className={styles.reactionButton}
        aria-labelledby="Negative reaction button"
        onClick={onNegativeReaction}
      >
        <img src="./images/icon-dislike.svg" aria-hidden="true" height={30} />
      </Button>
    </div>
  );
}

export { Reactions };
