// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Header from "@/components/Header";

import { cookieToInitialState } from "wagmi";

import { config } from "@/config";
import Web3ModalProvider from "@/context";

export const metadata: Metadata = {
    title: "Threer",
    description: "Future of Work",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const initialState = cookieToInitialState(config, headers().get("cookie"));
    return (
        <html lang="en">
            <body>
                <Web3ModalProvider initialState={initialState}>
                    <Header></Header>
                    {children}
                </Web3ModalProvider>
            </body>
        </html>
    );
}
