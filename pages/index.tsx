// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CryptoTracker from "../components/CryptoTracker";


// const inter = Inter({ subsets: ['latin'] })
const queryClient = new QueryClient();

export default function Home() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <div className='text-center text-3xl my-5'>Bitcoin Price</div>
        <CryptoTracker cryptoName="bitcoin" />
      {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </div>
  )
}
