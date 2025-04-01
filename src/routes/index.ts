import { publicRoutes } from "./public"
import { privateRoutes } from "./private"

import { createBrowserRouter } from "react-router"

const combinedRoutes = createBrowserRouter([...publicRoutes, ...privateRoutes])

export default combinedRoutes
