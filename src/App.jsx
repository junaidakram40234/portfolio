import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoaderScreen from "./pages/LoaderScreen.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const [ready, setReady] = useState(false);
  const [minDelayDone, setMinDelayDone] = useState(false);

  useEffect(() => {
    // Wait for full page load (images, fonts, etc.)
    const onLoad = () => setReady(true);
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  useEffect(() => {
    // Keep loader visible a bit longer (prevents flash)
    const t = setTimeout(() => setMinDelayDone(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const showLoader = !(ready && minDelayDone);

  return (
    <>
      <LoaderScreen open={showLoader} />

      <div className={showLoader ? "h-screen overflow-hidden" : undefined}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
