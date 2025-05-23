function toggleDropdownMenu() {
    document.getElementById('dropdownMenu').classList.toggle('hidden');
}
function toggleDropdownTheme() {
    document.getElementById('dropdownTheme').classList.toggle('hidden');
}

function setTheme(themeName) {
    const html = document.documentElement;
    html.classList.remove('theme-w-red', 'theme-w-blue', 'theme-w-brown', 'theme-w-green', 'theme-w-purple', 'theme-b-red', 'theme-b-blue', 'theme-b-brown', 'theme-b-green', 'theme-b-purple');
    html.classList.add('theme-' + themeName);
    localStorage.setItem('theme', themeName);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "w-red";
    setTheme(savedTheme);
  });
  