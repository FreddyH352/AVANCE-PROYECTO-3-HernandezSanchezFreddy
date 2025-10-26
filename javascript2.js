document.addEventListener("DOMContentLoaded", function() {
    const hora = new Date().toLocaleTimeString();
    const footer = document.createElement("footer");
    footer.textContent = "Hora actual: " + hora;
    document.body.appendChild(footer);
});