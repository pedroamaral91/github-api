import { GetRepositories } from '@/domain/usecases'

export const mockRepositoriesResponse = (): GetRepositories.Result => ({
  total_count: 30,
  items: [{
    id: 1296269,
    name: 'Hello-World',
    full_name: 'octocat/Hello-World',
    description: 'This your first repo!',
    html_url: 'https://github.com/octocat',
    avatar_url: 'https://github.com/images/error/octocat_happy.gif'
  }]
})

export class GetRepositoriesSpy implements GetRepositories {
  async find (params: GetRepositories.Params): Promise<GetRepositories.Result> {
    return mockRepositoriesResponse()
  }
}
