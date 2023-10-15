import './App.scss'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { Route, Routes } from 'react-router-dom'
import Project from './components/Projects/Project'
// import Skills from './components/Skills/Skills'
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";


function App() {
//   async function load(main) {
//     await loadFull(main);
// }
  return (
    <div className='app-container'>
      <Routes>
        <Route path="/" element={<Layout />}> 
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/skills' element={<Skills/>}/> */}
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>

        </Route>
      </Routes>
    </div>
  )
}

export default App
