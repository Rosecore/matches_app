import React from "react";
import styles from "./TeamBadge.module.scss";
import Image from "next/image";

interface TeamBadgeProps {
  name: string;
  isRight?: boolean;
}

export const TeamBadge = ({ name, isRight }: TeamBadgeProps) => {
  return (
    <div className={`${styles.badge} ${isRight ? styles.right : ""}`}>
      <div className={styles.icon}>
        <Image
          src={"/illustrations_role.png"}
          alt={"Team logo"}
          width={48}
          height={48}
        ></Image>
      </div>
      {name}
    </div>
  );
};
