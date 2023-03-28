import gql from "graphql-tag"

const typeDefs = gql`
    type Tag {
        id: String
        tagName: String
    }


    # Queries 

    type Query {
        readTags: [Tag]
    }

    # Mutations 
    type Mutation {
        createTag(
            id: String
            tagName: String
        ) : Boolean
    }

`  

export default typeDefs