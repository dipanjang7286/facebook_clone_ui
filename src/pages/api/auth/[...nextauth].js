import NextAuth from "next-auth"
import FcaebookProvider from "next-auth/providers/facebook"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        // FcaebookProvider({
        //     clientId: process.env.FACEBOOK_CLIENT_ID,
        //     clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        // }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
}

export default NextAuth(authOptions)