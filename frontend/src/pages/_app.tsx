import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import type { AppProps } from "next/app";
import { Inter } from 'next/font/google';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={cn(
        inter.className, "flex min-h-screen min-w-full flex-col items-center justify-center gap-10 py-10 lg:py"
      )}>
          <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  )
}
