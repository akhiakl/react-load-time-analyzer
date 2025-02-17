import { useState, useEffect, useRef } from "react";
import type { ProfilerInfo } from "./types";

/**
 * Custom hook to profile render performance of a component.
 * Only runs in development mode.
 * @param {string} id - Unique identifier for the component being profiled.
 * @returns {object} - Profiling data including render times and phases.
 */
const usePerformanceProfiler = (id: string): ProfilerInfo => {
  const [profilingData, setProfilingData] = useState<ProfilerInfo>({
    id,
    phase: "mount" as "mount" | "update" | "nested-update",
    actualDuration: 0,
    baseDuration: 0,
    startTime: 0,
    commitTime: 0,
  });

  const startTimeRef = useRef<number | null>(null);
  const baseDurationRef = useRef(0);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") return;

    const startTime = performance.now();
    startTimeRef.current = startTime;

    setProfilingData((prev) => ({
      ...prev,
      phase: mountedRef.current ? "update" : "mount",
      startTime,
    }));

    return () => {
      const commitTime = performance.now();
      const actualDuration = commitTime - (startTimeRef.current || startTime);

      baseDurationRef.current += actualDuration; // Simulating baseDuration accumulation

      setProfilingData((prev) => ({
        ...prev,
        actualDuration,
        baseDuration: baseDurationRef.current,
        commitTime,
      }));

      console.log(`[Profiler] ${id} - ${profilingData.phase} took ${actualDuration.toFixed(2)}ms`);
    };
  });

  useEffect(() => {
    if (process.env.NODE_ENV === "production") return;
    mountedRef.current = true;
  }, []);

  return profilingData;
};

export default usePerformanceProfiler;
