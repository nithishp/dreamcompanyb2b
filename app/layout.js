import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Dream Company",
  description: "Join your Dream Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`${poppins.className}  antialiased`}>{children}</body>
        <Toaster />
      </ClerkProvider>
    </html>
  );
}
