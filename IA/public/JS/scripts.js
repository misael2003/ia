// Función para enviar mensaje al chatbot
function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input?.value || '';
    if (message.trim() !== '') {
        fetch('/api/chatbot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        })
        .then(response => response.json())
        .then(data => {
            const chatbotMessages = document.getElementById('chatbot-messages');
            const userMessage = document.createElement('div');
            userMessage.textContent = `Usuario: ${message}`;
            chatbotMessages.appendChild(userMessage);

            const botMessage = document.createElement('div');
            botMessage.textContent = `Chatbot: ${data.response}`;
            chatbotMessages.appendChild(botMessage);

            if (input) {
                input.value = '';
            }
        });
    }
}

// Función para actualizar los datos financieros del usuario
function updateFinancialData(data) {
    document.getElementById('cuenta-corriente').textContent = `Cuenta Corriente: $${data.cuentaCorriente}`;
    document.getElementById('cuenta-ahorros').textContent = `Cuenta de Ahorros: $${data.cuentaAhorros}`;
    document.getElementById('gastos-mensuales').textContent = `Gastos Mensuales: $${data.gastosMensuales}`;
    document.getElementById('ingresos-mensuales').textContent = `Ingresos Mensuales: $${data.ingresosMensuales}`;

    const transaccionesRecientes = document.getElementById('transacciones-recientes');
    transaccionesRecientes.innerHTML = '';
    data.transaccionesRecientes.forEach(transaccion => {
        const li = document.createElement('li');
        li.textContent = transaccion;
        transaccionesRecientes.appendChild(li);
    });
}

// Fetch user financial data from the backend
function fetchFinancialData() {
    fetch('/api/financial-data')
        .then(response => response.json())
        .then(data => {
            updateFinancialData(data);
        });
}

// Update financial data on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchFinancialData();
});