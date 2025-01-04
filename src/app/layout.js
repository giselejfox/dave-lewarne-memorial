import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
import Head from "next/head";
import MyNavbar from "@/components/MyNavbar";

export const metadata = {
  title: "David J. LeWarne Memorial",
  description: "Join us in celebrating the life of David Joel LeWarne (1970–2024). Memorial service details, ways to share memories, and information on supporting the scholarship fund in his honor.",
  keywords: "David LeWarne Memorial, David Joel LeWarne, Celebration of Life, Memorial Service, Scholarship Fund, Snohomish WA",
  openGraph: {
    title: "David J. LeWarne Memorial - Celebrating a Life Well Lived",
    description: "Join us in celebrating the life of David Joel LeWarne. Find memorial details, share memories, and learn how to support the scholarship fund in his honor.",
    url: "https://yourwebsite.com/",
    siteName: "David J. LeWarne Memorial",
    images: [
      {
        url: "/img/dave.JPG",
        width: 1200,
        height: 630,
        alt: "A smiling David Joel LeWarne",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David J. LeWarne Memorial - Celebrating a Life Well Lived",
    description: "Join us in celebrating the life of David Joel LeWarne. Memorial service details and ways to contribute.",
    images: ["/img/dave.JPG"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyNavbar />
        {children}
      </body>
    </html>
  );
}
