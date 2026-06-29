document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('formContato');

    form.addEventListener('submit', function (event) {

        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (nome === '' || email === '' || mensagem === '') {
            alert('Erro: Por favor, preencha todos os campos do formulário antes de enviar.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Erro: Por favor, insira um endereço de e-mail válido (exemplo: seuemail@dominio.com).');
            return;
        }

        alert('Obrigado, ' + nome + '! Sua mensagem foi enviada com sucesso.');

        form.reset();
    });
});