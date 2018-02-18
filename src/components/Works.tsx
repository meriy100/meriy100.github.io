import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as FreeStyle from 'free-style'

import WorksListItem from './WorksListItem'

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

var styleElement = document.createElement('style')
styleElement.textContent = style.getStyles()
document.head.appendChild(styleElement)

interface Props {
}

interface State {
  worksListHeight: number;
  top: number;
}

class Works extends React.Component<Props, State> {

  constructor(props:Props) {
    super(props);
    this.state = {worksListHeight: 0, top: 0}
  }


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.setState({worksListHeight: (window.outerHeight/2) - ReactDOM.findDOMNode(this).getBoundingClientRect().top})
    this.setState({top: ReactDOM.findDOMNode(this).getBoundingClientRect().top})
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll(event:any) {
    const newHeight = (window.outerHeight/2) - ReactDOM.findDOMNode(this).getBoundingClientRect().top
    if ((newHeight - this.state.worksListHeight) > 0) {
      this.setState({top: ReactDOM.findDOMNode(this).getBoundingClientRect().top})
      this.setState({
        worksListHeight: newHeight,
      })
    }
  }


  render()  {
    return(
      <article className='col-md-10' style={{marginBottom: '1000px'}}>
        <h1>Works <span>{this.state.worksListHeight}</span></h1>
        <span>Experience</span>
        <span>Education</span>
        <div className={worksListStyle} style={{ height: `${this.state.worksListHeight}px` }}>
          <div className={centerLineStyle}> </div>
          <ul style={{listStyle: "none", padding: 0}}  >
            <WorksListItem top={this.state.top} height={this.state.worksListHeight} klass={'right'} date={'2012/04'} work={'青山学院大学 理工学部情報テクノロジー学科 入学'} />
            <WorksListItem top={this.state.top} height={this.state.worksListHeight} klass={'left'} date={'2015/06 (~2018/03)'} work={'株式会社スタートアップテクノロジー インターン'} />
            <WorksListItem top={this.state.top} height={this.state.worksListHeight} klass={'left'} date={'2015/08'} work={'Life is Tech 夏季キャンプ メンター'} />
            <WorksListItem top={this.state.top} height={this.state.worksListHeight} klass={'right'} date={'2015/12'} work={'Ruby Kaigi 2015 LT'} />
            <WorksListItem top={this.state.top} height={this.state.worksListHeight} klass={'right'} date={'2016/03'} work={'情報処理学会第58回全国大会'} />
            <WorksListItem top={this.state.top} height={this.state.worksListHeight} klass={'right'} date={'2016/03'} work={'青山学院大学 理工学部情報テクノロジー学科 卒業'} />
            <WorksListItem top={this.state.top} height={this.state.worksListHeight} klass={'left'} date={'2016/03 (~2016/03)'} work={'株式会社マネーフォワード インターン'} />
            <WorksListItem top={this.state.top} height={this.state.worksListHeight} klass={'right'} date={'2016/04'} work={'青山学院大学院 理工学研究科 知能情報コース 入学'} />
            <WorksListItem top={this.state.top} height={this.state.worksListHeight} klass={'left'} date={'2016/08'} work={'株式会社クックパッド インターン'} />
            <WorksListItem top={this.state.top} height={this.state.worksListHeight} klass={'left'} date={'2017/02 (~2017/12)'} work={'Terminal-Q 開発業務 '} />
          </ul>
        </div>
      </article>
    )
  }
}

export default Works;