export default function HourCell({ from_unix, isAvailable }) {
    const from = from_unix / 3600 % 24;
    const time = from < 12 ? `${from}:00 am` : (from === 12 ? '12:00 pm' : `${from % 12}:00 pm`)
    return (
        <div>
            <input id={time} type='radio' name='Hour' value={from_unix} disabled={!isAvailable} />
            <label className='HourCell' htmlFor={time}>{time}</label>
        </div>
    )
}