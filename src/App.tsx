import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layouts";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Error404 } from "./pages/Error404";
import { Contact } from "./pages/Contact";
import { BlogDetails } from "./pages/BlogDetails";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/:postId" element={<BlogDetails />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
