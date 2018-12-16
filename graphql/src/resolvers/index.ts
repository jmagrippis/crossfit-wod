import { Wod, CreateWodMutationArgs } from "../types";

const latestWod = () => ({
  id: 181020,
  type: "rest"
});

export const createWod = (
  _: object,
  { id, type }: CreateWodMutationArgs
): Wod => ({
  id,
  type
});

export const resolvers = {
  Query: {
    latestWod
  },
  Mutation: {
    createWod
  }
};
