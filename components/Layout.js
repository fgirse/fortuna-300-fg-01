/* eslint-disable prettier/prettier */
import React from "react";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col justify-between">
            
            <main className="container py-1 mx-auto mt-1">
                <div className="">
                    {children}
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    )
}
