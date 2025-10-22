import { useContext } from "react"
import { TaskContext } from "../../contexts/TaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCyleType"


export const Cycles = () => {
  const { state } = useContext(TaskContext)
  
  const cycleStep = Array.from({ length: state.currentCycle })

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <span className="text-xl text-white">Ciclos:</span>
      <div className='flex gap-2'>
        {
          cycleStep.map((_, index) => {
            const nextCycle = getNextCycle(index)
            const cycleType = getNextCycleType(nextCycle)
            return <span key={nextCycle} className= {`w-[32px] h-[32px] ${cycleType === 'workTime'?  'bg-amber-300 rounded-full' : cycleType === 'shortBreakTime'? 'bg-emerald-600 rounded-full' : 'bg-blue-400 rounded-full'} `}></span> 
          })  
        }
      </div>
    </div>
  )
}
