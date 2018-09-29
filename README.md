# rankflow
Visualization tool for Youtube video recommendation system

Sobre o projeto
Dependencias
Instalação
Uso
Customização

Rankflow: Visualização do sistema de rankeamento de videos do Youtube
Inspirado no trabalho de Bernhard Rieder, nós desenvolvemos uma visualização que mostra o ranking dos videos mais recomendados por dia em um certo período de tempo (Rankflow). A visualização foi desenvolvida usando D3.js e mostra todos os videos que alcançaram pelo menos a quinta posição no ranking para cada termo pesquisado em qualquer dia do período observado. A cor de cada linha é mapeada para representar o canal de origem do video. A largura funciona como o reforço visual para para indicar a melhor posição alcançada pelo video no período, medido tampem no eixo vertical do gráfico. Passe mouse por cima de cada linha para que ela se acenda e as outras se apaguem. Clique em cada uma das linhas para abriar um janela com informações sobre o video, incluindo um video play para assistir o video no context, assim como as métricas básicas do video a cada dia (numero de visualização, "gostei", "não gostei", recomendações e posição no ranking).
Acompanhando essa visualização há dois outros gráficos indicando os dez videos mais vistos e os dez canais com mais visualizações. Passe o mouse por cima das barras em um dos gráficos para acender barras correspondentes nas ouras visualizações. Clique em um das barras dos dez videos mais vistos para obter mais informações.
O rankflow permite analizar a evoluções de video no ranking the recomendações, identificar tendencias e padrões, e observar o que tem sido recomendado pelo algoritmo do Youtube. Esse projeto permite observar não apenas quais foram os videos mais recomendados, vistos e curtidos para cada termo pesquisado, mas também ajuda a identificar os produtores desses videos e a rede de conexões entre videos, produtores, e espectadores nas redes sociais. Isso também pode nos dar algumas pistas sobre o funcionamento do sistema de ranqueamento usado no Youtube, assim como quais os videos mais proeminentes em um tópico especifico, e qual a narrativa esse ranking produz no debate político no Brasil em particular, e nas redes sociais de forma mais geral.

COLETA DE DADOS
Os dados de desse projeto foram coletados foram coletados usando um script em Python desenvolvido por Guillaume Chaslot como parte to projeto Algo Transparency. O algorithm em questão faz uma busca no Youtube usando uma palavra-chave definida pelo usuário para coletar e armazenar informações dos videos relacionados à palavra-chave. Mais especificamente nós usamos script para A) identificar os quatro primeiros resultados encontrados na pesquisa no Youtube pela palavra-chave, B) obter os primeiros quatro videos relacionados ao resultados da pesquisa, C) repetir a etapa (B) quatro vezes sucessivamente com cada video obtido para coletar videos relacionados, e D) guardar o resultado em arquivo JSON. Esse operação é análoga a uma pessoa fazer uma busca por uma palavra-chave no Youtube, abrir os primeiros quatro videos, e na sequencia clicar nos quatro primeiros videos recomendados, repetindo esse processo quatro vezes para cada video que for aberto.
Esse algoritmo não usa a API publica do Youtube. Ao invés disse, ele simula o ambiente do navegador web para coletar os elementos (HTML)que são desenhados nas páginas de busca e do visualização de video do Youtube — um processo conhecido como "scraping". Esse processo faz com que a coleta de dados fique mais neutra, evitando preferencias pessoais e preconceitos sociais definidas inscritas no perfil do usuário. Ou seja, não leve em consideração as preferencias do perfil do usuário no Youtube, o histórico do navegador, cookies, e outros elementos que podem interferir no rankeamento gerado pelo Youtube. No entanto, isso não remove outras variáveis que possam distorcer ou formatar o ranking, como a localização e sistema do computador em que a coleta foi feita, a lingua em que o sistema esta configurado, ou qualquer outra variável que faça parte do processo de ranqueamento não revelada pelo Youtube.
Para esta pesquisa nós coletados termos relevantes às eleições no Brasil, mais especificamente os nomes dos candidatos e uma variação do nome do candidato acrescentado da palavra "presidente". Coletados as informações dos videos dos principais candidatos, a saber: Lula, Fernando Haddad, Geraldo Alckmin, Jair Bolsonaro, Guilherme Boulos, Ciro Gomes, Marina Silva, Henrique Meireles, e João Amoêdo (acrescentado à lista no dia 5 de setembro de 2018). Coletamos ainda informações do videos relacionados as palavras-chaves "Eleições 2018" e "Brazil Elections". A coleta dos dados foi feita usando uma vez ao dia, apenas por um computador (Apple) localizado em Montreal, Canada, entre os dia 23 de agosto de 2018 e 10 de outubro de 2018, entre 19 e 20 horas (horário de Brasília).
Cada coleta diária produziu um arquivo para cada termo pesquisado. Os arquivos de cada termo foram combinados e reestruturados em um único dataset para gerar informações como o numero total de vezes que um video for recomendado no período afim de ser usados na produção da visualização proposta neste projeto.

Dependências da visualização
D3.js
Moment.js
Chroma.js

Dados
Os dados foram coletados usando  youtube-explorem, ferramenta desservida por Guillaume Chaslot. O código esta na pasta ‘scraper’. Usamos os dados gravados na pasta ‘data’ neste no aplicativo para gerar as visualizações.

Uso
Pronto para usar
Arquivos prontos para usar estão na pasta dist.  Os dados estão na pasta dataset.

Visualizar seus próprios dados
Se quiser usar seus próprios dados mantendo o mesmo sistema, substitua o conteúdo da pasta dataset pelos arquivos JSON (da pasta data) gerados pela sua pesquisa no Youtube-Explore. Edite o arquivo visconfig.json na pasta dist. Esse arquivo é carregado dinamicamente e não precisa ser recompilado.
Period: Coloque a data inicial e final de sua pesquisa
Terms: Acrescente, remova ou edite os termos da pesquisa.
Name : Nome a ser mostrado na interface.
Slug: identificação do arquivo. Note que esse protótipo usa o padrão de nomenclatura do youtube-explore: “videos-info-[nome do arquivo]-[termo]-[data].json

Customização
Se quiser modificar o condigo:
Instale  node.js and npm
Clone esse repositorio: 
Use: npm init para instalar as dependencies desse projeto (veja package.json).

Esse projeto usa webpack.
Use npm run watch para compilar os arquivos durante o desenvolvimento
Use npm run production para a versão final.


