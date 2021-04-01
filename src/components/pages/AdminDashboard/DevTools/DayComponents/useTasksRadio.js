import { useState } from 'react';

const useTasksRadio = givenValue => {
  const [value, setValue] = useState(givenValue);

  let radioTasks;

  switch (value) {
    case 0:
      radioTasks = {
        hasRead: false,
        hasDrawn: false,
        hasWritten: false,
      };
      break;
    case 1:
      radioTasks = {
        hasRead: true,
        hasDrawn: false,
        hasWritten: false,
      };
      break;
    case 2:
      radioTasks = {
        hasRead: true,
        hasDrawn: true,
        hasWritten: false,
      };
      break;
    case 3:
      radioTasks = {
        hasRead: true,
        hasDrawn: true,
        hasWritten: true,
      };
      break;
    default:
      return null;
  }

  return [radioTasks, value, setValue];
};

export default useTasksRadio;
