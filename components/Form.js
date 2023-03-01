import useToggleDays from 'logic/useToggleDays';
import useToggleHours from 'logic/useToggleHours';
import { useState } from 'react';
import DaySlider from './DaySlider';
import HourCell from './HourCell';

export default function Form({ data }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const rowData = JSON.parse(data).schedule.map((day, i) => (
        i !== 1 ? { ...day, isActive: false } :
            { ...day, isActive: true }));
    const [ActiveHour, setActiveHour, reset] = useToggleHours(null);
    const [schedule, toggleDays] = useToggleDays(rowData, reset, setIsSubmitted);
    const activeDay = schedule.filter(day => day.isActive)[0];
    const sortedHours = [...activeDay.available.map(hour => ({ ...hour, isAvailable: true })), ...activeDay.unavailable.map(hour => ({ ...hour, isAvailable: false }))].sort(({ from_unix: a }, { from_unix: b }) => a - b)
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    }
    return (
        <form className='Form' action='#' method='post'>
            <h1 className='Form__header'>Schedule Appointment</h1>
            <div className='Form__container'>
                <h2 className='Form__fee'>Fees <span>85$</span></h2>
                <fieldset className='Form__fieldset'>
                    <legend className='Form__legend'>Schedule</legend>
                    <div className='Form__dateTable'>
                        <DaySlider schedule={schedule} toggleDays={toggleDays} />
                    </div>
                </fieldset>
                <fieldset className='Form__fieldset'>
                    <legend className='Form__legend'>Choose time</legend>
                    <div className='Form__timeTable'>
                        {sortedHours.map((hour, i) => <HourCell key={i} {...hour} id={i} activeHour={ActiveHour} toggleHour={setActiveHour} />)}
                    </div>
                </fieldset>
            </div>
            <button className={`Form__submit ${ActiveHour !== null ? '' : 'disabled'} ${isSubmitted ? 'submitted' : ''}`} type='submit' disabled={ActiveHour === null} onClick={handleSubmit}>{isSubmitted ? 'Booked!' : 'Book Appointment'}</button>
        </form>
    )
}

