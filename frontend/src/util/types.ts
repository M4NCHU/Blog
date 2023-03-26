export interface CreateUsernameData {
    createUsername: {
        success: boolean
        error: string
    }
}

export interface CreateUsernameVariables {
    username: string
}


export interface Post {
    id: string;
    author: string;
    title: string;
    desc: string;
    // image: string;
  };
  
export interface PostsData  {
    readPosts: Array<Post>;
  };