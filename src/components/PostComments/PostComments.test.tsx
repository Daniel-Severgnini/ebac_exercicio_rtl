import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';

describe('Teste para o componente PostComments', () => {
    it('Deve inserir dois comentários corretamente', () => {
        render(<Post />);

        const commentInput = screen.getByTestId('comment-input');
        const submitButton = screen.getByTestId('submit-comment-button');

        fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(submitButton);

        fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
        fireEvent.click(submitButton);

        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
        expect(screen.getAllByTestId('comment-item')).toHaveLength(2);
    });
});