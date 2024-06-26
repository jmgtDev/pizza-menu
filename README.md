Esse projeto será dividido em vários branchs, que a princípio não pretendo dar merge. A ideia é que cada branch fica "para sempre" ativo, pra que eu possa consultar cada uma das etapas do projeto.
Cada etapa, ou cada novo branch, terá suas novidades listadas aqui, com identificação do nome do branch para fácil consulta.

**Branch 1:**

> 1- Projeto criado com Create React App

> 2- Importação do React e do ReactDOM já na sua forma atualizada para a versão 18.

> 3- Criação de um componente App teste, para que algo fosse mostrado na tela.

> 3- Criação da root e renderização do componente App nela.

> 4- StrictMode envolvendo todos os elementos renderizados na root (adicionado comentário explicando o motivo de sua utilização).

**Branch 2:**

> 1- Criação de mais um componente (Pizza).

> 2- Colocação do componente Pizza dentro do componente pai App. Dessa forma, quando App for renderizado, renderizará Pizza também.

> 3- Criação da pasta images dentro da pasta public. Essa pasta contém as imagens que serão utilizadas na aplicação.

**Branch 3:**

> 1- Nesse branch foram criados mais componentes e alguns foram redistribuídos.

> 2- Criação dos componentes Header, Menu e Footer.

> 3- Componentes Pizza saíram do componente App e foram para o componente Menu, para simplificação do componente App.

> 4- Componente Header, Menu e Footer colocados dentro do componente App.

**Branch 4:**

> 1- Nesse branch foi introduzido estilo CSS para a página de algumas formas diferentes.

> 2- Adição de estilo CSS inline no componente Footer. Essa estilização não é a ideal, pois deixa o código mais difícil de ler. Está nesse branch para questões de aprendizado, mas será retirada no próximo.

> 3- Novo arquivo CSS (index.css) introduzido.

> 4- index.css foi importado para o index.js.

> 5- Adição de estilo nos componentes App, Header, Menu e Pizza através de classes que vêm do arquivo index.css.

**Branch 5:**

> 1- Nesse branch foram introduzidas as props. Com elas, os componentes podem ser reutilizados com características únicas e cada reutilização.

> 2- Modificado o componente Pizza para que os seus valores sejam dinâmicos, ou seja, podem mudar de acordo com as props recebidas.

> 3- Dentro do componente Menu, foram passados 3 componentes Pizza com props únicas para cada um.

> 4- Modificação de alguns estilos e acréscimo de outros, mas nada novo.

**Branch 6:**

> 1- Nesse branch foi inserido um array simulando um banco de dados. Assim, renderizamos os componentes Pizza através do método map() com o banco de dados.

> 2- Primeiro foi acrescentado o array que simula um banco de dados. Esse banco de dados contém todas as informações das pizzas que serão renderizadas.

> 3- Depois, dentro do componente Menu, o método map() foi utilizado para passar pelo banco de dados transformando cada item em um componente Pizza com as informações respectivas. Com isso, todas as pizzas foram renderizadas no componente Menu.

**Branch 7:**

> 1- Nesse branch foi inserido o conceito de renderização condicional com o && (operador AND).

> 2- Modificação do componente Menu para que, caso o banco de dados não tivesse nenhuma pizza, fosse renderizado um parágrafo avisando desse fato.

> 3- Modificação do componente Footer para que, de acordo com a hora, renderizar um aviso mostrando se o restaurante está aberto ou fechado.

**Branch 8:**

> 1- Nesse branch foram adicionados outros dois métodos de renderização condicional (operador ternário e multiplos returns), além de adição de uma prop key para cada elemento renderizado pelo map()

> 2-O componente Footer passou a ter sua renderização condicional feita pelo operador ternário.

> 3-A lista renderizada pelo map() precisa de uma key única para cada elemento. Nesse branch foi adicionada essa key.

> 4-Modificação do componente Pizza para que ele tenha renderização condicional com múltiplos returns. Dependendo da condição, algum return específico será renderizado.

**Branch 9:**

> 1- Nesse branch tivemos desestruturação do objeto prop e atribuição condicional de classes para estilização, além de outras mudanças pontuais de estilização.

> 2- Primeiramente foi adicionado um botão no componente Footer para simular o início de um pedido de um cliente.

> 3- O objeto props recebido pelo componente Pizza foi desestruturado. Dessa forma, fica registrada a forma desestruturada de receber props.

> 4- Acréscimo de um parágrafo de apresentação do cardápio.

> 5- Adicionado um novo texto para caso o menu não tenha pizzas.

> 6- Modificação do componente Pizza para que alguns elementos tivessem classes atribuídas de forma condicional. No caso, as pizzas que estão sem estoque, passam a ficar em preto e branco. Além disso, pizzas sem estoque não mostram mais o preço e sim o aviso de esgotadas.

> 7- Toda a estilização foi atualizada para funcionar em aparelhos mobile.

**Branch 10:**

> 1- Nesse branch foi feita a responsividade da página, adaptando-a a todos os tipos de tela.
