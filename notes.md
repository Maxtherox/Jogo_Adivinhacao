# Anotações sobre DOM (Document Object Model)

## Element e Node

* As tags HTML, quando usadas pela DOM, podemos chamar de **node** (nó) ou de **element** (elemento)

* Pegando um elemento
 - const h1 = document.querySelector('h1') //HTMLElement

* Pegando varios elementos
 - const links = document.querySelectorAll('a') //NodeList

 ## rECEBENDO E MODIFICANDO VALORES

 * Podemos pegar qualquer valor das tags e, também alterar eles.

 * InnerText
  - console.log(h1.innerText)
 * InnerHTML
  - Console.log(h1.innerHTML)
 * aLTERANDO O TEXTO ( OU O html)
  - h1.innnerText = "Novo Titulo"

  ## Alterando estilos

  * Podemos alterar os estilos ou adicionar classes em elementos

   - h1.style.backgroundColor = "red"//Alterando o estilo 
   - h1.classList.add('Hide') //adicionando classes
   - h1.classList.remove('Hide') //Removendo classes
   - h1.classList.toggle('Hide) //Alternanado entre classes