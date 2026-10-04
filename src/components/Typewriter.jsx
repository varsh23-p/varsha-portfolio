import React, { useEffect, useState } from "react";

// Types each phrase, pauses, deletes, then moves to the next.
// With reduced-motion enabled it just shows the first phrase.
export default function Typewriter({ phrases, className = "" }) {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [i, setI] = useState(0);
  const [text, setText] = useState(reduced ? phrases[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const full = phrases[i];
    let delay = deleting ? 35 : 70;
    if (!deleting && text === full) delay = 1600;
    if (deleting && text === "") delay = 350;

    const t = setTimeout(() => {
      if (!deleting && text === full) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        return setI((i + 1) % phrases.length);
      }
      setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, phrases, reduced]);

  return (
    <p className={`typewriter ${className}`} aria-label={phrases.join(", ")}>
      <span aria-hidden="true">{text}</span>
      <span className="typewriter-caret" aria-hidden="true" />
    </p>
  );
}
