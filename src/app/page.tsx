import LeftNav from "@/components/LeftNav";
import Main from "@/components/Main";
import RightNav from "@/components/RightNav";
import { client } from "../../sanity/lib/client";
import { QBooks } from "../../sanity/query";



export default async function Home() {
  // const genres = books.map((item:any)=>item.category)

  return (
    <>
      <div id="app">
        <div className="main">
          <LeftNav/>
          <RightNav/>
          <Main/>
        </div>
      </div>
    </>
  );
}
