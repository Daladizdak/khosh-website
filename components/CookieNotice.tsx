"use client";

import { useEffect, useState } from "react";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie_notice");
    if (!accepted) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white px-6 py-4 text-sm flex flex-col md:flex-row items-center justify-between gap-4 z-50">
      <p>
        This website uses essential cookies only to ensure proper functionality.
        No tracking or marketing cookies are used.
      </p>
      <button
        onClick={() => {
          localStorage.setItem("cookie_notice", "accepted");
          setVisible(false);
        }}
        className="bg-white text-black px-4 py-2 rounded"
      >
        OK
      </button>
    </div>
  );
}
