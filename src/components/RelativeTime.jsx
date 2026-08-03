import { useEffect, useState } from "react";
import { getRelativeTime } from "../utils/format.js";

export default function RelativeTime({ timestamp }) {
  const [, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((n) => n + 1), 30000);
    return () => clearInterval(id);
  }, []);
  return <>{getRelativeTime(timestamp)}</>;
}
