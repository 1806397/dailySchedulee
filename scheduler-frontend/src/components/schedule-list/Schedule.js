import { useSelector } from "react-redux";
import ScheduleList from "./ScheduleList";
import classes from "./Schedule.module.css";
const Schedule = () => {
  const data = useSelector((state) => state.schedule.data);
  return (
    <section className={classes.sch}>
      {data.length ? (
        <h2>Your schedule for today</h2>
      ) : (
        <h2>No schedule for today </h2>
      )}
      <ul>
        {data.map((scheduleData) => (
          <ScheduleList
            id={scheduleData.schedule_id}
            key={scheduleData.schedule_id}
            title={scheduleData.task}
            place={scheduleData.place}
          />
        ))}
      </ul>
    </section>
  );
};
export default Schedule;
