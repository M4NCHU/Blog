import merge from "lodash.merge"
import userResolvers from "./user"
import postResolvers from "./post"
import tagResolvers from "./tags"

const resolvers = merge({}, userResolvers, postResolvers, tagResolvers)

export default resolvers