import { useState } from "react";

const useForm = (validate) => {
  const [value, setvalue] = useState("");
  const [blur, blurChange] = useState(false);
  const isValid = validate(value);
  const changeHandler = (event) => {
    setvalue(event.target.value);
  };
  const blurChangeHandler = () => {
    blurChange(true);
  };
  const hasError = !value && blur;
  return {
    changeHandler,
    value,
    isValid,
    blur,
    blurChangeHandler,
    hasError,
  };
};
export default useForm;
