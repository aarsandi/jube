import React from "react";

const useInput = (initValue) => {
  const [val, setVal] = React.useState(initValue);

  const handleOnChange = (event) => {
    setVal(event.target.value);
  };

  return {
    val,
    onChange: handleOnChange,
  };
};

export default useInput;
