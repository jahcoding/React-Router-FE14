import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { SinglePage } from './pages/SinglePage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { Routes, Route, Navigate} from 'react-router-dom'
import { Layout } from './components/Layout';



function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Layout/>  }>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/blog' element={<BlogPage/>}/>
          <Route path='/blog/:userId' element={<SinglePage/>}/>
          <Route path='/contact' element={<Navigate to="/contact-me"/>}/>
          <Route path='/contact-me' element={<ContactPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
