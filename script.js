let button = document.querySelector('#share-button');

button.addEventListener('click', () => {
    let sharebox = document.querySelector('#share-link');
    sharebox.style.display = sharebox.style.display === 'none' ? 'block' : 'none';
});