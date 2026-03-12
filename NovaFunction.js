// Replace your openApp and closeApp functions with these:

function openApp(name, url) {
    const win = document.getElementById('app-window');
    const frame = document.getElementById('app-frame');
    
    frame.src = url;
    document.getElementById('window-title').innerText = name;
    
    // 1. Make it visible first so the animation can play
    win.style.visibility = "visible"; 
    
    // 2. Small delay to trigger the CSS transition
    setTimeout(() => {
        win.classList.add('open');
    }, 10);
}

function closeApp() {
    const win = document.getElementById('app-window');
    
    // 1. Slide it down
    win.classList.remove('open');
    
    // 2. Wait for animation to finish (400ms), then hide it completely
    setTimeout(() => {
        win.style.visibility = "hidden";
        document.getElementById('app-frame').src = ''; 
    }, 400);
}
