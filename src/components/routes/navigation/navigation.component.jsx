import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg"
import "./navigation.styles.scss"

const Navigation = () => {
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
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      {/* Outlet is like an outlet for contents of child routes */}
      {/* Here outlet will either render matching child elements if sub-routes match*/}
      {/* Else they will match index of child routes or nothing */}
      {/* Here it will render all child routes after our navbar */}
      <Outlet />
    </Fragment>
  )
}

export default Navigation
