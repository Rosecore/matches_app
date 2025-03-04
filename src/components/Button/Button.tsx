"use client";

import React from "react";
import styles from "./Button.module.scss";
import { useFormStatus } from "react-dom";
import { Loader } from "../Loader/Loader";
import Image from "next/image";

interface ButtonProps {
  children?: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  const { pending } = useFormStatus();
  const buttonClassName = `
    ${styles.button}
    ${pending ? styles.disabled : ""}
  `.trim();

  return (
    <button className={buttonClassName} disabled={pending} type="submit">
      <span className={styles.buttonContent}>
        {children}
        {pending ? (
          <Loader />
        ) : (
          <Image
            src={"/Refresh.png"}
            alt={"Loader"}
            height={26}
            width={26}
          ></Image>
        )}
      </span>
    </button>
  );
};
