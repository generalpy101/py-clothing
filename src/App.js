import Home from "./components/routes/home/home.components"
import Navigation from "./components/routes/navigation/navigation.component"
import { Routes, Route } from "react-router-dom"
import Authentication from "./components/routes/authentication/authentication.component"
const App = () => {
  return (
    // Routes holds all Route instances for url matching
    <Routes>
      {/* Routes can be nested */}
      {/* When nested, routes will first match parent route and then child routes */}
      {/* If no child route is matched, route with index=true is returned */}
      {/* Contents of outlet will go from children of this parent route */}
      <Route path="/" element={<Navigation />}>
        {/* Making home index, thus if no subroute is provided after /, it will be rendered */}
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
