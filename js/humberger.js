const toggleButton = document.getElementById('button');
const active = document.getElementById('active');
const old = document.getElementById('old');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('hidden');
  active.classList.toggle('hidden');
  old.classList.toggle('hidden');
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 640) {
    toggleButton.classList.remove('hidden');
    active.classList.remove('hidden');
    old.classList.remove('hidden');
  } else {
    if (!toggleButton.classList.contains('hidden')) {
      active.classList.add('hidden');
      old.classList.remove('hidden');
    } else {
      old.classList.add('hidden');
    }
  }
});
