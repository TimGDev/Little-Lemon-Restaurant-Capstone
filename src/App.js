import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/layout/Main";
import HomePage from "./components/home-page/HomePage";
import BookingPage from "./components/booking-page/BookingPage";

function App() {
  return (
    <>
      <Main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/booking-page" element={<BookingPage />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
