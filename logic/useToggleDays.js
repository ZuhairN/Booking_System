import { useState } from "react";

export default function useToggleDays(defVal, fn, resetButton) {
    const [schedule, setSchedule] = useState(defVal);
    const toggleDays = (id) => (
        setSchedule(st => st.map((day, i) => {
            fn();
            resetButton(false);
            if (id == i) return { ...day, isActive: true }
            return { ...day, isActive: false }
        }))
    )
    return [schedule, toggleDays];
}