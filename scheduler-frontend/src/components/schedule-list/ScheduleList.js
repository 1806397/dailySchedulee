import classes from "./ScheduleList.module.css";
import Card from "../UI/Card";
import { deleteSchedule } from "../../store/schedule-action";

const ScheduleList = (props) => {
  const { title, place, id } = props;

  const deleteScheduleForGivenID = (id) => {
    deleteSchedule(id);
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <button onClick={() => deleteScheduleForGivenID(id)}>DELETE</button>
        </header>
        <p>{place}</p>
      </Card>
    </li>
  );
};

export default ScheduleList;
