import merge from "lodash.merge"
import userResolvers from "./user"
import postResolvers from "./post"

const resolvers = merge({}, userResolvers, postResolvers)

export default resolvers