export enum WodType {
  Time = "time",
  Load = "load",
  Rounds = "rounds",
  Rest = "rest"
}

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE"
}

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  latestWod: Wod;
}

export interface Wod {
  id: number;

  type: WodType;
}

export interface Mutation {
  createWod: Wod;
}

// ====================================================
// Arguments
// ====================================================

export interface CreateWodMutationArgs {
  id: number;

  type: WodType;
}
