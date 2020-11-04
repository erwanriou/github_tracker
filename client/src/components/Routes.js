import RepositoryDetail from "./repositories/RepositoryDetail"
import Repositories from "./repositories/Repositories"
import TrackedUsers from "./tracks/Users"
import TrackedRepositories from "./tracks/Repositories"

export const Routes = {
  repositories: [
    {
      path: "/repositories/:username",
      component: Repositories
    },
    {
      path: "/repositories/:username/:repositoryId",
      component: RepositoryDetail
    },
    {
      path: "/tracks/repositories",
      component: TrackedRepositories
    },
    {
      path: "/tracks/users",
      component: TrackedUsers
    }
  ]
}
