
/* ============ BANCO DE QUESTÕES ============ */
const C = `<span class="cm">`, CE = `</span>`; // helper p/ comentários no código
const Q = {
  facil: [
    { type:"SAÍDA", code:`a = 5\nb = 3\ntemp = a\na = b\nb = temp\nprint(a, b)`,
      q:"Qual a saída?", opts:["3 5","5 3","3 3","5 5"], ans:0,
      ex:"Troca clássica de valores usando uma variável auxiliar. <code>temp</code> guarda o 5, <code>a</code> recebe o 3, e <code>b</code> recebe o que estava em temp. Resultado: 3 5." },
    { type:"SAÍDA", code:`x = 10\ny = 3\nprint(x % y)`,
      q:"Qual a saída?", opts:["3","1","0","3.33"], ans:1,
      ex:"O operador <code>%</code> (módulo) devolve o RESTO da divisão, não o quociente. 10 ÷ 3 = 3 com resto 1." },
    { type:"SAÍDA", code:`idade = 17\nif (idade >= 18)\n  print("maior")\nelse\n  print("menor")`,
      q:"Qual a saída?", opts:["maior","menor","17","erro"], ans:1,
      ex:"17 não é >= 18, então a condição é falsa e o bloco <code>else</code> executa." },
    { type:"SAÍDA", code:`total = 0\nfor (i = 0; i < 4; i++)\n  total = total + 2\nprint(total)`,
      q:"Qual o valor final de total?", opts:["6","8","10","4"], ans:1,
      ex:"O loop roda 4 vezes (i = 0,1,2,3), somando 2 a cada volta: 2+2+2+2 = 8." },
    { type:"SAÍDA", code:`for (i = 1; i <= 3; i++)\n  if (i % 2 == 0) print("P")\n  else print("I")`,
      q:"Qual a sequência impressa?", opts:["I P I","P I P","I I I","P P P"], ans:0,
      ex:"i=1 é ímpar→I, i=2 é par→P, i=3 é ímpar→I. Logo: I P I." },
    { type:"SAÍDA", code:`nome = "Ana"\nprint("Ola, " + nome + "!")`,
      q:"Qual a saída?", opts:["Ola, nome!","Ola, Ana!","Ola, + Ana","Ana"], ans:1,
      ex:"O <code>+</code> entre strings concatena (junta) os textos. A variável nome vale \"Ana\"." },
    { type:"SAÍDA", code:`a = 4\nb = 2\nif (a > b && b > 0)\n  print("sim")\nelse\n  print("nao")`,
      q:"Qual a saída?", opts:["sim","nao","erro","4"], ans:0,
      ex:"<code>&&</code> exige que AMBAS sejam verdadeiras. 4>2 ✓ e 2>0 ✓ → \"sim\"." },
    { type:"SAÍDA", code:`x = 7\nx += 3\nx *= 2\nprint(x)`,
      q:"Qual o valor final de x?", opts:["13","20","17","14"], ans:1,
      ex:"<code>x += 3</code> → x = 10. Depois <code>x *= 2</code> → x = 20. Os operadores compostos modificam a própria variável." },
  ],
  medio: [
    { type:"SAÍDA", code:`soma = 0\nfor (i = 1; i <= 5; i++)\n  soma += i\nprint(soma)`,
      q:"Qual o valor de soma?", opts:["10","15","20","5"], ans:1,
      ex:"Acumulador: soma 1+2+3+4+5 = 15. Padrão muito comum para totalizar valores." },
    { type:"SAÍDA", code:`for (i = 1; i <= 3; i++)\n  for (j = 1; j <= 2; j++)\n    print(i * j)`,
      q:"Qual a sequência impressa?", opts:["1 2 2 4 3 6","1 2 3 4 5 6","2 4 6 8","1 1 2 2 3 3"], ans:0,
      ex:"Loop aninhado. i=1: 1·1, 1·2 → 1,2. i=2: 2,4. i=3: 3,6. O loop interno completa antes do externo avançar." },
    { type:"SAÍDA", code:`arr = [3, 7, 2, 9, 4]\nmax = arr[0]\nfor n in arr\n  if (n > max) max = n\nprint(max)`,
      q:"Qual o valor de max?", opts:["7","4","9","3"], ans:2,
      ex:"Algoritmo de máximo: começa supondo que o 1º é o maior e atualiza sempre que achar algo maior. O maior de [3,7,2,9,4] é 9." },
    { type:"SAÍDA", code:`n = 16\nc = 0\nwhile (n > 1)\n  n = n / 2\n  c++\nprint(c)`,
      q:"Qual o valor de c?", opts:["3","4","8","16"], ans:1,
      ex:"16→8→4→2→1, dividindo por 2 quatro vezes. Cada divisão incrementa c. Isso é o comportamento de log₂(16)=4." },
    { type:"SAÍDA", code:`palavra = "banana"\nc = 0\nfor letra in palavra\n  if (letra == "a") c++\nprint(c)`,
      q:"Quantas vezes 'a' aparece?", opts:["2","3","4","1"], ans:1,
      ex:"b-a-n-a-n-a: a letra 'a' aparece nas posições 2, 4 e 6. Total: 3." },
    { type:"SAÍDA", code:`r = 0\nfor (i = 0; i < 10; i++)\n  if (i % 3 == 0) continue\n  r += i\nprint(r)`,
      q:"Qual o valor de r?", opts:["45","27","30","18"], ans:1,
      ex:"<code>continue</code> pula o resto da volta. Ignoramos 0,3,6,9 (múltiplos de 3) e somamos 1+2+4+5+7+8 = 27." },
    { type:"BUG", code:`i = 0\nwhile (i < 5)\n  print(i)\n  // falta algo aqui`,
      q:"O que acontece com esse código?", opts:["Imprime 0 a 4","Loop infinito","Não imprime nada","Erro de sintaxe"], ans:1,
      ex:"<code>i</code> nunca é incrementado, então a condição <code>i < 5</code> é sempre verdadeira → loop infinito. Faltou <code>i++</code> dentro do while." },
    { type:"SAÍDA", code:`a = [1, 2, 3]\nb = a\nb.push(4)\nprint(a.length)`,
      q:"Qual o tamanho de a?", opts:["3","4","1","erro"], ans:1,
      ex:"<code>b = a</code> NÃO copia o array — as duas variáveis apontam para o MESMO array (referência). Alterar b altera a. Tamanho: 4." },
  ],
  dificil: [
    { type:"RECURSÃO", code:`function fat(n)\n  if (n <= 1) return 1\n  return n * fat(n - 1)\nprint(fat(4))`,
      q:"Qual o resultado de fat(4)?", opts:["12","16","24","4"], ans:2,
      ex:"Fatorial: 4 · fat(3) = 4·3·fat(2) = 4·3·2·fat(1) = 4·3·2·1 = 24." },
    { type:"RECURSÃO", code:`function fib(n)\n  if (n < 2) return n\n  return fib(n-1) + fib(n-2)\nprint(fib(6))`,
      q:"Qual o valor de fib(6)?", opts:["6","8","13","5"], ans:1,
      ex:"Fibonacci: 0,1,1,2,3,5,8... O índice 6 (começando em 0) é o 8." },
    { type:"TRACE", code:`arr = [5, 2, 4, 1]\n` + C + `1 passada do bubble sort (crescente)` + CE,
      q:"Como fica o array após UMA passada?", opts:["[2,4,1,5]","[1,2,4,5]","[2,5,4,1]","[5,4,2,1]"], ans:0,
      ex:"Compara vizinhos e troca o maior pra direita: 5↔2→[2,5,4,1], 5↔4→[2,4,5,1], 5↔1→[2,4,1,5]. O maior valor 'borbulha' até o fim." },
    { type:"BUG", code:`arr = [10, 20, 30]\nfor (i = 0; i <= arr.length; i++)\n  print(arr[i])`,
      q:"Qual o problema desse loop?", opts:["Pula o 1º elemento","Acessa índice fora do array","Imprime ao contrário","Não tem problema"], ans:1,
      ex:"Erro clássico off-by-one. Com <code>i <= length</code>, na última volta i=3, mas os índices válidos vão de 0 a 2. O certo é <code>i < arr.length</code>." },
    { type:"BITS", code:`function ehPar(n)\n  return (n & 1) == 0\nprint(ehPar(7))`,
      q:"O que ehPar(7) retorna?", opts:["true","false","1","erro"], ans:1,
      ex:"<code>n & 1</code> isola o último bit. 7 em binário é 111, último bit = 1 → não é 0 → false. Números pares terminam em bit 0." },
    { type:"RECURSÃO", code:`function mdc(a, b)\n  if (b == 0) return a\n  return mdc(b, a % b)\nprint(mdc(12, 8))`,
      q:"Qual o resultado de mdc(12, 8)?", opts:["2","4","8","12"], ans:1,
      ex:"Algoritmo de Euclides: mdc(12,8)→mdc(8,4)→mdc(4,0)→4. O resto vira o novo divisor até zerar." },
    { type:"SAÍDA", code:`function f(arr)\n  s = 0\n  for (i = 0; i < arr.length; i++)\n    if (i % 2 == 0) s += arr[i]\n  return s\nprint(f([10, 5, 20, 7, 30]))`,
      q:"Qual o valor retornado?", opts:["42","60","72","75"], ans:1,
      ex:"Soma os elementos de ÍNDICE par (0,2,4): arr[0]=10, arr[2]=20, arr[4]=30 → 60. Cuidado: índice par, não valor par." },
    { type:"TRACE", code:`function g(n)\n  r = ""\n  while (n > 0)\n    r = (n % 2) + r\n    n = Math.floor(n / 2)\n  return r\nprint(g(6))`,
      q:"Qual a string retornada?", opts:["\"110\"","\"011\"","\"6\"","\"100\""], ans:0,
      ex:"Converte 6 para binário. Restos da divisão por 2: 6→0, 3→1, 1→1, montados de trás pra frente → \"110\"." },
  ],
  expert: [
    { type:"CLOSURE", code:`function criar()\n  fns = []\n  for (let i = 0; i < 3; i++)\n    fns.push(() => i)\n  return fns\nf = criar()\nprint(f[0]() + f[1]() + f[2]())`,
      q:"Qual a saída?", opts:["9","0","3","erro"], ans:2,
      ex:"Com <code>let</code>, cada iteração cria um novo escopo de i (0,1,2). As funções capturam valores diferentes: 0+1+2 = 3. Com <code>var</code> daria 9, pois todas compartilhariam o mesmo i=3." },
    { type:"BIG-O", code:`for (i = 0; i < n; i++)\n  for (j = 0; j < n; j++)\n    print(i, j)`,
      q:"Qual a complexidade de tempo?", opts:["O(n)","O(log n)","O(n²)","O(2n)"], ans:2,
      ex:"Loop aninhado onde ambos vão até n: n × n = n² operações. Complexidade quadrática O(n²)." },
    { type:"BIG-O", code:`i = 1\nwhile (i < n)\n  print(i)\n  i = i * 2`,
      q:"Qual a complexidade de tempo?", opts:["O(n)","O(log n)","O(n²)","O(1)"], ans:1,
      ex:"i dobra a cada volta (1,2,4,8...), então o loop roda cerca de log₂(n) vezes. Sempre que você divide/multiplica o problema, pense em O(log n)." },
    { type:"LÓGICA", code:`function f()\n  print("A"); return true\nfunction g()\n  print("B"); return false\nif (g() && f())\n  print("C")`,
      q:"O que é impresso?", opts:["A B C","B","B C","A B"], ans:1,
      ex:"Curto-circuito do <code>&&</code>: como g() retorna false, o lado direito (f()) nem é avaliado. Só \"B\" é impresso, e o if não entra." },
    { type:"RECURSÃO", code:`function f(n)\n  if (n <= 0) return 0\n  return n % 10 + f(Math.floor(n / 10))\nprint(f(1234))`,
      q:"Qual o resultado?", opts:["10","1234","4","24"], ans:0,
      ex:"Soma dos dígitos via recursão: pega o último dígito (n%10) e recursa removendo-o (n/10). 4+3+2+1 = 10." },
    { type:"LÓGICA", code:`x = 5\nr = x > 3 ? (x > 10 ? "alto" : "medio") : "baixo"\nprint(r)`,
      q:"Qual o valor de r?", opts:["alto","medio","baixo","erro"], ans:1,
      ex:"Ternário aninhado. x=5: x>3 é true → vai pro ramo interno; x>10 é false → \"medio\"." },
    { type:"SAÍDA", code:`function conta(s)\n  m = {}\n  for c in s\n    m[c] = (m[c] || 0) + 1\n  return m["l"]\nprint(conta("hello"))`,
      q:"Qual o valor retornado?", opts:["1","2","undefined","0"], ans:1,
      ex:"Conta frequência de cada caractere num mapa. <code>m[c] || 0</code> trata a 1ª ocorrência (undefined vira 0). 'l' aparece 2 vezes em \"hello\"." },
    { type:"TRACE", code:`memo = {}\nfunction fib(n)\n  if (n < 2) return n\n  if (memo[n]) return memo[n]\n  memo[n] = fib(n-1) + fib(n-2)\n  return memo[n]\nprint(fib(10))`,
      q:"Qual o valor de fib(10)?", opts:["34","55","89","21"], ans:1,
      ex:"Fibonacci com memoização (guarda resultados pra não recalcular). A sequência: 0,1,1,2,3,5,8,13,21,34,55 → índice 10 = 55." },
  ]
};

