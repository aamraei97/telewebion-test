import localFont from "next/font/local";

const vasir = localFont({
  src: [
    {
      path: "./Vazirmatn-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Vazirmatn-Medium.ttf",
      weight: "500",
      style: "bold",
    },
    {
      path: "./Vazirmatn-Bold.ttf",
      weight: "600",
      style: "medium",
    },
  ],
  display: "swap",
  variable: "--font-vasir",
});

export { vasir };
