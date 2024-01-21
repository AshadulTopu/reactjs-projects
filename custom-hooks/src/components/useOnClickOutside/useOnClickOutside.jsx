import { useEffect } from "react";

const useOnClickOutside = (ref, handler) => {
  // check if ref is null or not
  const listener = (event) => {
    if (!ref.current || ref.current.contains(event.target)) {
      return;
    }
    handler(event);
  };

  useEffect(() => {
    // add event listener
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);

  return <div>useOnClickOutside</div>;
};

export default useOnClickOutside;
