import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as FreeStyle from 'free-style'


import * as Variables from '../Variables'

var style = FreeStyle.create();
var worksListStyle = style.registerStyle({
  position: 'relative',
  borderTop: '1px solid',
  borderColor: Variables.blackColor,
})
var centerLineStyle = style.registerStyle({
  position: 'absolute',
  width: '50%',
  borderRight: '1px solid',
  borderColor: Variables.blackColor,
  marginRight: '50%',
  height: '100%',
})

var worksListItemStyle = style.registerStyle({
  width: '50%',
  padding: '16px',
  position: 'relative',
  transition: 'all 300ms 0s ease',
  '&:after' : {
    borderBottom: '1px solid',
    borderColor: Variables.blackColor,
    transition: 'all 300ms 0s ease',
    height: '100%',
    content: `''`,
    top: 0,
    left: 0,
    width: '1px',
    position: 'absolute',
  },
  '&:hover' : {
    '&:after' : {
      width: '100%',
    },
  },
  '&.left': {
    // paddingRight: '8px',
    '&:after' : {
      right: 0,
      left: 'auto',
    }
  },
  '&.right': {
    // paddingLeft: '8px',
    marginLeft: '50%',
  },
})

var styleElement = document.createElement('style')
styleElement.textContent = style.getStyles()
document.head.appendChild(styleElement)

interface Props {
}

interface State {
  worksListHeight: number;
}

class WorksListItem extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = { display: 'none' }
  }

  render():JSX.Element {
    return (
      <li className={`${worksListItemStyle} right`} style={(this.props.bottom > 1) ? { visibility: 'visible',  opacity: 1} : { visibility: 'hidden',  opacity: 0 } }>
        <span>2012/04</span>
        <p>青山学院大学 理工学部情報テクノロジー学科 入学</p>
      </li>
    )
  }
}

class Works extends React.Component<Props, State> {

  constructor(props:Props) {
    super(props);
    this.state = {worksListHeight: 0}
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll(event:any) {
    console.log(ReactDOM.findDOMNode(this).getBoundingClientRect().top)
    console.log(window.pageYOffset)
    console.log(ReactDOM.findDOMNode(this).getBoundingClientRect().top + window.pageYOffset)
    if ((window.outerHeight - ReactDOM.findDOMNode(this).getBoundingClientRect().top - 200 -  this.state.worksListHeight) > 0) {
      this.setState({
        worksListHeight: window.outerHeight - ReactDOM.findDOMNode(this).getBoundingClientRect().top - 200,
      })
    }
  }


  render()  {
    return(
      <article className='col-md-10' style={{marginBottom: '300px'}}>
        <h1>Works</h1>
        <div className={worksListStyle} style={{ height: `${this.state.worksListHeight}px` }}>
          <div className={centerLineStyle}> </div>
          <ul style={{listStyle: "none", padding: 0}}  >
            <WorksListItem bottom={this.state.worksListHeight} />
            <li className={`${worksListItemStyle} left`}>
              <span>2015/06 (~2018/03)</span>
              <p>株式会社スタートアップテクノロジー インターン</p>
            </li>
            <li className={`${worksListItemStyle} left`}>
              <span>2015/08</span>
              <p>Life is Tech 夏季キャンプ メンター</p>
            </li>
            <li className={`${worksListItemStyle} right`}>
              <span>2015/12</span>
              <p>Ruby Kaigi 2015 LT</p>
            </li>
            <li className={`${worksListItemStyle} right`}>
              <span>2016/03</span>
              <p>情報処理学会第58回全国大会</p>
            </li>
            <li className={`${worksListItemStyle} right`}>
              <span>2016/03</span>
              <p>青山学院大学 理工学部情報テクノロジー学科 卒業</p>
            </li>
            <li className={`${worksListItemStyle} left`}>
              <span>2016/03 (~2016/03)</span>
              <p>株式会社マネーフォワード インターン</p>
            </li>
            <li className={`${worksListItemStyle} right`}>
              <span>2016/04</span>
              <p>青山学院大学院 理工学研究科 知能情報コース 入学</p>
            </li>
            <li className={`${worksListItemStyle} left`}>
              <span>2016/08</span>
              <p>株式会社クックパッド インターン</p>
            </li>
            <li className={`${worksListItemStyle} left`}>
              <span>2017/02 (~2017/12)</span>
              <p>Terminal-Q 開発業務 </p>
            </li>
          </ul>
        </div>
      </article>
    )
  }
}

export default Works;