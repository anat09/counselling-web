import { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'

import { BlogNavbar } from '../navbar'
import SearchContext from 'contexts/search';


interface LayoutProps {
  children: React.ReactNode
}

export function BlogLayout({ children }: LayoutProps) {
  const [ searchQuery, setSearchQuery ] = useState<string | null>(null);
  return (
    <div data-them="mytheme">
      <Head>
        <title>AT Counselling Services</title>
        <meta
          name="description"
          content="Online and in-person counselling and psychotherapy services with Anamaria Tigan in Greater Manchester and Cheshire."
        />
      </Head>
      <main className="flex flex-col items-center bg-white min-h-screen">
      <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
	      <div className="w-full max-w-6xl flex-grow my-2 flex flex-col justify-between">
          <BlogNavbar />
          {children}
          <Footer />
        </div>
        </SearchContext.Provider>
      </main>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="text-coolwhite flex flex-wrap font-lato font-bold text-2xl py-4 justify-around bg-primaryLight rounded-xl">
      <div className="m-2">
        <Link href='/privacy#header'>Privacy</Link>
      </div>
      <div className="m-2">
        <Link href='/disclaimer#header'>Disclaimer</Link>
      </div>
      <div className="m-2">
        <Link href='/romana#header'>În Limba Română</Link>
      </div>
    </div>
  )
}