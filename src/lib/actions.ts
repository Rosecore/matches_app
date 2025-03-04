"use server";

import { revalidatePath } from "next/cache";
import { MatchResponse } from "./types";

export const getMatches = async (): Promise<MatchResponse> => {
  const res = await fetch("https://app.ftoyd.com/fronttemp-service/fronttemp");
  if (!res.ok) {
    return {
      ok: false,
      data: { matches: [] },
      error: "Ошибка: не удалось загрузить информацию",
    };
  }
  return res.json();
};
export const refreshMatches = async () => {
  revalidatePath("/");
};
