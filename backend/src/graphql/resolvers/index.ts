import merge from "lodash.merge"
import userResolvers from "./user"
import postResolvers from "./post"
import tagResolvers from "./tags"
import scalarResolvers from "./scalars";

const resolvers = merge({}, userResolvers, postResolvers, tagResolvers, scalarResolvers)

export default resolvers