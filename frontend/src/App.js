import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Student from './Student';
import CreateStudent from './CreateStudent';
import UpdateStudent from './UpdateStudent';
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Student/>}/>
            <Route path='/create' element={<CreateStudent/>}/>
            <Route path='/update/:id' element={<UpdateStudent/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
