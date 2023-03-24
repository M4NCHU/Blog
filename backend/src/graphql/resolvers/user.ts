import { GraphQLError } from "graphql"
import { CreateUsernameResponse, GraphQlContext } from "../../util/types"

const resolvers = {
    Query: {
        searchUsers: ()=>{},
    },
    Mutation:{
        createUsername: async (_:any, args: {username:string}, context:GraphQlContext):Promise<CreateUsernameResponse>=>{
            const {username} = args
            const {session, prisma} = context
            
            if (!session?.user) {
                return {error: "User not authorized"}
            }

            
            const {id: userId} = session.user

            try {
                // Check if username is not already taken
                const existUser = await prisma.user.findUnique({
                    where: {
                        username,
                    }
                })

                if (existUser) {
                    return {
                        error: "Username already taken! Try another!"
                    }
                }

                await prisma.user.update({
                    where: {
                        id: userId,
                    },
                    data: {
                        username
                    }
                })

                return {success: true}
            } catch (error:any) {
                return {
                    error: error?.message
                }
            }
        },
    },
    // Subscription: {}
}

export default resolvers