import Image from "next/image";
import type { NextPage } from "next";

import Layout from "../lib/components/layout";

interface SharePageProps {}

const Share: NextPage<SharePageProps> = () => {
  return (
    <Layout withHeader>
      <Image src="/qrcode.png" height={300} width={300} alt="qrcode" />
    </Layout>
  );
};

//

export default Share;
