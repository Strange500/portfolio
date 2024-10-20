const children = document.getElementById('background_container').children;
children.forEach(child => {
    child.classList.toggle('blur');
});
