import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";

const Router = () => {
  const [isLoggedUser, setLoggedUser] = useState(true);

  if (isLoggedUser) {
    return (
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/auth" element={<Navigate to="/" replace={true} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" replace={true} />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
