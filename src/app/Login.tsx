"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import { UserCard } from "./userCard";


export default function Login() {

    const { data: session, status } = useSession();

    return (
        <div>
            {session && status === "authenticated" ?
                (
                    <>
                        <h3>Login Successfully.</h3>
                        <UserCard user={session?.user} />
                        <br /><br />
                        <button onClick={() => signOut()} type="button" className="btn btn-primary">Sign Out</button>
                    </>
                )
                :
                (
                    <>
                        <h3>Login</h3>
                        <button onClick={() => signIn()} type="button" className="btn btn-primary">Sign In</button>
                    </>
                )
            }
        </div>
    )

}