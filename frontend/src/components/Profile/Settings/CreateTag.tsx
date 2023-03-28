import Button from "@/components/Button";
import userOperations from "@/graphql/operations/tag";
import { reloadSession } from "@/util/refreshSession";
import { CreateTagArguments, CreateTagVariables } from "@/util/types";
import { useMutation } from "@apollo/client";
import  ObjectID  from 'bson-objectid';
import { GraphQLError } from "graphql";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineLoading } from "react-icons/ai";



interface CreateTagProps {
    
}



const CreateTag:React.FC<CreateTagProps> = () => {
    const {data: session} = useSession();
    
    const [tagName, setTag] = useState("");
    const [createTag, {loading,error}] = useMutation<CreateTagArguments, CreateTagVariables>(userOperations.Mutation.createTag)
    const disabledBtn = loading || tagName === ""
    const inputLength  = 2

    const onSubmit = async () => {
    
        
        try {


            
            if (tagName.length < inputLength) {
            throw new Error(`Tag length should be at least ${inputLength} characters`);
        }

            var objectId = new ObjectID().toString();
            const {data} = await createTag({variables: {
                id: objectId,
                tagName,
            }})
            
            if (!data?.createTag) {
                throw new Error("No data")
            }
            

        
        
        toast.success(`Tag ${tagName} successfully created!`)
        setTag("")
        reloadSession();
        
    } catch (error:any) {
        toast.error(error?.message)
        return error?.message
    }
    }
    
    
    return (
        <>
        {session ? (
        <>
        
            <div className="flex flex-col">
                <div className="text-primary-font py-2 mb-2">
                    <h2>Create Tag</h2>
                </div>
                
                <input placeholder="Create tag" className="Header-input text-primary-font bg-third-bg focus:ring-2 focus:ring-third-bg font-medium rounded-lg text-sm pl-10 pr-2 py-2.5 focus:outline-none mb-2" value={tagName} onChange={(e)=>setTag(e.target.value)}/>

                <Button variant="warning" size="small" disabled={disabledBtn} onClick={onSubmit} loading={loading} >
                    Save
                </Button>

                
            </div>
        </>
            
        ) : console.log("nic")}
        </>
       
    )
}

export default CreateTag

