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
<main>

  <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="media/images/1.jpg" alt="客户至上">
        <div className="container">
          <div className="carousel-caption text-start">
            <h1>链 接</h1>
            <p>因客户而生，客户是一切存在的理由</p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src="media/images/2.jpg" alt="出海迎接未来">
        <div className="container">
          <div className="carousel-caption">
            <h1>出 海</h1>
            <p>杨帆出海，走进每个家庭！</p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src="media/images/3.jpg" alt="合作共进">
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
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
      </svg>
        <h2 className="fw-normal">进取 Passion</h2>
        <p>追求卓越、拒绝平庸</p>
      </div><!-- /.col-lg-4 -->
      <div className="col-lg-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
      </svg>
        <h2 className="fw-normal">担当 Responsibility</h2>
        <p>有德有能，敬业负责</p>
      </div><!-- /.col-lg-4 -->
      <div className="col-lg-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi bi-globe-americas" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
          </svg>
        <h2 className="fw-normal">开放 Open</h2>
        <p>拥抱变化，协作共享</p>
      </div><!-- /.col-lg-4 -->
      <div className="col-lg-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi bi-rocket-takeoff-fill" viewBox="0 0 16 16">
        <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.578 3.578 0 0 0-.108-.563 2.22 2.22 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2.35 2.35 0 0 0-.16-.045 3.797 3.797 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.552 2.552 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526l.24-2.408Zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361.599.599.437 1.732-.36 2.531Z"/>
        <path d="M5.205 10.787a7.632 7.632 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925Z"/>
      </svg>
        <h2 className="fw-normal">创新 Innovation</h2>
        <p>善于创造，敢于突破</p>
      </div><!-- /.col-lg-4 -->
      <div className="col-lg-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi bi-robot" viewBox="0 0 16 16">
        <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>
        <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"/>
      </svg>
        <h2 className="fw-normal">敏捷 Agility</h2>
        <p>客户价值，快速响应</p>
      </div><!-- /.col-lg-4 -->
      <div className="col-lg-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi bi-credit-card-2-back-fill" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0V4zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H0z"/>
</svg>
        <h2 className="fw-normal">诚信 Integrity</h2>
        <p>信达天下，恪守诺言</p>
      </div><!-- /.col-lg-4 -->
    </div><!-- /.row -->


    <!-- START THE FEATURETTES -->

    <hr className="featurette-divider">

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">在广交会，<span className="text-muted">“解锁”跨境电商新生态</span></h2>
        <p className="lead">从最初的贸易出海（产品出海）</p>
        <p>到新时代浪潮形式下的</p>
        <p>制造出海和品牌出海</p>
      </div>
      <div className="col-md-5">
         <img src="media/images/5.webp" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto">
      </div>
    </div>

    <hr className="featurette-divider">

    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1">北海工业产品跨境<span className="text-muted">新机遇</span></h2>
        <p className="lead">北海将抢抓机遇开放发展，建好中国—东盟产业合作区（北海片区）、中国（广西）自由贸易试验区北海协同发展区、铁山港区国家进口贸易促进创新示范区、中国-柬埔寨产业园等开放平台，打造跨境产业链供应链服务集成创新地和大宗商品跨境贸易合作新平台。”广西壮族自治区人大代表，自治区党委委员、北海市委副书记、市长李莉说。</p>
      </div>
      <div className="col-md-5 order-md-1">
                <img src="media/images/6.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto">
      </div>
    </div>

    <hr className="featurette-divider">

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">北海跨境运营就业前景怎么样</span></h2>
        <p className="lead">北海跨境电商发展前景和待遇怎么样?有前途吗?好找工作吗?工资待遇:2024年较2023年下降了29%。</p>
      </div>
      <div className="col-md-5">
                <img src="media/images/7.webp" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto">
      </div>
    </div>
    <hr className="featurette-divider">
    <!-- /END THE FEATURETTES -->
  <div className="p-3 mb-3 bg-black text-white d-flex justify-content-center">跨境运营中心</div>
    <div className="row">
      <div className="col-sm-6 mb-3 mb-sm-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"> <img src="media/images/amz.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"> <span className="badge text-bg-secondary">4</span></h5>
            <p className="card-text">美国最大的一家网络电子商务公司</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 mb-3 mb-sm-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"><img src="media/images/ozon.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"><span className="badge text-bg-secondary">2</span></h5>
            <p className="card-text">俄罗斯的多品类综合B2C电商平台</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 mb-3 mb-sm-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"><img src="media/images/wb.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"> <span className="badge text-bg-secondary">1</span></h5>
            <p className="card-text">俄罗斯本土的鞋服及饰品在线销售平台</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 mb-3 mb-sm-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"><img src="media/images/jumia.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"> <span className="badge text-bg-secondary">1</span></h5>
            <p className="card-text">非洲电子商务巨头</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 mb-3 mb-sm-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"><img src="media/images/spf.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"> <span className="badge text-bg-secondary">1</span></h5>
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
   <hr className="featurette-divider">
  <div className="container col-xxl-10 px-4" id="company">
    <div className="row flex-lg-row-reverse align-items-center g-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="media/images/4.jpeg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
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

  <!-- FOOTER -->
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
            <img src="media/images/wechat.jpg" className="bd-placeholder-img bd-placeholder-img-xs featurette-image img-fluid mx-auto" width="150px">
    </div>
  </footer>
</div>
</main>
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
