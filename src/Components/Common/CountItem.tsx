import { useRef } from "react";
import { useCountUp } from "react-countup";

export const CountItem = ({ end, duration = 4, decimals = 0 }: { end: number, duration?: number, decimals?: number }) => {
    const countRef = useRef<HTMLSpanElement>(null!);
    useCountUp({
        ref: countRef,
        end: end,
        duration: duration,
        decimals: decimals,
        enableScrollSpy: true,
        scrollSpyOnce: true,
    });
    return <span ref={countRef} />;
};
