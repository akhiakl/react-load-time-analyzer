import { createContext, useContext } from "react";
import type { ProfilerInfo } from "./types";
export interface PerformanceContextType { items: { [id: string]: ProfilerInfo[] }; addItem: (item: ProfilerInfo) => void }

const PerformanceContext = createContext<PerformanceContextType>(null!);

export const usePerformanceContext = () => useContext(PerformanceContext);

export default PerformanceContext