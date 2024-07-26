import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img
        src="https://play.tailwindcss.com/img/beams.jpg"
        alt=""
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        width="1308"
      />
      <div className="absolute inset-0 bg-[url(./assets/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="card m-4 w-80 shadow-xl">
        <figure className="h-[160px] opacity-[0.3] hover:opacity-[0.4]">
          <img src="https://picsum.photos/id/103/500/250" />
        </figure>
        <div className="absolute flex w-full justify-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div className="card-body">
          <h2 className="card-title">Vite + React + Tailwindcss</h2>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p className="text-left">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
          <p className="text-left text-[#888]">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
