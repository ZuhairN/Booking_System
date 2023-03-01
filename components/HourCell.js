export default function HourCell({ id, from_unix, isAvailable, activeHour, toggleHour }) {
    const from = from_unix / 3600 % 24;
    const time = from < 12 ? `${from}:00 am` : (from === 12 ? '12:00 pm' : `${from % 12}:00 pm`)
    const handleChange = () => toggleHour(id)
    return (
        <>
            <input id={time} type='radio' name='Hour' value={from_unix} disabled={!isAvailable} checked={activeHour === id} onChange={handleChange} />
            <label className='HourCell' htmlFor={time}>{time}</label>
        </>
    )
}