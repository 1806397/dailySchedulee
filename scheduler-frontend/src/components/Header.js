import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../store/ui-slice";
import classes from "./Header.module.css";
const Header = () => {
  const setForm = useSelector((state) => state.ui.setForm);
  const dispatch = useDispatch();
  const toggleForm = () => {
    dispatch(uiAction.toggleForm());
  };

  return (
    <>
      <header className={classes.headerbody}>
        <div className={classes.contentStructure}>
          <h1 className={classes.headingColor}>Welcome to Scheduler</h1>
          {!setForm && <button onClick={toggleForm}>Add new Schedule</button>}
        </div>
      </header>
    </>
  );
};
export default Header;
