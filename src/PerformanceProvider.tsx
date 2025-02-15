import React, { createContext, useState } from "react";
interface PerformanceContextType { logs: string[]; addLog: (log: string) => void }

export const PerformanceContext = createContext<PerformanceContextType>(null!);
export const PerformanceProvider = ({ children }: { children: React.ReactNode }) => {
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (log: string) => {
        setLogs((prev) => [...prev, log]);
    };

    return (
        <PerformanceContext.Provider value={{ logs, addLog }}>
            {children}
        </PerformanceContext.Provider>
    );
};