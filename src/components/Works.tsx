import * as React from 'react'
// import * as ReactDOM from 'react-dom'
import * as FreeStyle from 'free-style'


// import * as Variables from '../Variables'
import WorksList from './WorksList';

var style = FreeStyle.create();

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
      <article className='col-md-10' style={{paddingBottom: this.state.windowHeight}}>
        <h1>Works </h1>
        <span>Experience</span>
        <span>Education</span>
        <WorksList />
      </article>
    )
  }
}

export default Works;