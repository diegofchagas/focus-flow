import { Input } from "./input/Input";
import { Cycles } from "./cicles/Cycles";
import { PlayCircleIcon, StopCircleIcon } from "@phosphor-icons/react";
import { Button } from "./button/Button";
import { useContext, useRef } from "react";
import type { TaskModel } from "../models/TaskModel";
import { TaskContext } from "../contexts/TaskContext";
import { getNextCycle } from "../utils/getNextCycle";
import { getNextCycleType } from "../utils/getNextCyleType";
import { formatSecondsMinutes } from "../utils/formatSecondsMinutes";

export const NewCycleForm = () => {
  const taskName = useRef<HTMLInputElement>(null);
  const { setState, state } = useContext(TaskContext);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const handleCreateNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskName.current === null) return;

    const task = taskName.current.value.trim();
    if (!task) {
      alert("Por favor, insira uma tarefa válida.");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName.current.value,
      startDate: Date.now(),
      type: nextCycleType,
      interruptedDate: null,
      completedDate: null,
      duration: state.config[nextCycleType],
    };
    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => ({
      ...prevState,
      tasks: [...prevState.tasks, newTask],
      activeTask: newTask,
      secondsRemaining,
      formattedSecondsRemaining: formatSecondsMinutes(secondsRemaining),
      currentCycle: nextCycle,
      config: { ...prevState.config },
    }));
  };

  const handleInterruptTaskActive = () => {
    setState((prevState) => ({
      ...prevState,
      activeTask: null,
      secondsRemaining:0,
      formattedSecondsRemaining: '00:00',
      tasks: prevState.tasks.map(task => { 
        if (prevState.activeTask?.id === task.id) {
          return { ...task, interruptedDate: Date.now() };
        }
        return task
        })
    }));
  }

//   useEffect(() => {
//   console.log('Tasks atualizadas:', state);
// }, [state]);

  return (
    <div className="max-w-[98rem] mx-auto">
      <div className="m-10">
        <form
          onSubmit={handleCreateNewTask}
          className="flex items-center flex-col gap-9"
        >
          <div className="flex items-center flex-col gap-2">
            <Input type="text" id="task" text="task" ref={taskName} disabled={!!state.activeTask} />
          </div>
          <div>
            <span className="text-base text-gray-100">
              Próximo ciclo é de{" "}
              <strong>{state.config[nextCycleType]}min</strong>
            </span>
          </div>
          {state.currentCycle > 0 && (
            <div>
              <Cycles />
            </div>
          )}
          <div className="flex items-center flex-col gap-9">
            {state.activeTask ? (
              <Button
                title="Interromper tarefa atual"
                color="bg-red-800"
                type="button"
                onClick={handleInterruptTaskActive}
                key="button"
                icon={
                  <StopCircleIcon
                    className="hover:text-white duration-150"
                    size={32}
                    weight="bold"
                  />
                }
              />
            ) : (
                <Button
                title="Iniciar nova tarefa"
                color="bg-green-300"
                  type="submit"
                  key="submit"
                icon={
                  <PlayCircleIcon
                    className="hover:text-white duration-150"
                    size={32}
                    weight="bold"
                  />
                }
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
