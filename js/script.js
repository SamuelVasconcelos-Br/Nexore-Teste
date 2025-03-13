function changeColor() {
  const logo = document.getElementById("Logo");
  const navItems = document.getElementsByClassName("navitem");
  const isDarkMode = document.body.style.backgroundColor === "black";
  const darkModeToggle = document.getElementsByClassName("changeMode");
  const solicitarAvaliacao = document.getElementsByClassName("solicitarAvaliacao");
  const ilustration = document.getElementsByClassName("ilustration");
  const agendarAvaliacao = document.getElementsByClassName("agendarAvaliacao");
  const title = document.getElementsByClassName("title");
  const navigating = document.getElementById("navigating");
  const servicesDescription = document.getElementsByClassName("servicesDescription");

  // fundo branco
  if (isDarkMode) {
    darkModeToggle[0].src="img/TrocarModo2.png";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    logo.src = "img/NexoreLogo.png";
    for (let item of navItems) {
      item.style.color = "black";
    }
    solicitarAvaliacao[0].style.backgroundColor = "white";
    solicitarAvaliacao[0].style.color = "black";
    solicitarAvaliacao[0].style.border = "2px solid black";
    ilustration[0].src = "img/Illustration.svg";
    title[0].style.color = "black";
    agendarAvaliacao[0].style.backgroundColor = "black";
    agendarAvaliacao[0].style.color = "white";
    navigating.style.color = "black";
    servicesDescription[0].style.color = "black";
  } else {
    // fundo escuro
    darkModeToggle[0].src="img/TrocarModo1.png";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    logo.src = "img/NexoreLogoWhite.png";
    for (let item of navItems) {
      item.style.color = "white";
    }
    solicitarAvaliacao[0].style.backgroundColor = "black";
    solicitarAvaliacao[0].style.color = "white";
    solicitarAvaliacao[0].style.border = "2px solid white";
    ilustration[0].src = "img/IllustrationBlack.svg";
    title[0].style.color = "white";
    agendarAvaliacao[0].style.backgroundColor = "#191A23";
    agendarAvaliacao[0].style.color = "white";
    navigating.style.color = "white";
    servicesDescription[0].style.color = "white";
  }
}
