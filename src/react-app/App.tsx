// src/App.tsx

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./bootstrap.min.css";
import "./carousel.css";
import "./bootstrap.bundle.min.js";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("unknown");

  return (
    <>
<header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark py-4 shadow">
    <div class="container">
      <a class="navbar-brand text-decoration-none" href="#">链接跨境</a>
      <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" href="/#">首页</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#company">关于我们</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#culture">企业文化</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#contact">联系我们</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#contact">成为供货商</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          aria-label="increment"
        >
          count is {count}
        </button>
        <p>
          Testing Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button
          onClick={() => {
            fetch("/api/")
              .then((res) => res.json() as Promise<{ name: string }>)
              .then((data) => setName(data.name));
          }}
          aria-label="get name"
        >
          NI Name from API is: {name}
        </button>
        <p>
          Edit <code>api/index.ts</code> to change the name
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
