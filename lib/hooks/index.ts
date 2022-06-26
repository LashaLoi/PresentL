import { useEffect, useRef } from "react";

export const useMount = (cb: () => void, deps: unknown[]) => {
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    cb();
  }, deps);
};
