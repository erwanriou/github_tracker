import Login from "./auth/Login"
import Register from "./auth/Register"
import RepositoryDetail from "./repositories/RepositoryDetail"
import Repositories from "./repositories/Repositories"

export const Routes = {
  auth: [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/register",
      component: Register
    }
  ],
  repositories: [
    {
      path: "/repositories/:username",
      component: Repositories
    },
    {
      path: "/repositories/:username/:repositoryId",
      component: RepositoryDetail
    }
  ]
}
