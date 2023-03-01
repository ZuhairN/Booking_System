import { useState } from "react";

export default function useToggleHours(defVal) {
    const [activeHour, setActiveHour] = useState(defVal);
    const reset = () => setActiveHour(null)
    return [activeHour, setActiveHour, reset];
}