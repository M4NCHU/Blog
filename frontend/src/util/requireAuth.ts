import { NextPageContext } from "next"
import { getSession } from "next-auth/react"

export const requireAuth = async (context: NextPageContext, cb:any) => {
    const session = await getSession(context)

    if(session) {
        return {
          redirect: {
            destination: "/",
            permanent: false,
          }
        }
      }

      return cb({session})
}