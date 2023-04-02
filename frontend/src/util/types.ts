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
    image: string
    updatedAt: Date
    createdAt: Date
};


export interface PostsData  {
    readPosts: Array<Post>;
};



/**
 * Tags
 */

export interface Tag {
    id: string
    tagName: string
}

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

export interface TagData {
    readTags: Array<Tag>
}


/**
 * Likes
 */

export interface Like {
    id: string
    userId: string
    postId: string
}

export interface CreateLikeVariables {
    
}

export interface LikeData {
    postLikes: Array<Like>
}

export interface LikeVariables {
    postId: string
}