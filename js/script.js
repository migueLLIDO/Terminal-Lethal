// pega o elemento <div id="terminal"> do HTML para manipular
const terminal = document.getElementById("terminal");

// array com as mensagens que serão digitadas no terminal
const lines = [
  "[SYSTEM] Iniciando conexão com Lethal Company...",
  "[OK] Carregando interface de usuário...",
  "[OK] Autenticando funcionário: migueLLIDO e Oscarasae",
  "[ALERTA] Lucro insuficiente detectado.",
  "Digite 'help' para listar os comandos."
];

// controla qual linha está sendo digitada
let lineIndex = 0;
// controla qual caractere da linha está sendo digitado
let charIndex = 0;

// função que simula a digitação
function typeLine() {
  // verifica se ainda há linhas no array para escrever
  if (lineIndex < lines.length) {
    // verifica se ainda há caracteres na linha atual para digitar
    if (charIndex < lines[lineIndex].length) {
      // cria um elemento <span> para cada caractere
      const span = document.createElement("span");
      // define o caractere atual como conteúdo do <span>
      span.textContent = lines[lineIndex][charIndex];
      // adiciona o <span> no terminal (faz o caractere aparecer na tela)
      terminal.appendChild(span);
      // avança para o próximo caractere
      charIndex++;
      // chama novamente a função depois de 50ms (velocidade da digitação)
      setTimeout(typeLine, 50);
    } else {
      // quando a linha terminar, adiciona uma quebra de linha
      terminal.appendChild(document.createElement("br"));
      // passa para a próxima linha
      lineIndex++;
      // reseta o índice de caractere
      charIndex = 0;
      // chama novamente a função depois de 500ms (pausa entre linhas)
      setTimeout(typeLine, 500);
    }
  } else {
    // quando todas as linhas terminarem, adiciona o cursor piscando
    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    terminal.appendChild(cursor);
  }
}

// inicia o processo de digitação
typeLine();
