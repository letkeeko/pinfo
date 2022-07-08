import React, { useState } from "react";

type ToggleProps = [boolean, React.MouseEventHandler<HTMLButtonElement>];

const useToggle = (): ToggleProps => {
  const [value, setValue] = useState(false);

  const handleToggle = () => setValue(!value);

  return [value, handleToggle];
};

export default useToggle;
