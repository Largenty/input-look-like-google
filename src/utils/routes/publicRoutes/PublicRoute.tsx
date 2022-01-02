import { Route, RouteProps } from "react-router";

type PublicRouteProps = unknown & RouteProps;

const PublicRoute = ({ children, ...routeProps }: PublicRouteProps) => {
  return <Route {...routeProps} />;
};

export default PublicRoute;
