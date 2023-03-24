import {gql} from "@apollo/client"

export default { 
    Queries: {},
    Mutations: {
        // Create Username
        createUsername: gql`
            mutation createUsername ($username:String!) {
                createUsername(username: $username) { 
                    success
                    error
                }
            }
        `
    },
    Subscriptions: {},
}