import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "components/header/header";
import { Footer } from "components/footer/footer";
import { BookingsPage } from "pages/bookings-page/bookings-page";
import { MainPage } from "pages/main-page";
import { SignInPage } from "pages/sign-in-page/sign-in-page";
import { SignUpPage } from "pages/sign-up-page/sign-up-page";
import { TripPage } from "pages/trip-page/trip-page";
import { TRIP_ROUTE_PATTERN } from "routes";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage/>}/>
          <Route
            path="bookings"
            element={<BookingsPage/>
            }
          />
          <Route
            path="sign-in"
            element={<SignInPage/>}
          />
          <Route
            path="sign-up"
            element={<SignUpPage/>}
          />
          <Route
            path={TRIP_ROUTE_PATTERN}
            element={<TripPage />}
          />
          <Route path="*" element={<Navigate to="/"/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
