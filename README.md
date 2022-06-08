# Aquário virtual - Procurando Nemo.
##### Acesse o site através do [link](https://julianyf.github.io/aquario_trabalho_segundo_bi_construcao_software_web/)

### Nesse trabalho a ideia inicial foi replicar um aquário dentro de um site na web. Onde o usuário conseguirá mover o peixe, nesse caso a Dory, utilizando o teclado, ou, caso esteja utilizando um aparelho mobile, ele poderá recorrer aos botões que aparecem no site de forma responsiva.

#### Utilizei dois eventos(addEventListener) em JavaScript, que foram responsáveis pela movimentação da Dory. 
## keydown event
~~~javascript
document.addEventListener('keydown', event => {
  const keyEvent = event.key
  console.log(keyEvent)
  console.log(event)
~~~
#### O keydown é o evento que recebe os comandos do teclado para a movimentação da Dory. 

## click event
~~~javascript
document.addEventListener('click', event => {
  const keyEvent = event.path[0].id
~~~
#### o click por sua vez, é o evento que recebe os comandos dos botões, em relação à versão mobile do site.
#### OBS: O site tem um bug comum em relação aos botões, eles funcionam com o click do mouse, mas não correspondem ao touch de um aparelho mobile.

### Essas são as principais funções do site.
## Obrigada!


