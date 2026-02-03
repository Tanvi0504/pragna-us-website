const toggle = document.getElementById("themeToggle");
let dark = true;

toggle.onclick = () => {
  dark = !dark;
  document.body.style.background =
    dark
      ? `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.85)), url("assets/background.jpeg") center/cover fixed`
      : `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.9)), url("assets/background.jpeg") center/cover fixed`;

  toggle.innerHTML = dark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
};
