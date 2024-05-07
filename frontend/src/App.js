import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./Pages/Layout";
import User from "./Components/User";
import Task from "./Components/Task";
import Home from "./Components/Home";
import Display from "./Components/Userdisplay";
import TaskDisplay from "./Components/TaskDisplay"


function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="/userdisplay" element={<Display/>} />
              <Route path="/taskdisplay" element={<TaskDisplay/>} />
              <Route path="/insertuser" element={<User/>} />
              <Route path="/inserttask" element={<Task/>} />

              </Route>

          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
