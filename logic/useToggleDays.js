import { useState } from "react";

export default function useToggleDays(defVal) {
    const [schedule, setSchedule] = useState(defVal);
    const toggleDays = (id) => (
        setSchedule(st => st.map((day, i) => {
            if (id == i) return { ...day, isActive: true }
            return { ...day, isActive: false }
        }))
    )
    return [schedule, toggleDays];
}