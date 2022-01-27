import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import UserData from "./pages/userData";

export default function AppRoutes() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route end path="/" component={HomePage} />
          <Route path="/user_data" element={<UserData />} />
        </Routes>
      </Suspense>
    </>
  );
}
