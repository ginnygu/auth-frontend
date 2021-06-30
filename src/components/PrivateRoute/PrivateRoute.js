import React from "react";
import { Route, Redirect } from "react-router-dom";
import checkIfUserIsAuth from "../utils/checkIfUserIsAuth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routerProps) =>
        checkIfUserIsAuth() ? (
          <Component {...routerProps} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
// const PrivateRoute = (props) => {
//   console.log(props);

//   return <Route exact path={props.path} component={props.component} />;
// };

// const PrivateRoute = (props) => {
//   console.log(props);

//   return (
//     <Route
//       exact
//       path={props.path}
//       render={() => <Movie />}
//       // render={() => (props.user ? props.component : <Redirect to="/login" />)}
//     />
//   );
// };
