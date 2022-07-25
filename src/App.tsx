import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const shouldRedirect = true;
  return (
    <>
      <BrowserRouter>
        <Header />        
        <Routes>
          <Route index element={<Home />} />  
          <Route path="/" element={<Home />} />        
          <Route path="*"
            element={
              shouldRedirect ? (
                <Navigate replace to="/" />
              ) : (
                <Home />
              )
            }
          /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
