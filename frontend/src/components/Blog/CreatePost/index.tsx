import Button from "@/components/Button";
import Icon from "@/components/icon";
import Input from "@/components/Input"
import { useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineFileImage } from "react-icons/ai"
import { BsEmojiHeartEyes } from "react-icons/bs"
import postOperations from "@/graphql/operations/post";
import  ObjectID  from 'bson-objectid';
import { CreatePostArguments } from "@/../../../backend/src/util/types"
import { GraphQLError } from "graphql";
import { reloadSession } from "@/util/refreshSession";
import { toast } from "react-hot-toast";

interface CreatePostProps {
    
}

const CreatePost:React.FC<CreatePostProps> = () => {
    const {data} = useSession();
    const user = data?.user
    
    const [title, setTitle] = useState("")
    const [post, setPost] = useState("")
    
    const [createPost, {loading, error}] = useMutation<{sendPost:Boolean}, CreatePostArguments>(postOperations.Mutation.sendPost) 

    const onSendPost = async () => {
        if (!post) return
        if (!user) return

        const img = user?.image

        const authorId = user.id
        
      
        try {
            

            var objectId = new ObjectID().toString();
            

            const {data} = await createPost({variables: {
                id: objectId,
                desc: post,
                title,
                authorId,
                
            }})

            if (!data?.sendPost) {
                throw new Error("Failed to send post!")
            }

            toast.success('Post added successfully!')
            reloadSession();

            setPost("")
            setTitle("")
        } catch (error:any) {
            toast.error(error?.message)
        }
    }
    
    return (
        <>
        {user ? (
        <div className="bg-second-bg p-2 rounded-lg mb-8">
            <div className="add-post-header flex flex-row gap-4 items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-red-500 relative">
                    <Image src={user?.image as string} fill  alt={user.username + " profile image"} />
                </div>
                <div className="w-full">
                    <Input placeholder="Hi! Create quick post..." styles="text-primary-font bg-transparent border border-third-bg" value={post} onChange={(e)=>setPost(e.target.value)} />
                </div>
            </div>
            <div className="add-post-btn flex flex-row justify-between items-center">
                <div className="add-post-icons text-primary-font flex flex-row gap-2 text-base ml-4">
                    <Icon icon={AiOutlineFileImage}/>
                    <Icon icon={BsEmojiHeartEyes}/>
                </div>
                <Button variant="warning" size="small" disabled={post ? false : true} onClick={onSendPost} >
                    
                    Post
                </Button>
            </div>
        </div>
        ) : "brak"}
        
        </>
        
    )
}

export default CreatePost

