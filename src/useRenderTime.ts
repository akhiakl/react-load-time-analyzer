import { useEffect, useRef } from "react";

const useRenderTime = (componentName: string) => {
  const mountTime = useRef<number | null>(null);

  useEffect(() => {
    mountTime.current = performance.now();
    console.log(`[${componentName}] Mounted at ${mountTime.current}ms`);

    return () => {
      const unmountTime = performance.now();
      console.log(
        `[${componentName}] Unmounted after ${unmountTime - (mountTime.current || 0)}ms`
      );
    };
  }, []);

  useEffect(() => {
    console.log(`[${componentName}] Updated at ${performance.now()}ms`);
  });

  return {
    mountTime: mountTime.current,
  };
};

export default useRenderTime;
