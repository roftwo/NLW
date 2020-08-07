//procurar o botão...hero-image
document.querySelector("#add-time")
//esperar o evento clickar, depois do click execute a ação duplicar campo
.addEventListener("click", cloneField)
//duplicar campo
function cloneField() {
    //console.log("escreva isso no console")
    //chacando se o caminho do click esta correto

    //criar uma constante "new field" para armazenar o conteudo "clone node" para usar na ultima linha
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //true pra pegar tudo dento da seleção no caso foi a "div"

  //fields amarrada para ficar constante e evitar ser modificada depois  
  const fields = newFieldContainer.querySelectorAll('input')

  //limpar os campos a cada cópia
  fields.forEach(function(field) {
    field.value = ""
  });

  //onde será colocado o objeto clonado
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}