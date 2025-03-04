import React from "react";
import { TeamBadge } from "../TeamBadge/TeamBadge";
import { Score } from "../Score/Score";
import styles from "./MatchHeader.module.scss";
import { MatchStatusComponent } from "../MatchStatus/MatchStatus";
import { MatchStatus, Team } from "@/lib/types";

interface MatchHeaderProps {
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
}

export const MatchHeader = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  status,
}: MatchHeaderProps) => {
  return (
    <div className={styles.header}>
      <TeamBadge name={homeTeam.name} />
      <div className={styles.matchInfo}>
        <Score score1={homeScore} score2={awayScore} />
        <MatchStatusComponent status={status} />
      </div>
      <TeamBadge name={awayTeam.name} isRight />
    </div>
  );
};
