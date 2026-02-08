const SERVER_IP = "honeyblossomsmp.org";

// Query MC server status from API
async function updateStatus() {
    try {
        const response = await fetch(`https://api.mcstatus.io/v2/status/java/${SERVER_IP}`);
        const data = await response.json();
        
        const countHero = document.getElementById('player-count');
        const countFooter = document.getElementById('footer-player-count');

        if (data.online) {
            const online = data.players.online;
            countHero.innerText = `${online} Players Online - Join Discord to Play!`;
            countFooter.innerText = `${online} / ${data.players.max} Explorers Active`;
        } else {
            countHero.innerText = "Server Maintenance - Join Discord for Info";
            countFooter.innerText = "Status: Offline";
        }
    } catch (err) {
        console.error("Status check failed:", err);
    }
}

// Create animated falling petals for header
function createPetals() {
    const container = document.getElementById('blossom-box');
    if (!container) return;

    container.innerHTML = ''; // Clear old petals

    const petalCount = 15; 

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        const startX = Math.random() * 100;
        const size = Math.random() * 7 + 5; // 5-12px
        const duration = Math.random() * 4 + 3; // 3-7s
        const delay = Math.random() * 8;
        
        petal.style.left = `${startX}%`;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.animationDuration = `${duration}s`;
        petal.style.animationDelay = `-${delay}s`; // Start mid-animation
        
        container.appendChild(petal);
    }
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
    updateStatus();
    createPetals();
    setInterval(updateStatus, 60000); // Refresh every 60s
});