function loadSection(section) {
    const iframe = document.getElementById("contentFrame");
    iframe.src = window.location.origin + "/" + section; 
}