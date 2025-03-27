// src/App.tsx

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./bootstrap.min.css";
import "./carousel.css";
import "./bootstrap.bundle.min.js";
import images1 from "media/images/1.jpg";
import amz from "media/images/amz.png";

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
  <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={images1} alt="客户至上" />
        <div className="container">
          <div className="carousel-caption text-start">
            <h1>链 接</h1>
            <p>因客户而生，客户是一切存在的理由</p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src={images1} alt="出海迎接未来" />
        <div className="container">
          <div className="carousel-caption">
            <h1>出 海</h1>
            <p>杨帆出海，走进每个家庭！</p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src={images1} alt="合作共进" />
        <div className="container">
          <div className="carousel-caption text-end">
            <h1>合 作</h1>
            <p>携手共度未来。</p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  
  <div className="container marketing"  id="culture">
    <div className="d-flex justify-content-center">
            <h1>核心价值观</h1>
    </div>
    <!-- Three columns of text below the carousel -->
    <div className="row">
      <div className="col-lg-4">

        <h2 className="fw-normal">进取 Passion</h2>
        <p>追求卓越、拒绝平庸</p>
      </div>
      <div className="col-lg-4">

        <h2 className="fw-normal">担当 Responsibility</h2>
        <p>有德有能，敬业负责</p>
      </div>
      <div className="col-lg-4">
        <h2 className="fw-normal">开放 Open</h2>
        <p>拥抱变化，协作共享</p>
      </div>
        <h2 className="fw-normal">创新 Innovation</h2>
        <p>善于创造，敢于突破</p>
      </div>
        <h2 className="fw-normal">敏捷 Agility</h2>
        <p>客户价值，快速响应</p>
      </div>
      <div className="col-lg-4">
        <h2 className="fw-normal">诚信 Integrity</h2>
        <p>信达天下，恪守诺言</p>
      </div>
    </div>


    <div className="featurette-divider">    </div>

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">在广交会，<span className="text-muted">“解锁”跨境电商新生态</span></h2>
        <p className="lead">从最初的贸易出海（产品出海）</p>
        <p>到新时代浪潮形式下的</p>
        <p>制造出海和品牌出海</p>
      </div>
      <div className="col-md-5">
         <img src={images1} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
      </div>
    </div>

    <div className="featurette-divider"> </div>

    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1">北海工业产品跨境<span className="text-muted">新机遇</span></h2>
        <p className="lead">北海将抢抓机遇开放发展，建好中国—东盟产业合作区（北海片区）、中国（广西）自由贸易试验区北海协同发展区、铁山港区国家进口贸易促进创新示范区、中国-柬埔寨产业园等开放平台，打造跨境产业链供应链服务集成创新地和大宗商品跨境贸易合作新平台。”广西壮族自治区人大代表，自治区党委委员、北海市委副书记、市长李莉说。</p>
      </div>
      <div className="col-md-5 order-md-1">
                <img src={images1} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
      </div>
    </div>


    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">北海跨境运营就业前景怎么样</span></h2>
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
            <h5 className="card-title"> <img src={amz} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" /> <span className="badge text-bg-secondary">4</span></h5>
            <p className="card-text">美国最大的一家网络电子商务公司</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 mb-3 mb-sm-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"><img src={amz} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" /><span className="badge text-bg-secondary">2</span></h5>
            <p className="card-text">俄罗斯的多品类综合B2C电商平台</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 mb-3 mb-sm-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"><img src={amz} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" /> <span className="badge text-bg-secondary">1</span></h5>
            <p className="card-text">俄罗斯本土的鞋服及饰品在线销售平台</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 mb-3 mb-sm-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"><img src={amz} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" /> <span className="badge text-bg-secondary">1</span></h5>
            <p className="card-text">非洲电子商务巨头</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 mb-3 mb-sm-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"><img src={amz} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" /> <span className="badge text-bg-secondary">1</span></h5>
            <p className="card-text">一站式SaaS模式的电商服务平台</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 mb-3 mb-sm-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">正在加入更多... <span className="badge text-bg-secondary">0</span></h5>
            <p className="card-text">跨境出海选链接跳动</p>
          </div>
        </div>
      </div>
    </div>
  <div className="container col-xxl-10 px-4" id="company">
    <div className="row flex-lg-row-reverse align-items-center g-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={amz} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
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
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div className="col mb-3">
      <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
        <h5>LINK DANCE</h5>
      </a>
      <p>北海链接跳动科技有限公司成立于2023年，是一家有温暖的铺货公司，面向俄欧美东南亚消费者的跨境出口电商企业。</p>
      <p className="text-muted">© 2024 LINK DANCE All rights reserved.</p>
      <p><a target="_blank" href="https://beian.miit.gov.cn">桂ICP备2023015998号-2</a> </p>
    </div>

    <div className="col mb-3">
    </div>
    <div className="col mb-3">
      <h5>网站导航</h5>
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
            <img src="media/images/wechat.jpg" className="bd-placeholder-img bd-placeholder-img-xs featurette-image img-fluid mx-auto" width="150px" />
    </div>
  </footer>
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
