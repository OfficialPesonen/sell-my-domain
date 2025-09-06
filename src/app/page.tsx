import { getDomain } from "@/utils";

export default async function Page() {
  const domain = await getDomain();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-5xl text-center p-4">
        <p className="flex items-center justify-center gap-2 text-lg">
          <span className="inline-block size-2.5 bg-green-500 animate-pulse duration-400 rounded-full" />
          <span className="opacity-80">Seller was online 8 minutes ago</span>
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold my-4">{domain} is for sale!</h1>
        <p className="text-xl mb-2">You can actually buy this domain fast and for a fair price!</p>
        <p className="text-xl">
          Please contact me at{" "}
          <a href={`mailto:${process.env.NEXT_PUBLIC_SELLER_EMAIL}`} className="underline font-medium">
            {process.env.NEXT_PUBLIC_SELLER_EMAIL}
          </a>{" "}
          to get started.
        </p>
      </div>
    </div>
  );
}
