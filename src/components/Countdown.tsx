import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";



export const Countdown = () => {

  const  {state} = useContext(TaskContext)
  
  return (
    <div className="max-w-[98rem] mx-auto">
      <div className="m-2">
        <div className="text-center text-[clamp(5rem,30vw,10rem)] font-bold text-white">{ state.formattedSecondsRemaining}</div>
      </div>
    </div>
  );
};
