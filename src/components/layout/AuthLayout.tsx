import { ReactNode } from "react";

interface Props {

    children: ReactNode;

}

export default function AuthLayout({

    children,

}: Props) {

    return (

        <main

            className="min-h-screen
                       flex
                       items-center
                       justify-center
                       bg-slate-50
                       px-4"

        >

            <div

                className="w-full
                           max-w-md"

            >

                {children}

            </div>

        </main>

    );

}