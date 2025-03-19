import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';



describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar um comentário', () => {
        render(<PostComment/>);
        const textarea = screen.getByTestId('post-comments-form-textarea');
        const button = screen.getByTestId('post-comments-form-button');
        fireEvent.change(textarea, { target: { value: 'Comentario' } });
        fireEvent.click(button);
        expect(screen.getByText('Comentario')).toBeInTheDocument();
    });
    test('Deve adicionar um comentário vazio', () => {
        const {debug} =  render(<PostComment/>);
        const textarea = screen.getByTestId('post-comments-form-textarea');
        const button = screen.getByTestId('post-comments-form-button');
        fireEvent.change(textarea, { target: { value: '' } });
        fireEvent.click(button);
        debug()
        expect(screen.queryByText('Comentario')).not.toBeInTheDocument();
    })
});