const TIER_META = {
  facil:   {name:"FÁCIL",   color:"var(--green)",   base:10, count:6},
  medio:   {name:"MÉDIO",   color:"var(--blue)",    base:20, count:6},
  dificil: {name:"DIFÍCIL", color:"var(--amber)",   base:35, count:6},
  expert:  {name:"EXPERT",  color:"var(--magenta)", base:50, count:6},
};
const ORDER = ["facil","medio","dificil","expert"];

/* ============ ESTADO ============ */
let state = {};

function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }

function startGame(mode){
  const tiers = mode==="campaign" ? ORDER.slice() : [mode];
  // monta a fila de questões
  const queue = [];
  tiers.forEach(t=>{
    const meta = TIER_META[t];
    const picked = shuffle(Q[t]).slice(0, meta.count);
    picked.forEach(q=>queue.push({...q, tier:t}));
  });
  state = {
    mode, queue, idx:0, score:0, streak:0, bestStreak:0,
    lives:3, correct:0, answered:0, locked:false
  };
  show("screen-game");
  renderQuestion();
}

function renderQuestion(){
  const item = state.queue[state.idx];
  const meta = TIER_META[item.tier];
  // HUD
  document.documentElement.style.setProperty('--c', meta.color);
  const tc = document.getElementById("hud-tier");
  tc.textContent = meta.name; tc.style.setProperty('--c', meta.color);
  document.getElementById("q-code").parentElement; // noop
  document.getElementById("q-code").style.setProperty('--c', meta.color);
  document.getElementById("hud-score").textContent = state.score;
  document.getElementById("hud-streak").textContent = state.streak;
  document.getElementById("hud-lives").textContent = "❤".repeat(state.lives) + "🖤".repeat(3-state.lives);
  document.getElementById("q-num").textContent = state.idx+1;
  document.getElementById("q-tot").textContent = state.queue.length;
  document.getElementById("q-type").textContent = item.type;
  document.getElementById("hud-bar").style.width = (state.idx/state.queue.length*100)+"%";

  // código (innerHTML pq pode conter spans de comentário; conteúdo é controlado por nós)
  document.getElementById("q-code").innerHTML = item.code;
  document.getElementById("q-text").textContent = item.q;

  // opções embaralhadas
  const order = shuffle(item.opts.map((o,i)=>({o,i})));
  const optsEl = document.getElementById("q-opts");
  optsEl.innerHTML = "";
  const letters = ["A","B","C","D"];
  order.forEach((entry, pos)=>{
    const b = document.createElement("button");
    b.className = "opt";
    b.innerHTML = `<span class="let">${letters[pos]}</span><span></span>`;
    b.querySelector("span:last-child").textContent = entry.o;
    b.onclick = ()=>answer(entry.i===item.ans, b, optsEl, item, order);
    optsEl.appendChild(b);
  });

  // reset feedback
  state.locked = false;
  const fb = document.getElementById("fb"); fb.className="fb";
  document.getElementById("btn-next").className="next";
  document.getElementById("screen-game").classList.remove("fade");
  void document.getElementById("screen-game").offsetWidth;
  document.getElementById("screen-game").classList.add("fade");
}

