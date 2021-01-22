export interface FindLanguages {
  search: () => Promise<FindLanguages.Result[]>
}

export namespace FindLanguages {
  export type Result = {
    name: string
  }
}
