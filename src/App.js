import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { authOperations } from "./redux/auth";

import AppBar from "./components/AppBar";
import Container from "./components/Container";
import PrivateRoute from "./components/Routes/PrivateRoute"; 
import PublicRoute from "./components/Routes/PublicRoute";
import HomePublicPage from "./pages/HomePublicPage";
import HomePrivatePage from "./pages/HomePrivatePage";
import AboutUsPage from "./pages/AboutUsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ContactsPage from "./pages/ContactsPage";
import NotesPage from "./pages/NotesPage";




export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <PublicRoute restricted>
              <HomePublicPage />
            </PublicRoute>
          }
        />

        <Route
          exact
          path="/about"
          element={
            <PublicRoute restricted>
              <AboutUsPage />
            </PublicRoute>
          }
        />

        <Route
          exact
          path="/register"
          element={
            <PublicRoute restricted>
              <RegisterPage />
            </PublicRoute>
          }
        />

        <Route
          exact
          path="/login"
          element={
            <PublicRoute restricted>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          exact
          path="/homeuser"
          element={
            <PrivateRoute restricted>
              <HomePrivatePage />
            </PrivateRoute>
          }
        />

        <Route
          exact
          path="/contacts"
          element={
            <PrivateRoute restricted>
              <ContactsPage />
            </PrivateRoute>
          }
        />

        <Route
          exact
          path="/notes"
          element={
            <PrivateRoute restricted>
              <NotesPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Container>
  );
}
