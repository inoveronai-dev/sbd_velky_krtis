"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/content";

const STORAGE_KEY = "sbd-vk-splash-seen";
const SPLASH_EVENT = "sbd:splash-complete";

export function signalHeroReady() {
  if (typeof document === "undefined") return;
  document.documentElement.classList.add("sbd-hero-ready");
  document.documentElement.classList.remove("sbd-splash-pending", "sbd-splash-active");
  window.dispatchEvent(new Event(SPLASH_EVENT));
}

function shouldSkipSplash(): boolean {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return true;
  } catch {
    return true;
  }
  return false;
}

function markSplashSeen() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* ignore */
  }
}

/**
 * One-time session splash. Homepage stays mounted underneath.
 * Failsafe + reduced-motion always leave the site usable.
 */
export function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (shouldSkipSplash()) {
      signalHeroReady();
      return;
    }

    let finished = false;
    const timers: number[] = [];

    const finish = () => {
      if (finished) return;
      finished = true;
      timers.forEach((id) => window.clearTimeout(id));
      markSplashSeen();
      document.body.style.overflow = "";
      signalHeroReady();
      setVisible(false);
      setExiting(false);
    };

    // Defer state updates out of the synchronous effect body (lint + paint).
    timers.push(
      window.setTimeout(() => {
        setVisible(true);
        document.documentElement.classList.add("sbd-splash-active");
        document.documentElement.classList.remove("sbd-splash-pending");
        document.body.style.overflow = "hidden";
      }, 0),
    );

    timers.push(window.setTimeout(() => setExiting(true), 920));
    timers.push(window.setTimeout(finish, 1780));
    timers.push(window.setTimeout(finish, 2600));

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
      document.body.style.overflow = "";
      document.documentElement.classList.remove("sbd-splash-active");
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      id="sbd-splash"
      className={`sbd-splash ${exiting ? "sbd-splash--exit" : ""}`}
      role="presentation"
      aria-hidden="true"
    >
      <div className="sbd-splash__panel">
        <div className="sbd-splash__mark">
          <Image
            src="/images/SBDlogo-light.svg"
            alt=""
            width={220}
            height={138}
            priority
            className="sbd-splash__logo h-[4.75rem] w-auto sm:h-[5.75rem] md:h-[6.5rem]"
          />
          <span className="sr-only">{SITE.shortName}</span>
          <span className="sbd-splash__line" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
