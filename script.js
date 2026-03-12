// 1. Time Update
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();

// 2. Power Toggle
function togglePower() {
    document.getElementById('main-screen').classList.toggle('off');
}

// 3. App Logic
function openApp(name, url) {
    const win = document.getElementById('app-window');
    const frame = document.getElementById('app-frame');
    const settings = document.getElementById('settings-content');
    const title = document.getElementById('window-title');

    title.innerText = name;
    win.style.display = "flex"; // Make it exist in DOM

    if (name === 'Settings') {
        frame.style.display = "none";
        settings.style.display = "block";
        generateSettings();
    } else {
        settings.style.display = "none";
        frame.style.display = "block";
        frame.src = url;
    }

    // Trigger animation
    setTimeout(() => {
        win.classList.add('open');
    }, 10);
}

function closeApp() {
    const win = document.getElementById('app-window');
    win.classList.remove('open');

    // Remove from DOM after animation finishes to prevent "peeking"
    setTimeout(() => {
        win.style.display = "none";
        document.getElementById('app-frame').src = "";
    }, 400);
}

// 4. Settings Generator (100+ Options)
function generateSettings() {
    const container = document.getElementById('settings-content');
    container.innerHTML = ""; // Reset
    
    const options = ["Wifi", "Bluetooth", "Display", "Battery", "Sound", "Storage", "Privacy", "About NovaOS"];
    
    for (let i = 1; i <= 120; i++) {
        const type = options[i % options.length];
        const div = document.createElement('div');
        div.className = 'setting-item';
        div.innerHTML = `<span>⚙️</span> <span>${type} Configuration ${i}</span>`;
        div.onclick = () => alert(`NovaOS: ${type} ${i} accessed.`);
        container.appendChild(div);
    }
}
