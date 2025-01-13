"use client";
import dynamic from "next/dynamic";
import "./pieChartStyle.css";

// Bu kod, react-apexcharts kütüphanesini sadece istemci tarafında yükler. Böylece, sunucuda window hatası oluşmaz.
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function PieChart() {
  const customColors = ["#F5E6CA", "#1E293B", "#4A90E2", "#FF6F00", "#FEC057"];

  const options: ApexCharts.ApexOptions = {
    chart: {
      width: 380,
      type: "polarArea",
    },
    colors: customColors,
    labels: ["Rose A", "Rose B", "Rose C", "Rose D", "Rose E"],
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 1,
      colors: ["#1a1a1a"],
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: "bottom",
      labels: {
        colors: "#fff",
        useSeriesColors: false,
      },
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
      },
    },
    theme: {
      monochrome: {
        enabled: false,
      },
    },
  };

  const series = [42, 47, 52, 58, 65];
  return (
    <section className="flex w-full flex-wrap items-center justify-between gap-3 text-white">
      <article className="w-full flex-1">
        <div className="flex w-full flex-col items-center justify-center">
          <h4 className="font-raleway font-semibold">
            Initial Token Distribution
          </h4>
          <div
            id="chart"
            className="flex w-full flex-col items-center justify-center"
          >
            <Chart
              options={options}
              series={series}
              type="polarArea"
              width={400}
            />
          </div>
        </div>
      </article>
      <article className="flex w-full flex-1 flex-col items-center gap-5">
        <h4 className="font-raleway font-semibold">
          Initial Token Distribution
        </h4>
        <div
          id="chart"
          className="flex w-full flex-col items-center justify-center"
        >
          <Chart
            options={options}
            series={series}
            type="polarArea"
            width={400}
          />
        </div>
      </article>
    </section>
  );
}
