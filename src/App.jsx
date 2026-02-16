import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout";
import Loader from "./components/Loader";

// Artificial delay (to visualize lazy loading)
const delay = (promise) =>
  new Promise((resolve) => {
    setTimeout(resolve, 1200);
  }).then(() => promise);

// Lazy pages
const Home = lazy(() => delay(import("./pages/Home")));
const About = lazy(() => delay(import("./pages/About")));
const Contact = lazy(() => delay(import("./pages/Contact")));

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
