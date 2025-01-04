function togglemode() {
  const html = document.documentElement
  html.classList.toggle("ligth")

  // pegar a tag
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("ligth")) {
    //se tiver ligth mode, adicionar a imagem ligth
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem ligth mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}

