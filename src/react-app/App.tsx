// src/App.tsx

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./bootstrap.min.css";
import "./carousel.css";
import "./bootstrap.bundle.min.js";
import images1 from "media/images/1.jpg";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("unknown");

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark py-4 shadow">
        <div className="container">
          <a className="navbar-brand text-decoration-none" href="/#">链接跨境</a>
          <button className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" href="/#">首页</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#company">关于我们</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#culture">企业文化</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#contact">联系我们</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#contact">成为供货商</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
<div className="container" id="contact">
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div className="col mb-3">
      <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
        <h5>LINK DANCE</h5>
      </a>
      <p>北海链接跳动科技有限公司成立于2023年，是一家有温暖的铺货公司，面向俄欧美东南亚消费者的跨境出口电商企业。</p>
      <p className="text-muted"> 2024 LINK DANCE All rights reserved.</p>
      <p><a target="_blank" href="https://beian.miit.gov.cn">桂ICP备2023015998号-2</a> </p>
    </div>

    <div className="col mb-3">
    </div>
    <div className="col mb-3">
      <h1>网站导航</h1>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">关于我们</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">企业文化</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">加入我们</a></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5>联系我们</h5>
            <p>地址：北海市四川路文邦大厦22层</p>
            <p>电话：0779-000000</p>
            <p>Email: <a href="mailto: ceo@vlianjie.com">ceo@vlianjie.com</a></p>
            <img src={images1} className="bd-placeholder-img bd-placeholder-img-xs featurette-image img-fluid mx-auto" width="150px" />
    </div>
  </div>
</div>
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
