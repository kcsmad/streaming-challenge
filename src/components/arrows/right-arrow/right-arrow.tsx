import React from 'react';

const RightArrowSVG = require('./right-arrow.svg') as string

type RightArrowProps = {
  className?: string,
  callback?: Function,
}

const RightArrowComponent = ({ className, callback }: RightArrowProps) => (
  <div
    data-testid='right-arrow-component'
    className={` ${className ? className : null}`}
    onClick={() => { if (callback) { callback() }}}
  >
    <img alt='123' className='' src={RightArrowSVG} />
  </div>
)

export default RightArrowComponent;
