import merge from "lodash.merge"
import userResolvers from "./user"
import postResolvers from "./post"
import tagResolvers from "./tags"
import scalarResolvers from "./scalars";
import LikeResolvers from "./likes";

const resolvers = merge({}, userResolvers, postResolvers, tagResolvers, scalarResolvers, LikeResolvers)

export default resolvers