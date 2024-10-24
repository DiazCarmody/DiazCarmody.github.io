const githubUsername = 'DiazCarmody'; // Cambia esto por tu nombre de usuario de GitHub

async function cargarPerfil() {
    const response = await fetch(`https://api.github.com/users/${githubUsername}`);
    const data = await response.json();
    document.getElementById('perfil').innerHTML = `
        <img src="${data.avatar_url}" alt="${data.login}">
        <div>
            <h3>${data.name || data.login}</h3>
            <p>${data.bio || 'Sin biografía'}</p>
        </div>
    `;
}

async function cargarProyectos() {
    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated`);
    const repos = await response.json();
    const proyectosContainer = document.getElementById('proyectos');
    repos.forEach(repo => {
        if (!repo.private) {
            proyectosContainer.innerHTML += `
                <div class="proyecto">
                    <span>
                        <h3>${repo.name}</h3>
                        <p>${repo.description || 'Sin descripción'}</p>
                        <a href="${repo.html_url}" target="_blank">Ver en GitHub</a>
                    </span>
                </div>
            `;
        }
    });
}

cargarPerfil();
cargarProyectos();

// Generar estrellas
function crearEstrellas(num) {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < num; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 1; // Tamaño aleatorio
        const x = Math.random() * 100; // Posición X aleatoria
        const y = Math.random() * 100; // Posición Y aleatoria
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${y}vh`;
        star.style.left = `${x}vw`;
        star.style.animationDelay = `${Math.random() * 2}s`; // Retardo aleatorio
        star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Duración aleatoria
        starsContainer.appendChild(star);
    }
}

crearEstrellas(150); // Cambia el número de estrellas según desees
