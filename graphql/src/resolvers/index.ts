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
  type,
  image: {
    url:
      "https://d1s2fu91rxnpt4.cloudfront.net/mainsite/w20181020/raw/c6fddc556a0208f_718463.jpg"
  }
});

export const resolvers = {
  Query: {
    latestWod
  },
  Mutation: {
    createWod
  }
};
