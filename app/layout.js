import "./globals.css";
import { Pixelify_Sans } from "next/font/google";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";

const pixelifySans = Pixelify_Sans({
  weight: ['400', '700'],
  subsets: ["latin"],
});

export const metadata = {
  title: "Jacky's Website",
  description: "Central Hub to learn about Jacky's experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pixelifySans.className}`}>
        <div className='background'>
          <AboutMe />
          <Navbar />
        </div>
      </body>
    </html>
  );
}
