// import Sidebar from "@/sidebar/page";  to be added later
import Attachments from "./attachments/page";
import Header from "./header/page";
import Hero from "./hero/page";
import Navbar from "./navbar/pages";
import Sidebar from "./sidebar/page";

export default function Home() {
  return (
    <main className="flex h-full">
      <div className="h-[100vh]">
        <Sidebar/>
      </div>
      <div>
        <Navbar/>
        <Header/>
        <div className="flex h-[80vh]">
          <div className="w-4/5">
            <Hero/>
          </div>
          <div className="w-1/5">
            <Attachments/>
          </div>
        </div>
      </div>
    </main>
  );
}
