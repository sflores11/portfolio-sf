import { motion, useMotionValue, useAnimationFrame, useTransform, useMotionTemplate } from "motion/react"
import { useLayoutEffect, useRef, useState } from "react";

export default function InfinateName () {
    const textRef = useRef<HTMLDivElement>(null);
    const [itemWidth, setItemWidth] = useState(0);

    useLayoutEffect(() => {
        if (textRef.current) {
          const width = textRef.current.offsetWidth;
          setItemWidth(width + 20);
        }
    }, []);

    const clock = useMotionValue(Date.now());

    useAnimationFrame((t, dt) => {
        clock.set(clock.get() + dt * 1);
    });

    const progress = useTransform(
        clock,
        (time) => (time % 10000) / 10000
      );
    const percentage = useTransform(progress, (t) => t * itemWidth);
    const translateX = useMotionTemplate`-${percentage}px`;

    return (
        <div className="h-auto ml-5 mr-6 font-impact select-none text-[#DFDFDF] text-[235px] leading-[210px] tracking-[-5px] overflow-hidden">
            <motion.div style={{translateX}}>
                <span ref={textRef}>
                    SEBASTIAN <br/>FLORES
                </span>
                <span
                    style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: `${itemWidth}px`,
                        top: 0,
                    }}
                >
                    SEBASTIAN <br/>FLORES
                </span>
            </motion.div>
        </div>
    )
}