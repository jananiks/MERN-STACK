import './App.css';
import Home from './Home';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import About from './About';

const config = createBrowserRouter([
  {path:"/Home",element:<Home/>},
  {path:"/About",element:<About/>}
]);
function App() {
  const getUser= async()=>{
      let reqres= await fetch("https://reqres.in/api/users");
      let serverRes = await reqres.json();
      console.log(serverRes['data']);


  }
  return (
    <div >
    {/*RouterProvider config={config}*/}
    <Home/>
    <About/>
    <button onClick ={getUser}>
      SRINIVASAN
    </button>

    </div>
  );
}

export default App;
