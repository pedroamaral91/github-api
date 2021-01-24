type GithubResponseItems = {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string
  owner: {
    id: number
    login: string
    avatar_url: string
  }
}

export type GithubApiResponse = {
  total_count: number
  incomplete_results: boolean
  items: GithubResponseItems[]
}

export type GithubLanguageResponse = {
  name: string
  aliases: string[]
}
