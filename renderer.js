document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await window.darkMode.toggle()
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
  })
  
  document.getElementById('reset-to-system').addEventListener('click', async () => {
    await window.darkMode.system()
    document.getElementById('theme-source').innerHTML = 'System'
  })


// Adição de um script para alternar a exibição do submenu
document.querySelector('.icon-button').addEventListener('click', function () {
  const submenu = document.querySelector('.submenu');
  submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
});