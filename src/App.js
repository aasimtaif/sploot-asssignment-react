import {
  Route, Routes} from 'react-router-dom';
import './App.css';
import { Login,Blogs } from './Pages';

function App() {
  return (
    <div className="App">
<Routes>
  <Route path="/" Component={Login}/>
  <Route path="/blogs" Component={Blogs}/>

</Routes>
    </div>
  );
}

export default App;
