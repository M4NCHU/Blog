import { GraphQLError } from "graphql"
import { GraphQlContext, SendLikeArguments} from "../../util/types"
import { Like, Prisma } from "@prisma/client"

const resolvers = {
    Query: {
        postLikes: async (
            _:any,
            args: {postId: string},
            context: GraphQlContext
        ): Promise<Array<Like>> => {
            const {prisma} = context
            const {postId} = args

            const post = await prisma.post.findUnique({
                where: {
                    id: postId
                }
            })

            if(!post) {
                throw new GraphQLError("Post not found")
            }

            try {
                const likes = await prisma.like.findMany({
                    where: {
                        postId
                    }
                })
                
                return likes
            } catch (error:any) {
                throw new GraphQLError("failed to query likes")
            }
            
        }
    },
    Mutation: {
        // Send like mutation
        sendLike: async (_:any, args: SendLikeArguments, context:GraphQlContext) : Promise<boolean>  => {
            const {session, prisma} = context
            const {id, userId, postId} = args
            

            if (!session) {
                throw new GraphQLError("Not authorized")
            }

            const {id: userIds} = session.user;

            if (userIds !== userId) {
                throw new GraphQLError("Not authorized")
            }

            const alreadyLike = await prisma.like.findUnique({
                where: {
                  userId_postId: {
                    userId: userIds,
                    postId: postId,
                  },
                },
              });
              

            try {
                if (alreadyLike) {
                    await prisma.like.delete({
                        where: {
                            id: alreadyLike.id
                        }
                    })
                    return false
                } else {
                    const createdLike = await prisma.like.create({
                        data: {
                            id,
                            userId,
                            postId
                        },
                        include: likePopulated
                    })
                    return true
                }

                
            } catch (error:any) {
                console.log("resolver error:", error?.message)
                throw new GraphQLError(error?.message)
            }
            


            
        }
    },
    // Subscription: {},
    
}

export const likePopulated = Prisma.validator<Prisma.LikeInclude> () ({
    user: {
        select: {
            id: true
        }
    }
})


  export default resolvers

