import React, { useContext } from "react";
import { PerformanceContext } from "./PerformanceProvider";

export const PerformanceOverlay = () => {
    const performanceData = useContext(PerformanceContext);
    if (!performanceData) return null;

    return (
        <div
            style={{
                position: "fixed",
                bottom: 10,
                left: 10,
                background: "black",
                color: "white",
                padding: "10px",
                fontSize: "12px",
                maxHeight: "300px",
                overflowY: "scroll",
            }}
        >
            {performanceData.logs.map((log, index) => (
                <div key={index}>{log}</div>
            ))}
        </div>
    );
};

export default PerformanceOverlay;
