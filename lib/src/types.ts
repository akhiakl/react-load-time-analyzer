export interface ProfilerInfo {

    /**
     * The string id prop of the Profiler tree that has just committed. This lets
     * you identify which part of the tree was committed if you are using multiple
     * profilers.
     *
     */
    id: string,
    /**
     * This lets you know whether the tree has just been mounted for the first time
     * or re-rendered due to a change in props, state, or hooks.
     *
     */
    phase: "mount" | "update" | "nested-update",
    /**
     * The number of milliseconds spent rendering the Profiler and its descendants
     * for the current update. This indicates how well the subtree makes use of
     * memoization (e.g. {@link memo} and {@link useMemo}). Ideally this value should decrease
     * significantly after the initial mount as many of the descendants will only need to
     * re-render if their specific props change.
     *
     */
    actualDuration: number,
    /**
     * The number of milliseconds estimating how much time it would take to re-render the entire
     * Profiler subtree without any optimizations. It is calculated by summing up the most
     * recent render durations of each component in the tree. This value estimates a worst-case
     * cost of rendering (e.g. the initial mount or a tree with no memoization). Compare
     * {@link actualDuration} against it to see if memoization is working.
     *
     */
    baseDuration: number,
    /**
     * A numeric timestamp for when React began rendering the current update.
     *
     */
    startTime: number,
    /**
     * A numeric timestamp for when React committed the current update. This value is shared
     * between all profilers in a commit, enabling them to be grouped if desirable.
     *
     */
    commitTime: number,
}