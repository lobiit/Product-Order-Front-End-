import {Orders} from "./components/Order";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Orders/>}/>
    </Routes>
  </BrowserRouter>;
}

export default App;
