import * as React from 'react'
// import * as ReactDOM from 're.act-dom'
import * as FreeStyle from 'free-style'


import * as Variables from '../Variables'
import Works from './Works';

var style = FreeStyle.create();

var headerStyle = style.registerStyle({
  color: Variables.pureWhiteColor,
  backgroundImage: 'url("imgs/homeHeader.jpg")',
  width: "100%",
  height: "620px",
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all', // 'ms' is the only lowercase vendor prefix
  backgroundSize: "cover",
  marginBottom: '',
  '&:before' : {
      content: `''`,
      background: 'rgba(44,62,79,0.5)',
      position: 'absolute',
      height : '620px',
      width : '100%',
  }, 

  '@media (max-width: 575.98px)' : {
    // height: "100vh",
    height: "100%",
  }
});

var titleStyle = style.registerStyle({
  position: 'relative',
  textAlign: 'center',
  paddingTop:  '160px',
  'h1' : {
    fontSize: '3.2rem',
  },
  'p' : {
    fontSize: '2rem',
  }
})

var aboutStyle = style.registerStyle({
  'h2' : {
    fontSize: '30px',
  },
  'p' : {
    fontSize: '16px',
    lineHeight: '28px',
    margin: '0',
  }
})

var contactStyle = style.registerStyle({
  position: 'absolute', 
  bottom: '0',
  '@media (max-width: 767.98px)' : {
    position: 'relative',
    top: '0',
    bottom: 'auto',
  },
  'h2' : {
    fontSize: '28px',
  },
  p : {
    fontSize: '14px',
    lineHeight: '20px',
    margin: '0',
    i : {
    },
    a : {
      marginLeft: '4px',
      color: Variables.pureWhiteColor,
    },
    span : {
      marginLeft: '4px',
    }
  }
})

var styleElement = document.createElement('style')
styleElement.textContent = style.getStyles()
document.head.appendChild(styleElement)

const Header = () => (
  <div className={headerStyle}> 
    <div className={titleStyle}>
      <h1>Kouta Kariyado</h1>
      <p>meriy100</p>
    </div>
    <div className='row' style={{ margin: 0 }}>
      <article className={`col-lg-7 offset-md-1 col-md-6 ${aboutStyle}`}>
        <h2>About</h2>
        <p>大学4年からエンジニアとして活動</p>
        <p>主に Web 開発をやっています</p>
        <p>学部の研究は Rails の国際化改善</p>
        <p>修士ではソースコードの問題箇所検出を行いました</p>
        <p>2018年度より新社会人となります. よろしくおねがいします</p>
      </article>
      <div className={`col-lg-4 col-md-5`}>
        <address className={contactStyle} >
          <h2>Contact</h2>
          <p><i className="fas fa-envelope"/><span>ttattataa@gmail.com</span></p>
          <p><i className="fab fa-github"/><a href='https://github.com/meriy100'> https://github.com/meriy100</a></p>
          <p><i className='fas fa-search'/><a href='https://qiita.com/meriy100'>https://qiita.com/meriy100</a></p>
          <p><i className="fab fa-facebook"/><a href='https://www.facebook.com/kouta.kariyadon'>https://www.facebook.com/kouta.kariyadon</a></p>
        </address>
      </div>
    </div>
  </div>
)



class Home extends React.Component<{}, {}> {
  render() {
      return (
        <div>
          <Header />
          <div className='row'>
            <Works  />
          </div>
        </div>
      )
  }
}

export default Home;