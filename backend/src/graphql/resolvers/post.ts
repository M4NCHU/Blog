import { Post, Prisma } from "@prisma/client"
import { CreatePostArguments, GraphQlContext } from "../../util/types"
import { GraphQLError } from "graphql";

const resolvers = {
    Query: {
        readPosts: async function (
            _:any,
            __: any,
            context: GraphQlContext
        ) : Promise<Array<Post>> {
            const {prisma} = context
            

            try {
                const posts = await prisma.post.findMany(
                    {
                        include: postPopulated,
                        orderBy: {
                            createdAt: "desc"
                        }
                    }
                )
                return posts
            } catch (error:any) {
                throw new Error(error?.message)
            }
        }
    },
    Mutation: {
        sendPost: async function (_:any, args: CreatePostArguments, context: GraphQlContext) : Promise<boolean> {
            const {session, prisma} = context
            const {id, authorId, title, desc} = args
            if (!session?.user) {
                throw new GraphQLError("Not Authorized")
            }
            
            const {
                user : {
                    id: userId
                }
            } = session
            
            try {
                
                const post = await prisma.post.create({
                    data: {
                        id,
                        authorId,
                        title,
                        desc,
                        
                    },
                    include: postPopulated
                    
                })
                return true
            } catch (error:any) {
                throw new GraphQLError(error?.message)
            }
        }
    },
    // Subscription: {},
}

export const postPopulated = Prisma.validator<Prisma.PostInclude> () ({
    author: {
        select: {
            id: true,
            username:true
        }
    }
})



export default resolvers