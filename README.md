# ITO Online - Simulador

## Descrição

O **ITO Online** é um simulador do jogo **ITO** jogado online, desenvolvido utilizando **Express 4.21.2** e **Socket.IO** para comunicação em tempo real, com frontend em **HTML** e **JavaScript** nativo.

### Objetivo do Jogo

O jogo **ITO** é baseado em cartas numéricas. Cada jogador recebe um conjunto de cartas e o objetivo é cooperar com os outros jogadores para jogar as cartas em ordem crescente. 

### Como Jogar

- Os jogadores recebem cartas com valores numéricos.
- Cada jogador pode dar dicas aos outros jogadores sobre qual carta jogar com base no tema sorteado. 
- Um exemplo de tema pode ser: "**Culinária Japonesa**" - quanto mais popular for o prato, maior o número da carta.
- O jogo é cooperativo, ou seja, todos os jogadores devem ajudar uns aos outros para que as cartas sejam jogadas na ordem correta.

## Funcionalidades

- **Criação de Sala**: O jogador cria uma sala e recebe um link para compartilhá-la com os amigos.
- **Entrada em Sala**: Os amigos entram na sala através do link e aguardam até que todos estejam prontos.
- **Início da Partida**: Quando todos estiverem prontos, a partida começa automaticamente.
- **Cartas Aleatórias**: Cada jogador recebe um conjunto de cartas aleatórias com números de 1 a 100.
- ~~**Temas Sorteados**: A cada rodada, um tema é sorteado para guiar as dicas dos jogadores.~~

## Tecnologias Utilizadas

- **Backend**: Express 4.21.2
- **Comunicação em tempo real**: Socket.IO
- **Frontend**: HTML, CSS, JavaScript (Nativo)
  
## Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js (versão 14 ou superior)

### Passos para Instalação

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/RyanFurt12/ito-game.git
   ```
2. Navegue até o diretório do projeto:

  ```bash
  cd ito-game
  ```
3. Instale as dependências do backend:

   ```bash
   npm install
   ```
4. Inicie o servidor:

   ```bash
   npm start
   ```
O servidor estará rodando localmente em http://localhost:3000.

Abra o navegador e acesse o link http://localhost:3000 para jogar.

### Como Jogar

- **Criar uma sala**: O jogador cria uma sala clicando no botão "Criar Sala". Ele receberá um link para compartilhar com os amigos.
- **Entrar na sala**: Os amigos podem acessar o link compartilhado e entrar na sala.
- **Iniciar a partida**: Quando algum jogador clicar em "iniciar" as cartas são distribuidas

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções para o projeto. Se você encontrar algum bug ou tiver sugestões, abra uma **issue** ou envie um **pull request**.