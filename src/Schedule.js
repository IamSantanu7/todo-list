const Schedule = (props) => {
    const scheduleToday = props.scheduleToday;

    return ( 
        <div className="my-schedule">
            {scheduleToday.map((schedule) => (
                <div className="schedule-preview" key={schedule.id}>
                    <h3>{ schedule.task}</h3>
                </div>
            ))}
        </div>
     );
}
 
export default Schedule;