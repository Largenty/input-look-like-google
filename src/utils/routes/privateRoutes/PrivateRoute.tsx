import { Navigate, Route, RouteProps } from "react-router";

type PrivateRouteProps = unknown & RouteProps;

const PrivateRoute = ({ children, ...routeProps }: PrivateRouteProps) => {
  // condition ? <Route {...routeProps}/> : <Navigate to={`/???`} />
  return <Route {...routeProps} />;
};

export default PrivateRoute;
