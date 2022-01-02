import React from "react";
import Loader from "./components/loader/Loader";
import AppRoutes from "./utils/routes/AppRoutes";

const App = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <AppRoutes />
      <p>{process.env.REACT_APP_API_END_POINT}</p>
    </React.Suspense>
  );
};

export default App;
