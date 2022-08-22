import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";

import { useContext } from "react";
import { UserContext } from "../../../contexts/user.context";

import { signOutUser } from "../../../utils/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    // Fragment renders to nothing unlike div which renders some empty space
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {!currentUser ? (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          ) : (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          )}
        </div>
      </div>
      {/* Outlet is like an outlet for contents of child routes */}
      {/* Here outlet will either render matching child elements if sub-routes match*/}
      {/* Else they will match index of child routes or nothing */}
      {/* Here it will render all child routes after our navbar */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
