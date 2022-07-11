import React, { useState } from "react";

export default function useToggleView(initValue) {
  const [view, setView] = useState(initValue);

  const onChanges = () => setView((view) => !view);

  return {
    view,
    onChange: onChanges,
  };
}
