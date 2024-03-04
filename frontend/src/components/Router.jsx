import {Routes, Route} from "react-router-dom"
import CursoContainer from "./CursoContainer"

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<p>Hola Mundo</p>}/>
        <Route path="/cursos/:id" element={<CursoContainer/>}/>
    </Routes>
  )
}

export default Router