import { scheduleAction } from "./schedule-slice";

export const fetchScheduleData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8049/schedule");
      if (!response.ok) {
        throw new Error("Could not fetch schedule data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const scheduleData = await fetchData();
      dispatch(scheduleAction.updateData({ data: scheduleData || [] }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteSchedule = (schedule_id) => {
  const deleteData = async () => {
    const response = await fetch(
      `http://localhost:8049/schedule/${schedule_id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Unable to delete data");
    }
  };
  try {
    deleteData();
  } catch (error) {
    console.log(error);
  }
};

export const postSchedule = async (data) => {
  const response = await fetch("http://localhost:8049/schedule", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    console.log("Unable to post your data");
  }
};
