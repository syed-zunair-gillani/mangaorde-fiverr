import LeftNav from "@/components/LeftNav";
import Main from "@/components/Main";
import RightNav from "@/components/RightNav";

export default function Home() {
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
