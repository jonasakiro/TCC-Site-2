
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Pega os valores dos campos
        const nome = form.querySelector('input[placeholder="Seu nome completo:"]').value.trim();
        const email = form.querySelector('input[placeholder="Seu e-mail:"]').value.trim();
        const mensagem = form.querySelector('textarea[placeholder="Sua mensagem"]').value.trim();

        // Valida os campos obrigatórios
        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Exibe uma mensagem de sucesso
        alert("Obrigado por entrar em contato, " + nome + "! Em breve responderemos sua mensagem.");

        // Reseta o formulário
        form.reset();
    });
});



