export interface FindRepositoriesByLanguage {
  search: (language: string, page?: string, per_page?: string) => Promise<FindRepositoriesByLanguage.Result[]>
}

export namespace FindRepositoriesByLanguage {
  export type Result = {
    id: number
    name: string
    full_name: string
    description: string
    avatar: string
    html_url: string
  }
}
