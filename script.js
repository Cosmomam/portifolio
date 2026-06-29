// Garante que o JS só execute após todo o HTML ser carregado
document.addEventListener('DOMContentLoaded', function () {

    // Seleciona o formulário pelo ID
    const form = document.getElementById('formContato');

    // Adiciona um "ouvinte" para o evento de envio (submit)
    form.addEventListener('submit', function (event) {

        // Impede que a página recarregue (comportamento padrão de formulários html)
        event.preventDefault();

        // Captura os valores inseridos pelo usuário e remove espaços em branco extras (trim)
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // 1. Validação de preenchimento (verifica se há algum campo vazio)
        if (nome === '' || email === '' || mensagem === '') {
            alert('Erro: Por favor, preencha todos os campos do formulário antes de enviar.');
            return; // Encerra a função sem seguir para os próximos passos
        }

        // 2. Validação de formato de e-mail usando Expressão Regular (Regex)
        // Valida se o formato se parece com usuario@dominio.com
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Erro: Por favor, insira um endereço de e-mail válido (exemplo: seuemail@dominio.com).');
            return;
        }

        // 3. Simulação do envio com sucesso
        alert('Obrigado, ' + nome + '! Sua mensagem foi enviada com sucesso.');

        // 4. Limpeza dos campos após o envio
        form.reset();
    });
});