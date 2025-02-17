import React, { useState, useRef, useEffect } from "react";
import { usePerformanceContext } from "./PerformanceContext";

const PerformanceOverlay = () => {
    const { items } = usePerformanceContext();
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ x: 20, y: 20 });
    const panelRef = useRef<HTMLDivElement | null>(null);
    const [dragging, setDragging] = useState(false);
    const [mouseStart, setMouseStart] = useState({ x: 0, y: 0 });

    const isMobile = window.innerWidth <= 768;

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (dragging) {
                setPosition((prev) => ({
                    x: prev.x + e.clientX - mouseStart.x,
                    y: prev.y + e.clientY - mouseStart.y,
                }));
                setMouseStart({ x: e.clientX, y: e.clientY });
            }
        };
        const handleMouseUp = () => {
            setDragging(false);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [dragging, mouseStart]);

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#007bff",
                    color: "white",
                    border: "none",
                    padding: "10px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    zIndex: 1000,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                    transition: "0.3s ease-in-out",
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                📊
            </button>

            {/* Overlay Panel */}
            {!isOpen && (
                <div
                    ref={panelRef}
                    style={{
                        position: "fixed",
                        left: isMobile ? "0px" : `${position.x}px`,
                        top: isMobile ? "0px" : `${position.y}px`,
                        width: isMobile ? "100vw" : "auto",
                        height: isMobile ? "100vh" : "auto",
                        minWidth: isMobile ? "100%" : "320px",
                        minHeight: isMobile ? "100%" : "260px",
                        background: "rgba(20, 20, 20, 0.85)",
                        color: "white",
                        borderRadius: isMobile ? "0px" : "6px",
                        zIndex: 999,
                        boxShadow: isMobile ? "none" : "4px 4px 15px rgba(0,0,0,0.6)",
                        overflow: "auto",
                        backdropFilter: "blur(8px)",
                        resize: isMobile ? "none" : "both",
                    }}
                >
                    {/* Drag Handle (Hidden on Mobile) */}
                    {!isMobile && (
                        <div
                            style={{
                                cursor: "grab",
                                padding: "8px",
                                background: "rgba(26, 26, 26, 0.85)",
                            }}
                            onMouseDown={(e) => {
                                setDragging(true);
                                setMouseStart({ x: e.clientX, y: e.clientY });
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(90)">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                            </svg>
                        </div>
                    )}

                    <h4 style={{ margin: "12px 0", fontSize: "16px", fontWeight: "600" }}>⏱️ Render Times</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        {Object.entries(items).map(([component, profilerInfos]) => (
                            <details key={component} style={{
                                background: "rgba(24, 24, 24, 0.85)",
                                padding: '8px', margin: "6px 0", fontSize: "13px", textAlign: "left",
                            }}>
                                <summary style={{ fontWeight: "bold", cursor: "pointer" }}>
                                    {component}
                                </summary>
                                <div style={{ paddingLeft: "12px", maxHeight: "100px", overflowY: 'auto', }}>
                                    {profilerInfos.map((info, index) => (
                                        <p key={index} style={{ margin: "3px 0", color: "#bbb" }}>
                                            {info.phase}: <strong>{info.actualDuration.toFixed(2)}ms</strong>
                                        </p>
                                    ))}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default PerformanceOverlay;
