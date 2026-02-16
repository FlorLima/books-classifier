import { useState } from "react";
import BookAppBar from "./BookAppBar";
import BookDrawer from "./BookDrawer";

export default function Home() {

    return (
        <>
            {/* Main App Bar */}
            <BookAppBar />

            {/* Main Drawer */}
            <BookDrawer />
        </>
        
    )
};