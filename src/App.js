import logo from './logo.svg'
import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Experience from './components/Experience'

function App(){
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path='/about' element={<Experience />}/>
                </Route>
            </Routes>
        </>
    )
}

export default App