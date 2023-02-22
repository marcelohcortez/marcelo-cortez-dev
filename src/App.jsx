import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import CreateBlog from "./components/post/create";
import BlogList from "./components/post/list";
import BlogSingle from "./components/post/single";
import BlogEdit from "./components/post/edit";
import Home from "./components/pages/home";
import Navbar from "./components/routes/navbar";

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/blog/' element={<BlogList/>} />
          <Route path='/blog/create' element={<CreateBlog/>}  />
          <Route path='/blog/:id' element={<BlogSingle/>}  />
          <Route path='/blog/edit/:id' element={<BlogEdit/>}  />
      </Routes>
    </Router>
  )
}

export default App
