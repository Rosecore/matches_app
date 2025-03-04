"use client";
import React from "react";
import styles from "./PageHeader.module.scss";
import { Button } from "../Button/Button";
import { refreshMatches } from "@/lib/actions";
import Image from "next/image";

interface PageHeaderProps {
  error?: string;
}

export const PageHeader = ({ error }: PageHeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src={"/match_tracker.png"}
          alt="logo"
          priority={true}
          width={258}
          height={23}
        ></Image>
      </div>
      <div className={styles.actions}>
        {error && (
          <div className={styles.error}>
            <span className={styles.errorIcon}>
              <Image
                src={"/alert.png"}
                alt="alert icon"
                width={21}
                height={19}
              ></Image>
            </span>
            {error}
          </div>
        )}
        <form action={refreshMatches}>
          <Button>Обновить</Button>
        </form>
      </div>
    </header>
  );
};
