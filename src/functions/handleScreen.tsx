import { useEffect, useState } from "react";

interface WindowSizeType {
  height?: number;
  width?: number;
}

export function useWindowSize(): WindowSizeType {
  const [windowSize, setWindowSize] = useState<WindowSizeType>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = /* istanbul ignore next */ () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export function useMobile(): boolean {
  return (useWindowSize().width || 1024) <= 480;
}

export function useTablet(): boolean {
  return (useWindowSize().width || 1024) <= 600;
}

export function useCustomScreenSize(size: number): boolean {
  return (useWindowSize().width || 1024) <= size;
}

export function useDesktop(): boolean {
  const screenWidth = useWindowSize().width;

  return (screenWidth || 1024) >= 1024;
}

const useScreenSize = {
  useWindowSize,
  useMobile,
  useTablet,
  useDesktop,
  useCustomScreenSize,
};

export default useScreenSize;
