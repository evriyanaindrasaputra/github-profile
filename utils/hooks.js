import * as React from "react";

export function useDebounce(value, delay = 1000) {
  const [debaouncedValue, setDeabouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDeabouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debaouncedValue;
}
