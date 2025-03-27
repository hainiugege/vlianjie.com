// src/App.tsx

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./bootstrap.min.css";
import "./carousel.css";
import "./bootstrap.bundle.min.js";
import images1 from "./images/1.jpg";

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



    <div className="row featurette">
      <div className="col-md-7">
        <h1 className="featurette-heading fw-normal lh-1">北海跨境运营就业前景怎么样</h1>
        <p className="lead">北海跨境电商发展前景和待遇怎么样?有前途吗?好找工作吗?工资待遇:2024年较2023年下降了29%。</p>
      </div>
      <div className="col-md-5">
                <img src={images1} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
      </div>
    </div>
  <div className="p-3 mb-3 bg-black text-white d-flex justify-content-center">跨境运营中心</div>
    <div className="row">
      <div className="col-sm-6 mb-3 mb-sm-3">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title"> <img src={amz} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" /> <span className="badge text-bg-secondary">4</span></h1>
            <p className="card-text">美国最大的一家网络电子商务公司</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 mb-3 mb-sm-3">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title"><img src={amz} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" /><span className="badge text-bg-secondary">2</span></h1>
            <p className="card-text">俄罗斯的多品类综合B2C电商平台</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 mb-3 mb-sm-3">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title"><img src={amz} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" /> <span className="badge text-bg-secondary">1</span></h1>
            <p className="card-text">俄罗斯本土的鞋服及饰品在线销售平台</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 mb-3 mb-sm-3">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title"><img src={amz} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" /> <span className="badge text-bg-secondary">1</span></h1>
            <p className="card-text">非洲电子商务巨头</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 mb-3 mb-sm-3">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title"><img src={amz} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" /> <span className="badge text-bg-secondary">1</span></h1>
            <p className="card-text">一站式SaaS模式的电商服务平台</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 mb-3 mb-sm-3">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">正在加入更多... <span className="badge text-bg-secondary">0</span></h1>
            <p className="card-text">跨境出海选链接跳动</p>
          </div>
        </div>
      </div>
    </div>
  <div className="container col-xxl-10 px-4" id="company">
    <div className="row flex-lg-row-reverse align-items-center g-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={images1} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div className="col-lg-6">
        <h1 className="display-8 fw-bold lh-1 mb-3">链接跳动科技有限公司</h1>
        <h3>Beihai LinkDance Technology Co., Ltd</h3>
        <p className="lead">链接跳动成立于2023年，是一家有温暖的铺货公司，面向俄欧美东南亚消费者的跨境出口电商企业。</p><p>长期以来，链接跳动秉持进取、担当、开放、创新、敏捷的核心价值观，不断进行内部革新，凭借产品、服务、海外仓、自有品牌和独立站技术等方面的优势，拥有了成熟的全球仓储、营销、物流及售后体系。</p><p>链接跳动正不断加快和加强海内外布局，让产品走进每个家庭，让生活变得更便捷！</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">我要供货</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">成为员工</button>
        </div>
      </div>
    </div>
  </div>


      
<div className="container" id="contact">
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div className="col mb-3">
      <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
        <h1>LINK DANCE</h1>
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
      <h1>联系我们</h1>
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
