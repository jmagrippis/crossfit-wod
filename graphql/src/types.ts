export interface WodInput {
  id: number

  type: WodType

  image: WodImageInput
}

export interface WodImageInput {
  url: string

  credit?: string | null

  location?: LocationInput | null
}

export interface LocationInput {
  name: string

  url: string
}

export enum WodType {
  Time = 'time',
  Load = 'load',
  Rounds = 'rounds',
  Rest = 'rest'
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

/** The `Upload` scalar type represents a file upload. */
export type Upload = any

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  getWod?: Wod | null

  latestWod: Wod
}

export interface Wod {
  id: number

  type: WodType

  image: WodImage
}

export interface WodImage {
  url: string

  credit?: string | null

  location?: Location | null
}

export interface Location {
  name: string

  url: string
}

export interface Mutation {
  createWod: Wod
}

// ====================================================
// Arguments
// ====================================================

export interface GetWodQueryArgs {
  id: number
}
export interface CreateWodMutationArgs {
  wod: WodInput
}
