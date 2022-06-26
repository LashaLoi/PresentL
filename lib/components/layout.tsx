import Head from "next/head";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
  withHeader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, withHeader = false }) => (
  <div className="absolute">
    <Head>
      <title>PresentL</title>
      <meta name="description" content="App for shared presentations" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {withHeader && <Header />}

    <main className="min-h-screen w-screen flex-1 flex flex-col items-center justify-center relative">
      {children}
    </main>

    <footer className="flex flex-1 py-6 border-t-2 border-gray-200 items-center justify-center">
      <a
        href="https://t.me/SideswipeLoi"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center flex-grow text-gray-500 font-bold"
      >
        Created by <span className="ml-1 text-blue-300"> @SideswipeLoi</span>
      </a>
    </footer>
  </div>
);

export default Layout;
