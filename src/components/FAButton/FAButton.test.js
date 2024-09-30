import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FAButton from './FAButton';

describe('FAButton Component', () => {
    test('renders FAButton with provided text', () => {
        const btnText = 'Click Me';
        render(<FAButton btnText={btnText} width="100px" height="40px" onClick={() => {}} />);
        
        const buttonElement = screen.getByText(btnText);
        expect(buttonElement).toBeInTheDocument(); 
    });

    test('calls onClick when the button is clicked', () => {
        const handleClick = jest.fn(); 
        render(<FAButton btnText="Click Me" width="100px" height="40px" onClick={handleClick} />);
        
        const buttonElement = screen.getByText('Click Me');
        fireEvent.click(buttonElement);
        
        expect(handleClick).toHaveBeenCalled();
    });
});
