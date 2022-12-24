import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchScheduleData } from "./store/schedule-action";
import Schedule from "./components/schedule-list/Schedule";
function App() {
  const setForm = useSelector((state) => state.ui.setForm);
  const data = useSelector((state) => state.schedule.data);
  const formProperty = setForm ? "app" : "";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchScheduleData());
  }, [dispatch, data]);
  // console.log(data);
  return (
    <>
      <Header />
      {formProperty && <h1>Enter your schedule</h1>}
      {formProperty && (
        <div className={formProperty}>
          <Form />
        </div>
      )}
      <Schedule />
    </>
  );
}

export default App;
