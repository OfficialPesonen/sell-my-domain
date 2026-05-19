import { headers } from "next/headers";

export const getDomain = async () => {
  return process.env.NEXT_PUBLIC_DOMAIN;
};
