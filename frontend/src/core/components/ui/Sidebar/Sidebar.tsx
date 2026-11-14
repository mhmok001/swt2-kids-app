import { SidebarIcon } from "lucide-react";
import React, { useState } from "react";
import styles from './Sidebar.module.scss';

//toDO
export default function Sidebar() {
    const [open, setOpen] = useState(false);

    const sidebarStyle = {
        width: open ? 320 : 60,
        transition: "width 0.3s cubic-bezier(.4,0,.2,1)",
        overflow: "hidden",
        background: "#fff",
        boxShadow: open ? "2px 0 16px #0002" : "none",
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    };

    const textStyle = {
        maxWidth: open ? 300 : 0,
        opacity: open ? 1 : 0,
        transition: "opacity 0.25s cubic-bezier(.4,0,.2,1), max-width 0.25s cubic-bezier(.4,0,.2,1)",
        whiteSpace: "nowrap",
        overflow: "hidden"
    };

    return (
        <div datatype="" style={{
            width: open ? 420 : 71,
            transition: "width 0.3s cubic-bezier(.4,0,.2,1)",
            overflow: "hidden",
            background: "#fff",
            boxShadow: open ? "2px 0 16px #0002" : "none",
            height: "100vh",
            position: 'absolute',
            left: 71,
        }}>
            <div className={styles.navHeader}>
            <span style={textStyle}>Dashboard</span>
            <button
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
            >
                <SidebarIcon/>
            </button>
        </div>


        </div >
    );
}
