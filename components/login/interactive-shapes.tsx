"use client";

import { useEffect, useRef } from "react";

export function InteractiveShapes() {
    const containerRef = useRef<HTMLDivElement>(null);
    const svgsRef = useRef<(SVGPathElement | null)[]>([]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = container.getBoundingClientRect();

            // Calculate mouse position relative to container center (-1 to 1)
            const x = (clientX - left - width / 2) / (width / 2);

            svgsRef.current.forEach((path, index) => {
                if (!path) return;

                // targetX determines the amount of "bend"
                // Adding a slight delay/differentiation per pillar for fluidity
                const targetX = x * (20 + index * 10);

                // Pillar position - closer together now
                const baseX = 80 + (index * 20);
                const pw = 4; // Slightly thinner

                // Fluid path: Using Cubic Bezier for smoother bending than Quadratic
                const d = `
          M ${baseX - pw},100
          C ${baseX - pw + targetX * 0.5},75 ${baseX - pw + targetX},50 ${baseX - pw},0
          L ${baseX + pw},0
          C ${baseX + pw + targetX},50 ${baseX + pw + targetX * 0.5},75 ${baseX + pw},100
          Z
        `;

                path.setAttribute("d", d.trim());
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-full bg-[#0a192f] overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,192,85,0.15),transparent_70%)]" />

            {/* Background soft glow */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />

            <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#00c055", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#00c055", stopOpacity: 0.9 }} />
                        <stop offset="100%" style={{ stopColor: "#00c055", stopOpacity: 0.1 }} />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#4ade80", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#4ade80", stopOpacity: 0.7 }} />
                        <stop offset="100%" style={{ stopColor: "#4ade80", stopOpacity: 0.1 }} />
                    </linearGradient>
                    <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#22d3ee", stopOpacity: 0.1 }} />
                        <stop offset="50%" style={{ stopColor: "#22d3ee", stopOpacity: 0.5 }} />
                        <stop offset="100%" style={{ stopColor: "#22d3ee", stopOpacity: 0.1 }} />
                    </linearGradient>
                </defs>

                {/* Pillar 1 (Back) */}
                <path
                    ref={el => { svgsRef.current[0] = el }}
                    d="M 80,100 C 80,75 80,50 80,0 L 88,0 C 88,50 88,75 88,100 Z"
                    fill="url(#grad3)"
                    filter="url(#glow)"
                    className="transition-all duration-1000 ease-out opacity-40"
                />

                {/* Pillar 2 (Middle) */}
                <path
                    ref={el => { svgsRef.current[1] = el }}
                    d="M 100,100 C 100,75 100,50 100,0 L 108,0 C 108,50 108,75 108,100 Z"
                    fill="url(#grad2)"
                    filter="url(#glow)"
                    className="transition-all duration-700 ease-out opacity-70"
                />

                {/* Pillar 3 (Front) */}
                <path
                    ref={el => { svgsRef.current[2] = el }}
                    d="M 120,100 C 120,75 120,50 120,0 L 128,0 C 128,50 128,75 128,100 Z"
                    fill="url(#grad1)"
                    filter="url(#glow)"
                    className="transition-all duration-300 ease-out shadow-[0_0_15px_rgba(0,192,85,0.3)]"
                />
            </svg>
        </div>
    );
}
