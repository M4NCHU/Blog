import { Tag } from "@prisma/client";
import { GraphQLError, GraphQLString } from "graphql";
import { CreateTagArguments, GraphQlContext } from "../../util/types";

const resolvers = {
    Query: {
        readTags: async (
            _ : any,
            __: any,
            context: GraphQlContext
        ) : Promise<Array<Tag>> => {
            const {prisma} = context
            
            try {
                const tags = await prisma.tag.findMany()
                
                return tags
            } catch (error:any) {
                throw new Error(error?.message)
            }

           
        }
            
    },
    Mutation: {
        createTag: async (
            _ : any,
            args: CreateTagArguments,
            context: GraphQlContext
        ) : Promise<boolean> => {
            const {session, prisma} = context
            const {tagName, id} = args
            
            
            
            if (!session) {
                throw new GraphQLError("Not authorized")
            }

            const tagExist = await prisma.tag.findUnique({
                    where: {
                        tagName,
                    }
                })

            if (tagExist) {
                // throw new GraphQLError(`Tag of name ${name} already exists`)
                throw new Error(`Tag ${tagName} already exists`)
            }

            try {
                const newTag = await prisma.tag.create({
                    data: {
                        id,
                        tagName
                    }
                })
                
                return true
            } catch (error:any) {
                throw new GraphQLError(error?.message)
            }
        }
    },
    // Subscription: {},
}

export default resolvers