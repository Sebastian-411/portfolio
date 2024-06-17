import { RefProvider } from "../context/RefContext";
import Content from "./components/Content";
import Header from "./components/Header";

function Home() {
  return (
    <RefProvider>
      <div className="bg-zinc-200">
        <Header />
        <Content />
      </div>
    </RefProvider>
  );
}

export default Home;
