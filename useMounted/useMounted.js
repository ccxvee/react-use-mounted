import { useEffect, useRef } from "react";

export default function useMounted() {
    const isMounted = useRef();

    useEffect(() => {
        isMounted.current = true;

        return () => {
            isMounted.current = false;
        };
    }, []);

    return isMounted;
}