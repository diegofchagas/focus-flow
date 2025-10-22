
import {  } from "./contexts/TaskContext";
import { TaskContextProvider } from "./contexts/TaskContextProvider";
import { Home } from "./pages/Home";
//import { AboutPomodoro } from "./pages/About-Pomodoro";

function App() {
  return (

    <TaskContextProvider>
      <div className="bg-gray-900"> 
        <Home/>
        {/* <AboutPomodoro/> */}
      </div>
    </TaskContextProvider>
  );
}

export default App;
