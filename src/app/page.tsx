
// import DashboardPages from "@/components/pages/DashboardPages";
import dynamic from "next/dynamic";
import React from "react";

const DashboardPages = dynamic(
  () => import('@/components/pages/DashboardPages'),
  { ssr: false })

export default function Home() {
  return (
    <React.Fragment>

      <DashboardPages />

    </React.Fragment>
  );
}
