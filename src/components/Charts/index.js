import React from "react";
import Chart from "react-apexcharts";
import { getNext7Days } from "./utils";

function ApexLineChart({ tasks }) {
  const dates = getNext7Days(new Date());
  const obj = {};
  dates.forEach((date) => (obj[date] = 0));
  tasks.forEach((task) => {
    const date = task?.date;
    if (dates.includes(date)) {
      if (obj[date]) obj[date] += 1;
      else obj[date] = 1;
    }
  });

  const data = {
    series: [
      {
        name: "Desktops",
        data: [...Object.values(obj)],
      },
    ],

    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Tasks Pending in next 7 days",
        align: "center",
        style: {
          color: "#0f0f0f",
        },
      },
      colors: ["#3fe6a1"],
      fill: {
        type: "gradient",
      },
      grid: {
        row: {
          colors: ["#e0e0e0", "#f0f0f0"], // takes an array which will be repeated on columns
          opacity: 0.1,
        },
      },
      xaxis: {
        categories: [...Object.keys(obj)],
      },
    },
  };

  const barData = {
    series: [
      {
        name: "Pending Tasks",
        data: [...Object.values(obj)],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          distributed: true,
          borderRadius: 2,
          dataLabels: {
            position: "center", // top, center, bottom
          },
        },
      },

      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val;
        },
        offsetY: 0,
        style: {
          fontSize: "14px",
          colors: ["#304758"],
        },
      },

      xaxis: {
        categories: [...Object.keys(obj)],
        position: "bottom",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val;
          },
        },
      },

      title: {
        text: "Tasks Pending in next 7 days",
        floating: true,
        offsetY: 0,
        align: "center",
        style: {
          color: "#0e0e0e",
        },
      },
    },
  };

  return (
    <div>
      <h3 className="d-flex justify-content-center m-2 p-1">
        Charts - Pending Tasks
      </h3>
      <div className="d-flex">
        <div
          style={{
            width: "50%",
            padding: "8px",
            margin: "14px",
            borderRadius: "8px",
            background: "rgb(210 215 219 / 73%)",
            backdropFilter: "blur(4px)",
            boxShadow: "0px 0px 6px 0px #000",
          }}
          >
          <Chart
            options={data.options}
            series={data.series}
            type="line"
            height={350}
            />
        </div>
        <div
          style={{
            width: "45%",
            padding: "8px",
            margin: "14px",
            borderRadius: "8px",
            background: "rgb(210 215 219 / 73%)",
            backdropFilter: "blur(4px)",
            boxShadow: "0px 0px 6px 0px #000",
          }}
        >
          <Chart
            options={barData.options}
            series={barData.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
export default ApexLineChart;
