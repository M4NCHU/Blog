import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react"
import { ApolloProvider } from '@apollo/client';
import { client } from "../graphql/apollo-client"


const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps:{session, ...pageProps} }: AppProps) {

  
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ApolloProvider>
  )
}
