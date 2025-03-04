import React from "react";
import styles from "./Score.module.scss";

interface ScoreProps {
  score1: number;
  score2: number;
}

export const Score = ({ score1, score2 }: ScoreProps) => {
  return (
    <div className={styles.score}>
      {score1} : {score2}
    </div>
  );
};
