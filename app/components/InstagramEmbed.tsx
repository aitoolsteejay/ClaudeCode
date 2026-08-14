"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

// Renders Instagram's official oEmbed blockquote for a public post/reel URL.
// The embed.js script (loaded once, at the page level) scans the DOM for
// `.instagram-media` blockquotes and replaces them with the real player.
// That scan only runs automatically on the script's initial load, so on
// client-side navigation back to a page with embeds already in the DOM we
// re-trigger it manually here.
export default function InstagramEmbed({ url }: { url: string }) {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: "12px",
        margin: "0 auto",
        maxWidth: "540px",
        minWidth: "326px",
        width: "99.375%",
      }}
    />
  );
}
