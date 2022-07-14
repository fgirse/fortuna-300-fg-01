/* eslint-disable prettier/prettier */
import { useSession, signIn, signOut } from "next-auth/react"
export default function Component() {  
    const { data: session } = useSession()
  if (session) {    
    return (     
         <>   
         <p className="text-lime-400">
         Signed in as {session.user.email}</p> <br />
                 <button className="border rounded-xl w-48 text-white text-[1.5rem] bg-sky-600 hover:bg-amber-500" onClick={() => signOut()}>Sign out</button>
                       </> 
                          )  }
  return (
        <>  
        <p className="text-lime-400">Not signed in</p><br />
            
                  <button className="border rounded-xl w-48 text-white text-[1.5rem] bg-sky-600 hover:bg-amber-500" onClick={() => signIn()}>Sign in</button>
                      </> 
    )}