import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import TopCard from "@/components/TopCard";
import BarChart from "@/components/BarChart";
import RecentOrder from "@/components/RecentOrder";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-[#e5e5e5] min-h-screen">
        <Header title1="Dashboard" title2="Welcome back, Client" />
        <TopCard />
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <BarChart />
          <RecentOrder />
        </div>
      </main>
    </>
  );
}
