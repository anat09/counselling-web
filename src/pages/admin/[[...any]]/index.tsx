import { ReactElement } from "react";
import dynamic from "next/dynamic";

const CMSWithNoSSR = dynamic(() => import("components/cms/CMS"), {
  ssr: false,
})

const Admin = () => { return <CMSWithNoSSR />; }

export default Admin;

Admin.getLayout = (page: ReactElement) => { return page; }