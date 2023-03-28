import Button from "@/components/Button";
import userOperations from "@/graphql/operations/user";
import { reloadSession } from "@/util/refreshSession";
import { CreateUsernameData, CreateUsernameVariables } from "@/util/types";
import { useMutation } from "@apollo/client";
import { GraphQLError } from "graphql";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-hot-toast";



interface ChangeUsernameProps {
    
}



const ChangeUsername:React.FC<ChangeUsernameProps> = () => {
    const {data: session} = useSession();
    
    const [username, setUsername] = useState(session?.user.username ? session?.user.username : "");
    const [createUsername, {loading,error}] = useMutation<CreateUsernameData, CreateUsernameVariables>(userOperations.Mutations.createUsername)
    const disabledBtn = loading || username === session?.user.username || username === ""

    const onSubmit = async () => {

    if (!username) return
    if (username === session?.user.username) return
        
    try {
        const {data} = await createUsername({variables: {username}})

        if (!data?.createUsername) {
            throw new Error()
        }

        if (username.length < 4) {
            throw new Error("Username length should be at least 4 characters");
        }
        
        

        if (data.createUsername.error) {
            const {
                createUsername: {error},
            } = data
            throw new Error(error)
        }
        
        toast.success(`Username successfully changed to ${username}!`)
        reloadSession();
        
    } catch (error:any) {
        console.log(error?.message)
        toast.error(error?.message)
    }
    }
    
    return (
        <>
        {session ? (
        <>
        
            <div className="change-username flex flex-col">
                <div className="text-primary-font py-2 mb-2">
                    <h2>Change username</h2>
                </div>
                
                <input placeholder="Change username" className="Header-input text-primary-font bg-third-bg focus:ring-2 focus:ring-third-bg font-medium rounded-lg text-sm pl-10 pr-2 py-2.5 focus:outline-none mb-2" value={username} onChange={(e)=>setUsername(e.target.value)}/>


                
                <Button variant="warning" size="small" disabled={disabledBtn} onClick={onSubmit} loading={loading} >
                    Save
                </Button>
                
            </div>
        </>
            
        ) : console.log("nic")}
        </>
       
    )
}

export default ChangeUsername

