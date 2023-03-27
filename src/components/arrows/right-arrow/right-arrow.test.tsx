import React from 'react';
import { render, screen } from "@testing-library/react";

import RightArrowComponent from './right-arrow';

describe('Right Arrow Component', () => {
  it('should render without error', () => {
    render(<RightArrowComponent />)
    const component = screen.getByTestId('right-arrow-component')
    expect(component).toBeTruthy()
  })
})
