import Link from "next/link";
import React from "react";
import { DateTime } from "luxon";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="container max-w-6xl mx-auto flex flex-col min-h-screen px-5">
        <nav className="py-3 border-b-2">
          <div className="flex justify-between">
            <Link href="/">
              <h1 className="text-3xl font-black text-red-600">FIFA WORLD CUP 2022</h1>
            </Link>
          </div>
        </nav>
        <main className="my-4 grow">{children}</main>
        <footer className="border-t-2 py-4 ">
          <p className="flex justify-center space-x-4">
            <span>&copy; {DateTime.now().year}</span>
            <span>Only for Educational purpose ⚽</span>
          </p>
        </footer>
      </body>
    </html>
  );
}
