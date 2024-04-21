import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from './components/Main';
import Quiz from './components/Quiz';
import './App.css'

function App() {
  return (
  
    <Router>
      <Routes>
         <Route path='/' element={<Main />} />
          <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </Router>
   
  
  )
}

export default App;