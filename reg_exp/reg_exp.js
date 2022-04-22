let block = document.getElementById('text');
document.getElementById('replace_all').addEventListener('click', () => {
    block.textContent = block.textContent.replace(/'/g, '"');
});
document.getElementById('replace_without_apostrophe').addEventListener('click', () => {
    block.textContent = block.textContent.replace(/\b"|"\b/g, "'");
    block.textContent = block.textContent.replace(/\B'|'\B/g, '"');
});