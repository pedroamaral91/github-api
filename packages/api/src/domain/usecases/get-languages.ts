export interface GetLanguages {
  search: () => Promise<GetLanguages.Result[]>
}

export namespace GetLanguages {
  export type Result = {
    name: string
  }
}
