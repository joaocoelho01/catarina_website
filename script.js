// --- Menu Mobile ---
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if(burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            burger.classList.toggle('toggle');
        });
    }
}
navSlide();

// --- Lógica do Modal (Pop-up) ---
const modal = document.getElementById("myModal");

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// --- Lógica de Seleção de Horário ---
function selectTime(element) {
    // 1. Verificar se está bloqueado
    if (element.classList.contains('blocked')) return;

    // 2. Remover a classe 'selected' de todos os outros blocos
    const allSlots = document.querySelectorAll('.time-slot');
    allSlots.forEach(slot => slot.classList.remove('selected'));

    // 3. Adicionar a classe 'selected' ao clicado
    element.classList.add('selected');

    // 4. Guardar o valor no input escondido
    document.getElementById('selectedTime').value = element.innerText;
}

// --- Simular envio ---
document.querySelector('.modal-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Buscar valores
    const name = document.getElementById('userName').value;
    const date = document.getElementById('dateInput').value;
    const time = document.getElementById('selectedTime').value;

    if(!time) {
        alert('Por favor, seleciona um horário.');
        return;
    }

    alert(`Obrigada ${name}! O pedido para dia ${date} às ${time} foi enviado.`);
    closeModal();
});