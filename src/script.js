// Event Handling
const dropdownBtn = document.querySelector('.dropdown-btn');
const navBar = document.querySelector('.nav ul');

console.log(dropdownBtn);

dropdownBtn.addEventListener('click', () => {
    console.log('clicked');
    dropdownBtn.classList.toggle('active');
    navBar.classList.toggle('active');
});