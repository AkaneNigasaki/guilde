"use client"; // <-- Ne pas oublier cette ligne en haut !

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export interface TypewriterTextProps {
    texts?: string[];
    speed?: number;
    deleteSpeed?: number;
    pauseDuration?: number;
    loop?: boolean;
    className?: string;
    showCursor?: boolean;
}

const DEFAULT_TEXTS = [
    "Building the future, one line at a time...",
    "Garder pour mieux tirer...",
];

export const TypewriterText: React.FC<TypewriterTextProps> = ({
    texts = DEFAULT_TEXTS,
    speed = 80,
    deleteSpeed = 40,
    pauseDuration = 2000,
    loop = true,
    className = "",
    showCursor = true,
}) => {
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const currentText = texts[textIndex] || "";

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (isPaused) {
            timeout = setTimeout(() => {
                setIsPaused(false);
                if (loop || textIndex < texts.length - 1) {
                    setIsDeleting(true);
                }
            }, pauseDuration);
        } else if (isDeleting) {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(
                        currentText.substring(0, displayText.length - 1),
                    );
                }, deleteSpeed);
            } else {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }
        } else {
            if (displayText.length < currentText.length) {
                timeout = setTimeout(() => {
                    setDisplayText(
                        currentText.substring(0, displayText.length + 1),
                    );
                }, speed);
            } else {
                setIsPaused(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [
        displayText,
        isDeleting,
        isPaused,
        currentText,
        speed,
        deleteSpeed,
        pauseDuration,
        loop,
        textIndex,
        texts,
    ]);

    return (
        <span className={`font-mono ${className}`}>
            {displayText}
            {showCursor && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="text-[#E50027] inline-block ml-1"
                >
                    |
                </motion.span>
            )}
        </span>
    );
};

export default TypewriterText;
