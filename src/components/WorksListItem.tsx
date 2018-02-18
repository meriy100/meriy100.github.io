import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as FreeStyle from 'free-style'


import * as Variables from '../Variables'

var style = FreeStyle.create();

var worksListItemStyle = style.registerStyle({
  width: '50%',
  padding: '16px',
  position: 'relative',
  transition: 'all 300ms 0s ease',
  p : {
    marginBottom: 0,
  },
  '&:after' : {
    borderBottom: '1px solid',
    borderColor: Variables.blackColor,
    transition: 'all 500ms 0s ease',
    height: '100%',
    content: `''`,
    top: 0,
    left: 0,
    width: '1px',
    position: 'absolute',
  },
  '&.unvisible' : {
    visibility: 'hidden',  
    opacity: 0, 
    '&:after' : {
      width: '1px',
    },
  },
  '&.visible' : {
    visibility: 'visible',  
    opacity: 1,
    '&:after' : {
      width: '100%',
    },
  },
  '&.left': {
    // paddingRight: '8px',
    textAlign: 'right',
    '&:after' : {
      right: 0,
      left: 'auto',
    }
  },
  '&.center' : {
    textAlign: 'center',
    width: '100%',
    '&:after' : {
      border: '0',
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
  top: number,
  height: number,
  klass: string,
  date: string,
  work: string,
}

interface State {
  top: number,
}


class WorksListItem extends React.Component<Props, State> {
  relativeTop = 0;
  height = 0;
  constructor(props:Props) {
    super(props);
    this.state = { top: 0 }
  }

  componentDidMount(){
   this.relativeTop = ReactDOM.findDOMNode(this).getBoundingClientRect().top - this.props.top
   this.height = ReactDOM.findDOMNode(this).getBoundingClientRect().height
  } 
  componentDidUpdate(){
   this.relativeTop = ReactDOM.findDOMNode(this).getBoundingClientRect().top - this.props.top
  } 

  render():JSX.Element {
    let visible = (this.props.height > this.relativeTop + this.height) ? 'visible' : 'unvisible'
    return (
      <li className={`${worksListItemStyle} ${this.props.klass} ${visible}`} >
        <span>{this.props.date}</span>
        <p>{this.props.work}</p>
      </li>
    )
  }
}


export default WorksListItem