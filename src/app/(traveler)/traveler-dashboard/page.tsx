"use client";
import React from "react";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const TravelerDashboard = () => {
  return (
    <section className="pb-8 w-full">
      <h1 className="section-title">Dashboard</h1>

      <div className=" pt-8 flex flex-col md:flex-row gap-4">
        <div className="w-full  border border-border rounded-xl">
          <div className="flex flex-col items-center gap-4 m-4">
            <h2 className="font-medium ">Total Booking</h2>
            <h3 className="text-4xl font-bold">24</h3>
          </div>
        </div>
        <div className="w-full  border border-border rounded-xl">
          <div className="flex flex-col items-center gap-4 m-4">
            <h2 className="font-medium ">Total Inquries</h2>
            <h3 className="text-4xl font-bold">00</h3>
          </div>
        </div>
        <div className="w-full  border border-border rounded-xl">
          <div className="flex flex-col items-center gap-4 m-4">
            <h2 className="font-medium ">Total Response</h2>
            <h3 className="text-4xl font-bold">180</h3>
          </div>
        </div>
      </div>

      <div className="pt-8 flex flex-col lg:flex-row gap-4 justify-between">
        <div className="border border-border rounded-xl w-full">
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>

        <div className="border border-border rounded-xl w-full lg::w-3/5">
          <div className="m-4">
            <h2 className="font-medium ">Notification</h2>
          </div>
        </div>
      </div>

      <div className="pt-8 flex flex-col lg:flex-row gap-4 justify-between">
        <div className="border border-border rounded-xl w-full">
          <div className="m-4 pb-8">
            <h2 className="font-medium ">New Tour packeges</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelerDashboard;
