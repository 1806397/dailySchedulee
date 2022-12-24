import { useDispatch } from "react-redux";
import { postSchedule } from "../store/schedule-action";
import { uiAction } from "../store/ui-slice";
import classes from "./Form.module.css";
import useForm from "./use-form";
const Form = () => {
  const dispatch = useDispatch();
  const cancelButtonHandler = (event) => {
    event.preventDefault();
    dispatch(uiAction.toggleForm());
  };
  const {
    changeHandler: scheduleChangeHandler,
    value: scheduleValue,
    isValid: scheduleIsValid,
    blurChangeHandler: scheduleBlurChangeHandler,
    hasError: scheduleHasError,
  } = useForm((value) => value.trim().length > 2 && value.trim().length <= 60);
  const {
    changeHandler: placeChangeHandler,
    value: placeValue,
    isValid: placeIsValid,
    blurChangeHandler: placeBlurChangeHandler,
    hasError: placeHasError,
  } = useForm((value) => value.trim().length > 2 && value.trim().length <= 10);
  const formIsValid = placeIsValid && scheduleIsValid;
  const formSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(uiAction.toggleForm());
    const data = { task: scheduleValue, place: placeValue };
    postSchedule(data);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes.formcontrol}>
        <label htmlFor="Schedule">Schedule</label>
        <input
          type="schedule"
          id="schedule"
          onChange={scheduleChangeHandler}
          value={scheduleValue}
          onBlur={scheduleBlurChangeHandler}
        />
        {scheduleHasError && <p>Please enter correct Schedule</p>}
      </div>
      <div className={classes.formcontrol}>
        <label htmlFor="place">Place</label>
        <input
          type="place"
          id="place"
          onChange={placeChangeHandler}
          value={placeValue}
          onBlur={placeBlurChangeHandler}
        />
        {placeHasError && <p>Please enter correct Location</p>}
      </div>
      <div className={classes.buttonProps}>
        <button onClick={cancelButtonHandler}>Cancel</button>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default Form;
