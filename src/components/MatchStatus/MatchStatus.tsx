import React from "react";
import styles from "./MatchStatus.module.scss";
import { MatchStatus } from "@/lib/types";

interface MatchStatusProps {
  status: MatchStatus;
}

export const MatchStatusComponent = ({ status }: MatchStatusProps) => {
  const getStatusText = () => {
    switch (status) {
      case "Ongoing":
        return "Live";
      case "Finished":
        return "Finished";
      case "Scheduled":
        return "Match preparing";
    }
  };

  return (
    <div className={`${styles.status} ${styles[status]}`}>
      {getStatusText()}
    </div>
  );
};
