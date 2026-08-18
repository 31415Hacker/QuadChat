import { useEffect, useRef } from "react";

const scriptUrl = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

export default function TurnstileWidget({ siteKey, onToken, refreshKey }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!siteKey || !ref.current) return;
    let script = document.querySelector(`script[src="${scriptUrl}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      document.head.append(script);
    }
    const render = () => window.turnstile?.render(ref.current, { sitekey: siteKey, callback: onToken, "expired-callback": () => onToken("") });
    script.addEventListener("load", render);
    render();
    return () => { script.removeEventListener("load", render); ref.current?.replaceChildren(); };
  }, [siteKey, onToken, refreshKey]);
  return siteKey ? <div className="turnstile-widget" ref={ref} /> : <p className="captcha-note">CAPTCHA is not configured.</p>;
}
