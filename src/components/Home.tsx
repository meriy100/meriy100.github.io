import * as React from 'react'

import * as Variables from '../Variables'

var headerStyle = {
  color: Variables.whiteColor,
  backgroundImage: 'url("imgs/homeHeader.jpg")',
  width: "100%",
  height: "620px",
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all', // 'ms' is the only lowercase vendor prefix
  backgroundSize: "cover",
  grass: {
    backgroundColor: Variables.blackColor,
    opacity: 0.6,  
    width: "100%",
    height: "100%",
  }
};


const Header = () => (
  <div style={headerStyle}> 
    <div style={headerStyle.grass}>
      <h1>Kouta Kariyado</h1>
      <p>meriy100</p>
      <h2>About</h2>
      <p>大学4年からエンジニアとして活動</p>
      <p>主に Web 開発をやっています</p>
      <p>学部の研究は Rails の国際化改善</p>
      <p>修士ではソースコードの問題箇所検出を行いました</p>
      <p>2018年度より新社会人となります.  よろしくおねがいします</p>
      <h2>Contact</h2>
      <p>○ ttattataa@gmail.com</p>
      <p>○ https://github.com/meriy100</p>
      <p>○ https://qiita.com/meriy100</p>
      <p>○ https://www.facebook.com/kouta.kariyadon</p>
    </div>
  </div>
)



const Home = () => (
  <div>
    <Header />
  </div>
);

export default Home;