export default function DayCell({ id, day, date, available, handleClick }) {
    const toggleDays = () => handleClick(id)
    return (
        <>
            <input id={date} type='radio' name='Day' value={date} defaultChecked={id === 1 ? true : false} disabled={available ? false : true} onChange={toggleDays} />
            <label className='DayCell' htmlFor={date}>{day.slice(0, 3)}<span>{date.slice(0, 2)}</span></label>
        </>
    )
}