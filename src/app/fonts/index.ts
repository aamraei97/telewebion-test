import localFont from "next/font/local";

const vasir = localFont({
  src: [
    {
      path: "./Vazir-FD-WOL.woff2",
      weight: "400",
      style: "normal",
    }, 
  ],
  display: "swap",
  variable: "--font-vasir",
});

export { vasir };
