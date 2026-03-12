function openApp(name, url) {
    const win = document.getElementById('app-window');
    const frame = document.getElementById('app-frame');
    
    frame.src = url;
    document.getElementById('window-title').innerText = name;
    
    // 1. Set display to flex so it exists in the layout
    win.style.display = "flex"; 
    
    // 2. Tiny delay to allow the browser to realize it's there before sliding
    setTimeout(() => {
        win.classList.add('open');
    }, 10);
}

function closeApp() {
    const win = document.getElementById('app-window');
    
    // 1. Slide it way down
    win.classList.remove('open');
    
    // 2. After the 400ms slide, kill the display entirely
    setTimeout(() => {
        win.style.display = "none";
        document.getElementById('app-frame').src = ''; 
    }, 400);
}
