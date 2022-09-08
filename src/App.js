import { Route, Routes } from 'react-router-dom';
import AuthorPage from './component/author/AuthorPage';
import BlogPage from './component/blog/BlogPage';
import HomePage from './component/home/HomePage';
import Layout from './component/layout/Index';
import ScrollToTop from './component/share/ScrollToTop'
import RTL from './component/share/RTL'

function App() {

  return (
    <>
      <RTL>
        <Layout>
          <ScrollToTop/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/blogs/:slug' element={<BlogPage/>}/>
            <Route path='/authors/:slug' element={<AuthorPage/>}/>
          </Routes>
        </Layout>     
      </RTL>
    </>
  );
}

export default App;
