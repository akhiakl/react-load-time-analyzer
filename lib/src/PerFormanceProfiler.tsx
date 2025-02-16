import React, { Profiler, useId } from 'react'
import { usePerformanceContext } from './PerformanceContext';

type Props = { id?: string, children: React.ReactElement<{ id?: string }> }; // Only a single React element is allowed

const PerFormanceProfiler = ({ children, id }: Props) => {
    const { addItem } = usePerformanceContext();
    const generatedId = useId();
    const childId = id || children?.props?.id || generatedId;
    const childWithId = children?.props?.id ? children : React.cloneElement(children, { id: childId });
    return (
        <Profiler id={childId} onRender={(_id, phase, actualDuration, baseDuration, startTime, commitTime) => addItem({
            id: childId,
            phase,
            actualDuration,
            baseDuration,
            startTime,
            commitTime
        })}>{childWithId}</Profiler>
    )
}

export default PerFormanceProfiler