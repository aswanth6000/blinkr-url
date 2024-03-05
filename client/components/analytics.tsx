// "use client";
// import React from "react";
// import Chart from "chart.js"; // Import chart.js with automatic module loading

// export default function CardLineChart() {
//   React.useEffect(() => {
//     const config = {
//       type: "line",
//       data: {
//         labels: [
//           "January",
//           "February",
//           "March",
//           "April",
//           "May",
//           "June",
//           "July",
//         ],
//         datasets: [
//           {
//             label: new Date().getFullYear(),
//             backgroundColor: "#3182ce",
//             borderColor: "#3182ce",
//             data: [65, 78, 66, 44, 56, 67, 75],
//             fill: false,
//           },
//           {
//             label: new Date().getFullYear() - 1,
//             fill: false,
//             backgroundColor: "#edf2f7",
//             borderColor: "#edf2f7",
//             data: [40, 68, 86, 74, 56, 60, 87],
//           },
//         ],
//       },
//       options: {
//         maintainAspectRatio: false,
//         responsive: true,
//         plugins: {
//           legend: {
//             labels: {
//               fontColor: "white",
//             },
//             align: "end",
//             position: "bottom",
//           },
//           tooltip: {
//             mode: "index",
//             intersect: false,
//           },
//         },
//         scales: {
//           x: {
//             ticks: {
//               fontColor: "rgba(255,255,255,.7)",
//             },
//             display: true,
//             title: {
//               display: false,
//               text: "Month",
//               fontColor: "white",
//             },
//             grid: {
//               display: false,
//               color: "rgba(33, 37, 41, 0.3)",
//               borderColor: "rgba(33, 37, 41, 0.3)",
//             },
//           },
//           y: {
//             ticks: {
//               fontColor: "rgba(255,255,255,.7)",
//             },
//             display: true,
//             title: {
//               display: false,
//               text: "Value",
//               fontColor: "white",
//             },
//             grid: {
//               color: "rgba(255, 255, 255, 0.15)",
//               borderColor: "rgba(255, 255, 255, 0.15)",
//             },
//           },
//           layout: {
//             padding: {
//               top: 40,
//               bottom: 40,
//               left: 40,
//               right: 40,
//             },
//           },
//           elements: {
//             canvas: {
//               backgroundColor: "rgba(0, 0, 0, 0.5)",
//               borderWidth: 5,
//               borderColor: "rgba(255, 255, 255, 0.5)",
//             },
//           },
//         },
//       },
//     };
    
//     // Dark mode configuration
//     Chart.defaults.color = 'white';
//     Chart.defaults.backgroundColor = 'rgba(255, 255, 255, 0.15)';

//     var ctx = document.getElementById("line-chart")?.getContext("2d");
//     window.myLine = new Chart(ctx, config);
//   }, []);
  
//   return (
//     <div className="flex justify-center ">
//       <div className="relative flex flex-col min-w-0 break-words w-6/12 mb-6 shadow-lg rounded bg-blueGray-700">
//         <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
//           <div className="flex flex-wrap items-center">
//             <div className="relative w-full max-w-full flex-grow flex-1">
//               <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">Overview</h6>
//               <h2 className="text-black text-xl font-semibold">Link Clicks Analytics</h2>
//             </div>
//           </div>
//         </div>
//         <div className="p-4 flex-auto">
//           {/* Chart */}
//           <div className="relative h-350-px">
//             <canvas style={{height: '294px'}} id="line-chart"></canvas>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
