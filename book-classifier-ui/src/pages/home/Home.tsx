import { useState } from "react";
import BookAppBar from "./BookAppBar";
import BookDrawer from "./BookDrawer";

export default function Home() {
    const [openDrawer, setOpen] = useState(true);
    
    const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    };

    return (
        <>
            {/* Main App Bar */}
            <BookAppBar />

            {/* Main Drawer */}
            <BookDrawer />
        </>
        
    )
};