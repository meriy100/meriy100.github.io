import * as React from 'react'
// import * as ReactDOM from 'react-dom'
import * as FreeStyle from 'free-style'


import * as Variables from '../Variables'
import WorksList from './WorksList';

var style = FreeStyle.create();

let listTitleStyle =  style.registerStyle({
  width: '50%',
  padding: '16px',
  display: 'inline-block',
  fontSize: '28px',
  '&.left': {
    textAlign: 'right',
    borderRight: '3px solid ',
    borderColor: Variables.blackColor,
  },
  '&.right': {
  },
})
 
var styleElement = document.createElement('style')
styleElement.textContent = style.getStyles()
document.head.appendChild(styleElement)

interface Props {
}

interface State {
  windowHeight: number;
}

class Works extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props)
    this.state = { windowHeight: 0 }
  }
  componentDidMount () {
    this.setState({windowHeight: window.outerHeight/2})
  } 
  render()  {
    return(
      <article className='col-md-8 offset-md-1' style={{paddingTop: '64px', paddingBottom: this.state.windowHeight}}>
        <h1>Works </h1>
        <div className={`${listTitleStyle} left`}>Experience</div>
        <div className={`${listTitleStyle} right`}>Education</div>
        <WorksList />
      </article>
    )
  }
}

export default Works;