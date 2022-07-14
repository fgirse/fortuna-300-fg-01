/* eslint-disable prettier/prettier */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable prettier/prettier */
import EmailProvider from "next-auth/providers/email";
import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "./lib/mongodb"
import { Slideshow } from "@material-ui/icons";


export default NextAuth  ({

    
    
    providers: [
            EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD,
                }
            },
            from: process.env.EMAIL_FROM,
            }),
        
        ],
        adapter: MongoDBAdapter(clientPromise),
        secret: process.env.SECRET,

})