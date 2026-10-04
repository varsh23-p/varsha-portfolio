import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

// Thin progress bar at the top + a back-to-top button that appears after scrolling.
export default function ScrollProgress() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (y) => setShowTop(y > 400));
  }, [scrollY]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{
          scaleX,
          transformOrigin: "0%",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
          zIndex: 200,
        }}
      />
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="top"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            style={{
              position: "fixed",
              right: 20,
              bottom: 20,
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "1px solid var(--accent)",
              background: "rgba(0,0,0,0.7)",
              color: "var(--accent)",
              fontSize: 20,
              cursor: "pointer",
              backdropFilter: "blur(6px)",
              zIndex: 150,
            }}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
