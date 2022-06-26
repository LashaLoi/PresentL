import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <title>PresentL</title>
      <meta name="description" content="App for shared presentations" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="h-screen w-screen flex-1 flex flex-col items-center justify-center">
      {children}
    </main>

    <footer className="flex flex-1 py-6 border-t-2 border-gray-100 items-center justify-center">
      <a
        href="https://t.me/SideswipeLoi"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center flex-grow"
      >
        Created by <span className="ml-1 text-blue-300"> @SideswipeLoi</span>
      </a>
    </footer>
  </>
);

export default Layout;
