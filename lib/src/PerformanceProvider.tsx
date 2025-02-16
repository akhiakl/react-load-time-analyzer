import React, { useState } from "react";
import PerformanceOverlay from "./PerformanceOverlay";
import PerformanceContext, { PerformanceContextType } from "./PerformanceContext";
import { ProfilerInfo } from "./types";

export const PerformanceProvider = ({ children }: { children: React.ReactNode }) => {
    const [items, setitems] = useState<PerformanceContextType['items']>({});
    console.log('logger')

    const addItem = (item: ProfilerInfo) => {
        setitems((prev) => {
            if (prev[item.id]?.length) {
                prev[item.id].push(item)
            } else {
                prev[item.id] = [item]
            }
            return prev;
        })
        console.log('logger', items)

    };

    return (
        <PerformanceContext.Provider value={{ items, addItem }}>
            {children}
            <div className="overlay">
                <PerformanceOverlay />
            </div>
        </PerformanceContext.Provider   >
    );
};