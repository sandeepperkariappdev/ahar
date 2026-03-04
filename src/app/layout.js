//import "./globals.css";
import "./globals/globals-ivory.css";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { AuthProvider } from '@/context/AuthContext'
const fontDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const fontBody = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  title: "AHAR — Fine Dining",
  description: "Experience an exquisite culinary journey at AHAR restaurant.",
  themeColor: "#D4AF37",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontBody.variable}`}
    >
      <body
        style={{
          backgroundColor: "#111111",
          color: "#F5F0E8",
          minHeight: "100vh",
        }}
      >
      <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
