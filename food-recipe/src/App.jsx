import Layout from "./component/Layout"
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import RecipeDetails from "./pages/RecipeDetails"
import RecipePage from "./pages/RecipePage"

function App() {

  return (
    <div className="bg-black">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/recipes/:id" element={ <RecipeDetails /> } />
          <Route path="/recipePage" element={<RecipePage />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App