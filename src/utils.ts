import { headers } from "next/headers";

export const getDomain = async () => {
  const headersList = await headers();
  return headersList.get("host") as string;
};
