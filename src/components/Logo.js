import React, {Component} from 'react'
import Anime from 'react-anime'

import './Logo.css'

/**
 * Component with beatiful logo animations inside.
 */
export default class Logo extends Component {
  render() {
    return (
      <svg viewBox='0 0 454.2 100.1'>
        <Anime 
          easing='easeInOutSine'
          duration={1500}
          delay={(element, index) => index * 200}
          strokeDashoffset={(element) => {
            const pathLength = element.getTotalLength() || 0
            element.setAttribute('stroke-dasharray', pathLength)
            return [pathLength, 0]
          }}
        >
          <path className='st1' d='M56.4,88V52H12.4v36c0,0.4-0.1,0.7-0.4,1c-0.3,0.3-0.6,0.4-0.9,0.4c-1,0-1.4-0.5-1.4-1.4V13.4c0-1,0.5-1.4,1.4-1.4c0.4,0,0.7,0.1,0.9,0.4c0.3,0.3,0.4,0.6,0.4,1v35.9h44.1V13.4c0-1,0.5-1.4,1.4-1.4c0.9,0,1.4,0.5,1.4,1.4V88c0,1-0.5,1.4-1.4,1.4C56.9,89.5,56.4,89,56.4,88z'/>
          <path className='st1' d='M155.1,89.5h-41.3c-0.9,0-1.3-0.5-1.3-1.4V13.4c0-0.8,0.4-1.3,1.3-1.4h41.3c0.9,0,1.3,0.5,1.3,1.4c0,0.9-0.4,1.4-1.3,1.4h-39.9v34.6h35.1c0.9,0,1.3,0.5,1.3,1.4c0,0.9-0.4,1.4-1.3,1.4h-35.1v34.7h39.9c0.9,0,1.3,0.5,1.3,1.4C156.4,89,156,89.5,155.1,89.5z'/>
          <path className='st1' d='M245.2,89.5h-41.3c-1,0-1.4-0.5-1.4-1.4V13.4c0-1,0.5-1.4,1.4-1.4c0.9,0,1.4,0.5,1.4,1.4v73.3h40c1,0,1.4,0.5,1.4,1.4C246.7,89,246.2,89.5,245.2,89.5z'/>
          <path className='st1' d='M331.9,89.5h-41.3c-1,0-1.4-0.5-1.4-1.4V13.4c0-1,0.5-1.4,1.4-1.4c0.9,0,1.4,0.5,1.4,1.4v73.3h40c1,0,1.4,0.5,1.4,1.4C333.4,89,332.9,89.5,331.9,89.5z'/>
          <path className='st1' d='M407.9,86.5c18.2-0.2,33.5-13.7,36.3-31.5c0.1-0.8,0.8-1.3,1.7-1.4c0.4,0,1.7,0.3,1.6,1.8c-3,19.4-19.4,34.1-39.5,34.1V86.5z M407.9,12.4L407.9,12.4c-20,0-36.5,16.4-36.8,36.9c-0.2,1.5-1.6,1.5-1.6,1.5c-1.5-0.1-1.6-1.3-1.6-1.6c0.4-22,18-39.6,40-39.7h0c22,0,39.6,17.7,40,39.7c0,0.3-0.1,1.5-1.6,1.6c-0.1,0-1.5,0-1.6-1.5C444.4,28.8,427.9,12.4,407.9,12.4z'/>
          <path className='st1' d='M407.9,86.5L407.9,86.5c18.2-0.2,33.5-13.7,36.3-31.5c0.1-0.8,0.8-1.3,1.7-1.4c0.4,0,1.7,0.3,1.6,1.8c-3,19.4-19.4,34.1-39.5,34.1h0c-20.1,0-36.5-14.7-39.5-34.1c-0.2-1.5,1.2-1.8,1.6-1.8c0.8,0,1.6,0.6,1.7,1.4C374.4,72.8,389.7,86.3,407.9,86.5'/>
        </Anime>
   </svg>
    )
  }
}