import { useRef } from "react";
import { useCountUp } from "react-countup";

export const CountItem = ({ end, duration = 4 }: { end: number, duration?: number }) => {
    const countRef = useRef<HTMLSpanElement>(null!);
    useCountUp({
        ref: countRef,
        end: end,
        duration: duration,
        enableScrollSpy: true,
        scrollSpyOnce: true,
    });
    return <span ref={countRef} />;
};
