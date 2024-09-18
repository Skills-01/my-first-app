import './App.css';
import Navbar from './components/Navbar';
// import { PersonCard } from './components/PersonCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {HomeScreen} from './pages/HomeScreen';
import { AboutUs } from './pages/AboutUs';
import { Books } from './pages/Books';
import Contact from './pages/Contact';


// https://stephen-king-api.onrender.com/api/books


function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Display pages*/}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen /> } />
        <Route path='/about' element={<AboutUs /> } />
        <Route path='/books' element={<Books /> } />
        <Route path='/contact' element={<Contact />} />
        
      </Routes>
      </BrowserRouter>
    

    

     

      {/* <h2> Hello, <span className="style-5">{name}</span>!</h2>

      <p> 
        My name is <span className="style-4">{nameAgain}</span>. I am a <span class="style-3">{occupation}</span>.
      </p>

      <p>
        I started out in <span class="style-2">{year}</span>.
      </p>

      <p>
        I have a <span className="style">{animal}
          </span>, its name is <span className="style-1">{petName}</span>.
      </p> */}

    </div>
  )
}

export default App;
