import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import CreateBlog from "./components/blogs/create";
import BlogList from "./components/bloglist";
import BlogView from "./components/blogs/show";
import BlogEdit from "./components/blogs/edit";
import Home from "./components/pages/home";
import Navbar from "./components/temps/navbar";

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/blog/' element={<BlogList/>} />

          <Route path='/blog/create' element={<CreateBlog/>}  />
          <Route path='/blog/:id' element={<BlogView/>}  />
          <Route path='/blog/edit/:id' element={<BlogEdit/>}  />

      </Routes>
    </Router>
  )
}

export default App