function answer(isCorrect, btn, optsEl, item, order){
  if(state.locked) return;
  state.locked = true;
  state.answered++;
  const meta = TIER_META[item.tier];

  // marca todas
  [...optsEl.children].forEach((b,pos)=>{
    b.disabled = true;
    if(order[pos].i===item.ans) b.classList.add("correct");
  });

  const fb = document.getElementById("fb");
  const fbh = document.getElementById("fb-h");
  const fbx = document.getElementById("fb-x");

  if(isCorrect){
    state.correct++;
    state.streak++;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    const mult = 1 + Math.min(state.streak-1,5)*0.2;
    const pts = Math.round(meta.base * mult);
    state.score += pts;
    fb.className="fb ok show";
    fbh.textContent = `✓ CORRETO  +${pts} pts` + (state.streak>1?`  (combo x${mult.toFixed(1)})`:``);
    if(state.streak>0 && state.streak%3===0) toast(`🔥 SEQUÊNCIA DE ${state.streak}!`);
  } else {
    btn.classList.add("wrong");
    state.streak = 0;
    state.lives--;
    fb.className="fb no show";
    fbh.textContent = `✗ ERROU  −1 vida`;
  }
  fbx.innerHTML = item.ex;

  document.getElementById("hud-score").textContent = state.score;
  document.getElementById("hud-streak").textContent = state.streak;
  document.getElementById("hud-lives").textContent = "❤".repeat(Math.max(state.lives,0)) + "🖤".repeat(3-Math.max(state.lives,0));

  const nextBtn = document.getElementById("btn-next");
  const isLast = state.idx >= state.queue.length-1;
  const dead = state.lives<=0;
  nextBtn.textContent = (dead) ? "VER RESULTADO" : (isLast ? "FINALIZAR ✓" : "PRÓXIMA →");
  nextBtn.className="next show";
}

