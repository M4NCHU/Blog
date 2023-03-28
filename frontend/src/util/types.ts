export interface CreateUsernameData {
    createUsername: {
        success: boolean
        error: string
    }
}

export interface CreateUsernameVariables {
    username: string
}

/**
 * Posts
 */

export interface Post {
    id: string;
    author: string;
    title: string;
    desc: string;
};


export interface PostsData  {
    readPosts: Array<Post>;
};



/**
 * Tags
 */

export interface CreateTagArguments {
    createTag: {
        id: string
        tagName: string
    }
    
}

export interface CreateTagVariables {
    id: string
    tagName: string
}