document.getElementById("btn-next").onclick = ()=>{
  if(state.lives<=0 || state.idx>=state.queue.length-1){ endGame(); return; }
  state.idx++; renderQuestion();
};

function endGame(){
  const acc = state.answered ? Math.round(state.correct/state.answered*100) : 0;
  document.getElementById("end-score").textContent = state.score;
  document.getElementById("end-acc").textContent = acc+"%";
  document.getElementById("end-streak").textContent = state.bestStreak;

  const won = state.lives>0;
  document.getElementById("end-title").textContent = won ? "MISSÃO COMPLETA" : "FIM DE JOGO";
  document.getElementById("end-title").style.color = won ? "var(--cyan)" : "var(--magenta)";

  let rank = "Iniciante";
  if(acc>=50) rank="Júnior";
  if(acc>=70) rank="Pleno";
  if(acc>=85) rank="Sênior";
  if(acc>=95 && state.bestStreak>=6) rank="Mestre";
  document.getElementById("end-rank").textContent = rank;

  const sub = won
    ? `Você acertou ${state.correct} de ${state.answered}. ${acc>=85?"Mandou muito bem!":"Bom progresso — revise os erros e tente de novo."}`
    : `As vidas acabaram. Acertou ${state.correct} de ${state.answered}. Releia as explicações e volte mais forte!`;
  document.getElementById("end-sub").textContent = sub;

  show("screen-end");
}

/* ============ UI HELPERS ============ */
function show(id){
  ["screen-start","screen-game","screen-end"].forEach(s=>{
    document.getElementById(s).classList.toggle("hidden", s!==id);
  });
  window.scrollTo({top:0,behavior:"smooth"});
}
let toastT;
function toast(msg){
  const t=document.getElementById("toast");
  t.textContent=msg; t.classList.add("show");
  clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove("show"),1800);
}

/* ============ EVENTOS ============ */
document.querySelectorAll(".tier").forEach(b=>{
  b.onclick = ()=>startGame(b.dataset.mode);
});
document.getElementById("btn-quick").onclick = ()=>startGame("campaign");
document.getElementById("btn-again").onclick = ()=>show("screen-start");