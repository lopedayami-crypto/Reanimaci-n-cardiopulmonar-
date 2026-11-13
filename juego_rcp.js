(function () {
  "use strict";

  var levels = [
    {
      title: "Alerta de emergencia",
      subtitle: "Primeros pasos",
      label: "NIVEL 01 · ALERTA DE EMERGENCIA",
      kind: "choice",
      questions: [
        {
          scenario: "En una sala de prácticas, un adulto se desploma. Aún no has comprobado si hay peligros alrededor.",
          prompt: "Antes de acercarte, ¿qué haces primero?",
          options: [
            "Compruebo que la escena sea segura para mí, para la persona y para quienes están cerca.",
            "Empiezo compresiones de inmediato, sin mirar alrededor.",
            "Busco agua para que la persona despierte.",
            "Muevo a la persona para llevarla a otro sitio."
          ],
          answer: 0,
          explanation: "Primero verifica la seguridad de la escena. Después evalúa la respuesta y la respiración, activa emergencias y consigue un DEA. No muevas a la persona salvo que exista un peligro inmediato."
        }
      ]
    },
    {
      title: "Detecta el error",
      subtitle: "Evita fallos comunes",
      label: "NIVEL 02 · DETECTA EL ERROR",
      kind: "choice",
      questions: [
        {
          scenario: "Un adulto no responde y no respira normalmente. La persona que presencia el colapso no tiene entrenamiento en ventilaciones.",
          prompt: "¿Qué acción evita retrasos y ayuda a mantener la circulación?",
          options: [
            "Iniciar compresiones torácicas y pedir a alguien que active emergencias y consiga un DEA.",
            "Esperar a que llegue personal sanitario antes de actuar.",
            "Dar respiraciones únicamente y evitar las compresiones.",
            "Buscar el pulso durante un minuto antes de pedir ayuda."
          ],
          answer: 0,
          explanation: "En un adulto que no responde y no respira normalmente, inicia RCP y activa emergencias. Quien no está entrenado puede hacer RCP solo con las manos; no retrases las compresiones ni el uso del DEA."
        },
        {
          scenario: "Durante las compresiones, un compañero mantiene el peso sobre el pecho entre cada empuje.",
          prompt: "¿Qué corrección mejora la calidad de las compresiones?",
          options: [
            "Permitir que el pecho vuelva a expandirse completamente después de cada compresión.",
            "Dejar de comprimir durante varios segundos cada minuto.",
            "Inclinarse con fuerza sobre el pecho para mantenerlo hundido.",
            "Reducir el ritmo a 50 compresiones por minuto."
          ],
          answer: 0,
          explanation: "Permite la expansión completa del tórax entre compresiones y mantén las interrupciones al mínimo. En adultos, busca 100–120 compresiones por minuto y una profundidad de al menos 5 cm, evitando superar 6 cm."
        }
      ]
    },
    {
      title: "Ordena los pasos",
      subtitle: "Secuencia de respuesta",
      label: "NIVEL 03 · ORDENA LOS PASOS",
      kind: "sort",
      questions: [
        {
          scenario: "Un adulto está inconsciente en un lugar público. Ordena la respuesta inicial; sigue también las indicaciones del operador y tu formación.",
          prompt: "Organiza las acciones desde la evaluación inicial hasta la RCP.",
          explanation: "La secuencia resalta seguridad, respuesta, activación de ayuda/DEA, respiración y RCP. En personal sanitario, la valoración del pulso se realiza según el protocolo y sin demorar la respuesta."
        }
      ],
      steps: [
        "Comprueba que la escena sea segura.",
        "Comprueba si responde y pide ayuda en voz alta.",
        "Activa emergencias, solicita un DEA y evalúa rápidamente si respira normalmente.",
        "Si no respira normalmente, inicia RCP mientras llega el DEA.",
        "En cuanto llegue el DEA, enciéndelo y sigue sus indicaciones."
      ]
    },
    {
      title: "Ritmo cardíaco",
      subtitle: "Frecuencia y calidad",
      label: "NIVEL 04 · RITMO CARDÍACO",
      kind: "choice",
      questions: [
        {
          scenario: "Estás realizando RCP de alta calidad a un adulto y tu compañero marca el ritmo.",
          prompt: "¿Cuál es la frecuencia recomendada de las compresiones torácicas?",
          options: [
            "100–120 compresiones por minuto.",
            "60–80 compresiones por minuto.",
            "130–150 compresiones por minuto.",
            "La frecuencia no importa si las compresiones son profundas."
          ],
          answer: 0,
          explanation: "La frecuencia recomendada para las compresiones en adultos es de 100–120 por minuto. También importan la profundidad adecuada, la expansión completa del pecho y minimizar las interrupciones."
        },
        {
          scenario: "El equipo revisa la técnica de compresión en un adulto sobre una superficie firme.",
          prompt: "¿Qué combinación describe mejor una técnica de compresión correcta?",
          options: [
            "Manos en el centro del pecho; profundidad de al menos 5 cm sin superar 6 cm; retroceso completo.",
            "Manos sobre el abdomen; compresiones poco profundas y rápidas.",
            "Manos en la parte superior del pecho; profundidad de 8–10 cm.",
            "Manos en el centro del pecho; dejar el tórax hundido entre compresiones."
          ],
          answer: 0,
          explanation: "En adultos, coloca las manos en el centro del pecho (mitad inferior del esternón), comprime al menos 5 cm evitando superar 6 cm y deja que el pecho se expanda completamente. Sigue tu protocolo local."
        }
      ]
    },
    {
      title: "¿Qué harías?",
      subtitle: "Decisiones clínicas",
      label: "NIVEL 05 · ¿QUÉ HARÍAS?",
      kind: "choice",
      questions: [
        {
          scenario: "Un adulto no responde y no respira normalmente. Mientras realizas RCP, otra persona trae un DEA.",
          prompt: "¿Cuál es la mejor acción cuando llega el DEA?",
          options: [
            "Encenderlo, colocar los parches y seguir sus indicaciones; despejar a la persona cuando analice.",
            "Apagarlo y esperar a que llegue el equipo de emergencias.",
            "Retirar los parches tan pronto como el DEA empiece a hablar.",
            "Continuar las compresiones durante el análisis del DEA."
          ],
          answer: 0,
          explanation: "Enciende el DEA y sigue sus instrucciones. Continúa la RCP mientras se prepara; nadie debe tocar a la persona durante el análisis ni durante la descarga."
        },
        {
          scenario: "El DEA indica que se recomienda una descarga. El equipo está junto al paciente.",
          prompt: "¿Qué debe hacer el equipo antes y después de la descarga?",
          options: [
            "Asegurarse de que nadie toque a la persona, seguir la indicación del DEA y reanudar RCP de inmediato.",
            "Mantener contacto con la persona durante la descarga y esperar dos minutos.",
            "Retirar los parches y comprobar el pulso durante un minuto.",
            "Esperar a que la persona despierte antes de continuar."
          ],
          answer: 0,
          explanation: "Despeja a todos antes de la descarga y sigue la instrucción del DEA. Después de la descarga, reanuda inmediatamente la RCP y continúa siguiendo las indicaciones del dispositivo."
        }
      ]
    },
    {
      title: "Salva al paciente",
      subtitle: "Simulación final · 5 retos",
      label: "NIVEL 06 · SALVA AL PACIENTE",
      kind: "choice",
      questions: [
        {
          scenario: "Simulación final: un adulto cae al suelo en un área de entrenamiento. La escena está despejada; no responde y no respira normalmente.",
          prompt: "¿Qué acción inicial es prioritaria ahora?",
          options: [
            "Activar el sistema de emergencias, pedir un DEA e iniciar la respuesta sin demora.",
            "Esperar cinco minutos para confirmar que no se recupera.",
            "Darle agua y mantenerlo sentado.",
            "Trasladarlo a una cama antes de pedir ayuda."
          ],
          answer: 0,
          explanation: "Activa emergencias, pide un DEA y comienza la respuesta indicada por tu formación y el protocolo local. No esperes ni des líquidos a una persona inconsciente."
        },
        {
          scenario: "Tu compañero ya activó emergencias y alguien va por el DEA. El adulto sigue sin responder y sin respiración normal.",
          prompt: "¿Dónde colocas las manos para las compresiones?",
          options: [
            "En el centro del pecho, sobre la mitad inferior del esternón.",
            "Sobre el abdomen, debajo de las costillas.",
            "En el lado izquierdo del pecho, directamente sobre las costillas.",
            "En la parte superior del cuello."
          ],
          answer: 0,
          explanation: "Para las compresiones de un adulto, coloca el talón de la mano en el centro del pecho, sobre la mitad inferior del esternón, y la otra mano encima."
        },
        {
          scenario: "Inicias compresiones. La líder del equipo observa frecuencia, profundidad y retroceso del pecho.",
          prompt: "¿Qué objetivo de frecuencia debes mantener?",
          options: [
            "100–120 compresiones por minuto, con profundidad de 5–6 cm y expansión completa.",
            "Menos de 60 compresiones por minuto para evitar cansancio.",
            "Más de 140 compresiones por minuto, sin permitir expansión.",
            "Compresiones a cualquier ritmo; basta con no detenerse."
          ],
          answer: 0,
          explanation: "Para un adulto, mantén 100–120 por minuto, comprime al menos 5 cm evitando superar 6 cm, deja que el pecho se expanda completamente y limita las pausas."
        },
        {
          scenario: "Llega el DEA. Tras colocar los parches, el dispositivo anuncia que analizará el ritmo.",
          prompt: "¿Qué debe hacer el equipo durante el análisis?",
          options: [
            "Despejar a la persona: nadie debe tocarla y todos deben seguir las indicaciones del DEA.",
            "Mantener las compresiones mientras el DEA analiza.",
            "Desconectar el DEA y continuar como antes.",
            "Retirar los parches para que el dispositivo pueda analizar."
          ],
          answer: 0,
          explanation: "Durante el análisis nadie debe tocar a la persona. Asegúrate de que el área esté despejada y sigue exactamente las indicaciones del DEA."
        },
        {
          scenario: "El DEA administra una descarga y anuncia que se puede continuar con la reanimación.",
          prompt: "¿Cuál es el siguiente paso?",
          options: [
            "Reanudar inmediatamente las compresiones y continuar siguiendo el DEA.",
            "Esperar a que la persona se despierte antes de tocarla.",
            "Retirar los parches y finalizar la intervención.",
            "Comprobar el pulso durante un minuto antes de reanudar."
          ],
          answer: 0,
          explanation: "Reanuda la RCP inmediatamente después de la descarga y sigue las indicaciones del DEA. Continúa hasta que el equipo indique otra cosa, llegue ayuda o la persona muestre signos de vida."
        }
      ]
    }
  ];

  var sortCorrectOrder = [0, 1, 2, 3, 4];
  var sortItems = [];
  var levelIndex = 0;
  var questionIndex = 0;
  var score = 0;
  var lives = 3;
  var completed = 0;
  var secondsLeft = 15;
  var timerId = null;
  var soundEnabled = true;
  var audioContext = null;
  var musicTimer = null;
  var musicStep = 0;
  var lastCorrectPosition = -1;
  var locked = false;
  var rescuerX = 0;
  var rescuerY = 0;
  var dragState = null;
  var totalChallenges = levels.reduce(function (total, level) {
    return total + level.questions.length;
  }, 0);

  var welcomeScreen = document.getElementById("welcome-screen");
  var challengeScreen = document.getElementById("challenge-screen");
  var endScreen = document.getElementById("end-screen");
  var answerArea = document.getElementById("answer-area");
  var continueButton = document.getElementById("continue-button");
  var timerCircle = document.getElementById("timer-circle");
  var rescueScene = document.querySelector(".rescue-scene");
  var rescuerPlayer = document.getElementById("rescuer-player");
  var movementStatus = document.getElementById("movement-status");
  var compressionButton = document.getElementById("compression-button");

  function getCurrentLevel() {
    return levels[levelIndex];
  }

  function getCurrentQuestion() {
    return getCurrentLevel().questions[questionIndex];
  }

  function setRescuerPosition(x, y) {
    rescuerX = Math.max(-90, Math.min(120, x));
    rescuerY = Math.max(-16, Math.min(18, y));
    rescuerPlayer.setAttribute("transform", "translate(" + rescuerX + " " + rescuerY + ")");
    var closeToPatient = Math.abs(rescuerX) <= 20 && Math.abs(rescuerY) <= 12;
    movementStatus.textContent = closeToPatient
      ? "¡Está junto al maniquí! Pulsa R o «Practicar RCP»."
      : "Muévela hacia la izquierda para acercarla al paciente.";
    rescuerPlayer.setAttribute("aria-label", closeToPatient
      ? "Compañera junto al maniquí. Pulsa R para practicar RCP."
      : "Compañera de RCP. Arrastra o usa las flechas para acercarla al maniquí.");
  }

  function moveRescuer(direction) {
    if (challengeScreen.classList.contains("hidden") || locked) return;
    var step = 18;
    if (direction === "up") setRescuerPosition(rescuerX, rescuerY - step);
    if (direction === "down") setRescuerPosition(rescuerX, rescuerY + step);
    if (direction === "left") setRescuerPosition(rescuerX - step, rescuerY);
    if (direction === "right") setRescuerPosition(rescuerX + step, rescuerY);
  }

  function practiceCompression() {
    if (challengeScreen.classList.contains("hidden") || locked) return;
    if (Math.abs(rescuerX) > 20 || Math.abs(rescuerY) > 12) {
      movementStatus.textContent = "Acerca a tu compañera al maniquí antes de comprimir.";
      return;
    }
    var scene = document.querySelector(".case-art");
    scene.classList.remove("compression-hit");
    void scene.getBoundingClientRect();
    scene.classList.add("compression-hit");
    tone(115, .12, "sine");
    movementStatus.textContent = "¡Compresión simulada! Mantén un ritmo de 100–120 por minuto.";
    window.setTimeout(function () {
      scene.classList.remove("compression-hit");
    }, 520);
  }

  function toScenePoint(event) {
    var point = rescueScene.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    return point.matrixTransform(rescueScene.getScreenCTM().inverse());
  }

  function initAudio() {
    if (!soundEnabled) return;
    var AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) return;
    if (!audioContext) audioContext = new AudioCtor();
    if (audioContext.state === "suspended") audioContext.resume();
  }

  function tone(frequency, duration, waveform) {
    if (!soundEnabled) return;
    initAudio();
    if (!audioContext) return;
    var oscillator = audioContext.createOscillator();
    var gain = audioContext.createGain();
    oscillator.type = waveform || "sine";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(.055, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + duration);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  }

  function playSound(kind) {
    if (!soundEnabled) return;
    if (kind === "correct") {
      tone(660, .12);
      setTimeout(function () { tone(880, .17); }, 100);
    } else {
      tone(210, .22, "triangle");
    }
  }

  function playMusicNote(frequency, duration, volume, waveform) {
    if (!soundEnabled || !audioContext) return;
    var oscillator = audioContext.createOscillator();
    var gain = audioContext.createGain();
    oscillator.type = waveform || "sine";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(volume, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + duration);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  }

  function playKick() {
    if (!soundEnabled || !audioContext) return;
    var now = audioContext.currentTime;
    var oscillator = audioContext.createOscillator();
    var gain = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(145, now);
    oscillator.frequency.exponentialRampToValueAtTime(48, now + .13);
    gain.gain.setValueAtTime(.2, now);
    gain.gain.exponentialRampToValueAtTime(.001, now + .16);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + .17);
  }

  function playNoise(duration, cutoff, volume) {
    if (!soundEnabled || !audioContext) return;
    var now = audioContext.currentTime;
    var buffer = audioContext.createBuffer(1, Math.ceil(audioContext.sampleRate * duration), audioContext.sampleRate);
    var samples = buffer.getChannelData(0);
    for (var i = 0; i < samples.length; i += 1) samples[i] = Math.random() * 2 - 1;
    var source = audioContext.createBufferSource();
    var filter = audioContext.createBiquadFilter();
    var gain = audioContext.createGain();
    source.buffer = buffer;
    filter.type = "highpass";
    filter.frequency.value = cutoff;
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(.001, now + duration);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(audioContext.destination);
    source.start(now);
    source.stop(now + duration);
  }

  function playClap() {
    playNoise(.13, 1250, .045);
    playNoise(.09, 1900, .022);
  }

  function startMusic() {
    if (!soundEnabled || musicTimer !== null) return;
    initAudio();
    if (!audioContext) return;
    var beatMs = 60000 / 96 / 4;
    var kickSteps = [0, 6, 8, 14];
    var clapSteps = [4, 12];
    var melodySteps = [0, 3, 6, 8, 11, 14];
    var melody = [523.25, 392, 440, 349.23, 493.88, 392];
    var bass = [65.41, 65.41, 73.42, 58.27];
    musicTimer = setInterval(function () {
      var step = musicStep % 16;
      if (kickSteps.indexOf(step) !== -1) {
        playKick();
        playMusicNote(bass[Math.floor(step / 4) % bass.length], .23, .028, "triangle");
      }
      if (clapSteps.indexOf(step) !== -1) playClap();
      if (step % 2 === 0) playNoise(.035, 6800, step % 4 === 2 ? .009 : .014);
      if (step === 7 || step === 15) playNoise(.075, 7200, .012);
      if (melodySteps.indexOf(step) !== -1) {
        var noteIndex = melodySteps.indexOf(step);
        playMusicNote(melody[noteIndex], .19, .013, "triangle");
      }
      musicStep += 1;
    }, beatMs);
  }

  function stopMusic() {
    if (musicTimer !== null) {
      clearInterval(musicTimer);
      musicTimer = null;
    }
  }

  function updateScore() {
    document.getElementById("score").textContent = String(score).padStart(3, "0");
  }

  function updateLives() {
    var livesEl = document.getElementById("lives");
    livesEl.setAttribute("aria-label", lives + (lives === 1 ? " vida" : " vidas"));
    Array.prototype.forEach.call(livesEl.children, function (heart, index) {
      heart.classList.toggle("lost", index >= lives);
      heart.setAttribute("aria-hidden", "true");
    });
  }

  function updateProgress() {
    var percent = Math.round((completed / totalChallenges) * 100);
    document.getElementById("progress-fill").style.width = percent + "%";
    document.getElementById("progress-label").textContent = percent + "% completado";
    document.getElementById("level-label").textContent = levelIndex < levels.length
      ? "NIVEL " + String(levelIndex + 1).padStart(2, "0") + " / 06"
      : "MISIÓN COMPLETADA";
    Array.prototype.forEach.call(document.querySelectorAll(".level-item"), function (item) {
      var index = Number(item.getAttribute("data-level"));
      item.classList.toggle("is-current", index === levelIndex && levelIndex < levels.length);
      item.classList.toggle("is-done", index < levelIndex || (levelIndex === levels.length && index < levels.length));
    });
  }

  function stopTimer() {
    if (timerId !== null) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  function updateTimerDisplay() {
    document.getElementById("timer-value").textContent = secondsLeft;
    timerCircle.style.strokeDashoffset = String(151 * (1 - secondsLeft / 15));
    document.getElementById("timer").classList.toggle("is-low", secondsLeft <= 5);
  }

  function startTimer() {
    stopTimer();
    secondsLeft = 15;
    updateTimerDisplay();
    timerId = setInterval(function () {
      secondsLeft -= 1;
      updateTimerDisplay();
      if (secondsLeft <= 0) {
        stopTimer();
        handleTimeout();
      }
    }, 1000);
  }

  function updateQuestionCounter() {
    var totalForLevel = getCurrentLevel().questions.length;
    document.getElementById("question-counter").textContent =
      "RETO " + (questionIndex + 1) + " DE " + totalForLevel;
  }

  function renderLevelHeader() {
    var level = getCurrentLevel();
    document.getElementById("scenario-label").textContent = level.label;
    document.getElementById("challenge-title").textContent = level.title;
    document.getElementById("prompt-kicker").textContent =
      level.kind === "sort" ? "RETO DE SECUENCIA" : "TU DECISIÓN";
    document.getElementById("continue-button").textContent =
      isLastChallenge() ? "Ver resultados →" : "Continuar →";
    updateQuestionCounter();
    updateProgress();
  }

  function isLastChallenge() {
    return levelIndex === levels.length - 1 &&
      questionIndex === getCurrentLevel().questions.length - 1;
  }

  function renderChoiceQuestion(question) {
    var letters = ["A", "B", "C", "D"];
    answerArea.className = "answer-area";
    answerArea.replaceChildren();
    var optionOrder = shuffle(question.options.map(function (option, index) {
      return index;
    }));
    var correctPosition = optionOrder.indexOf(question.answer);
    if (optionOrder.length > 1 && correctPosition === lastCorrectPosition) {
      var swapPosition = (correctPosition + 1 + Math.floor(Math.random() * (optionOrder.length - 1))) % optionOrder.length;
      var swap = optionOrder[correctPosition];
      optionOrder[correctPosition] = optionOrder[swapPosition];
      optionOrder[swapPosition] = swap;
      correctPosition = swapPosition;
    }
    lastCorrectPosition = correctPosition;
    optionOrder.forEach(function (optionIndex, position) {
      var option = question.options[optionIndex];
      var button = document.createElement("button");
      button.type = "button";
      button.className = "answer-button";
      button.setAttribute("data-option-index", optionIndex);
      var letter = document.createElement("span");
      letter.className = "answer-letter";
      letter.textContent = letters[position];
      var text = document.createElement("span");
      text.className = "answer-text";
      text.textContent = option;
      var arrow = document.createElement("span");
      arrow.className = "answer-arrow";
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "↗";
      button.appendChild(letter);
      button.appendChild(text);
      button.appendChild(arrow);
      button.addEventListener("click", function () {
        answerChoice(optionIndex, question);
      });
      answerArea.appendChild(button);
    });
  }

  function shuffle(items) {
    var result = items.slice();
    for (var i = result.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = result[i];
      result[i] = result[j];
      result[j] = temp;
    }
    return result;
  }

  function renderSortQuestion(level) {
    answerArea.className = "answer-area sort-mode";
    answerArea.replaceChildren();
    var instructions = document.createElement("p");
    instructions.className = "sort-instructions";
    instructions.textContent = "Usa las flechas para ordenar los pasos. ¡El tiempo sigue corriendo!";
    answerArea.appendChild(instructions);

    var list = document.createElement("div");
    list.className = "sort-list";
    list.setAttribute("role", "list");
    answerArea.appendChild(list);

    sortItems.forEach(function (stepIndex, position) {
      var item = document.createElement("div");
      item.className = "sort-item";
      item.setAttribute("role", "listitem");
      var number = document.createElement("span");
      number.className = "sort-index";
      number.textContent = String(position + 1).padStart(2, "0");
      var text = document.createElement("span");
      text.className = "sort-text";
      text.textContent = level.steps[stepIndex];
      var controls = document.createElement("span");
      controls.className = "sort-controls";
      controls.appendChild(createSortButton("↑", "Subir paso", position, -1));
      controls.appendChild(createSortButton("↓", "Bajar paso", position, 1));
      item.appendChild(number);
      item.appendChild(text);
      item.appendChild(controls);
      list.appendChild(item);
    });

    var actions = document.createElement("div");
    actions.className = "sort-actions";
    var resetButton = document.createElement("button");
    resetButton.type = "button";
    resetButton.className = "button button-secondary";
    resetButton.textContent = "Mezclar";
    resetButton.addEventListener("click", function () {
      sortItems = shuffle(sortCorrectOrder);
      renderSortQuestion(level);
    });
    var checkButton = document.createElement("button");
    checkButton.type = "button";
    checkButton.className = "button button-primary";
    checkButton.textContent = "Confirmar orden ✓";
    checkButton.addEventListener("click", function () { checkSortOrder(level); });
    actions.appendChild(resetButton);
    actions.appendChild(checkButton);
    answerArea.appendChild(actions);

    var hint = document.createElement("p");
    hint.className = "sort-feedback hidden";
    hint.id = "sort-hint";
    answerArea.appendChild(hint);
  }

  function createSortButton(symbol, label, position, direction) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "sort-button";
    button.textContent = symbol;
    button.setAttribute("aria-label", label);
    var target = position + direction;
    button.disabled = target < 0 || target >= sortItems.length;
    button.addEventListener("click", function () {
      if (target < 0 || target >= sortItems.length) return;
      var temp = sortItems[position];
      sortItems[position] = sortItems[target];
      sortItems[target] = temp;
      renderSortQuestion(getCurrentLevel());
    });
    return button;
  }

  function renderQuestion() {
    locked = false;
    welcomeScreen.classList.add("hidden");
    endScreen.classList.add("hidden");
    challengeScreen.classList.remove("hidden");
    continueButton.classList.add("hidden");
    var feedback = document.getElementById("feedback");
    feedback.classList.add("hidden");
    feedback.classList.remove("is-wrong");
    var level = getCurrentLevel();
    var question = getCurrentQuestion();
    renderLevelHeader();
    document.getElementById("scenario-text").textContent = question.scenario;
    document.getElementById("prompt-text").textContent = question.prompt;
    document.querySelector(".case-art").classList.toggle("is-compressing", levelIndex >= 2);

    if (level.kind === "sort") {
      sortItems = shuffle(sortCorrectOrder);
      renderSortQuestion(level);
    } else {
      renderChoiceQuestion(question);
    }
    startTimer();
  }

  function showFeedback(isCorrect, message, timedOut) {
    var feedback = document.getElementById("feedback");
    feedback.classList.remove("hidden", "is-wrong");
    if (!isCorrect) feedback.classList.add("is-wrong");
    document.getElementById("feedback-icon").textContent = isCorrect ? "✓" : (timedOut ? "⌛" : "!");
    document.getElementById("feedback-title").textContent = isCorrect
      ? "¡Excelente! +10 puntos"
      : (timedOut ? "¡Se acabó el tiempo!" : "Reto fallido · Pierdes una vida");
    document.getElementById("feedback-text").textContent = message;
  }

  function markChallengeComplete() {
    completed += 1;
    updateProgress();
  }

  function answerChoice(selectedIndex, question) {
    if (locked) return;
    locked = true;
    stopTimer();
    var correct = selectedIndex === question.answer;
    var buttons = answerArea.querySelectorAll(".answer-button");
    Array.prototype.forEach.call(buttons, function (button, index) {
      button.disabled = true;
      var optionIndex = Number(button.getAttribute("data-option-index"));
      if (optionIndex === question.answer) button.classList.add("is-correct");
      if (optionIndex === selectedIndex && !correct) button.classList.add("is-wrong");
    });

    if (correct) {
      score += 10;
      updateScore();
      playSound("correct");
      showFeedback(true, question.explanation, false);
    } else {
      lives -= 1;
      updateLives();
      playSound("wrong");
      showFeedback(false, question.explanation, false);
    }
    markChallengeComplete();
    continueButton.classList.remove("hidden");
    continueButton.textContent = lives === 0 ? "Ver resultados →" : (isLastChallenge() ? "Ver resultados →" : "Continuar →");
  }

  function checkSortOrder(level) {
    if (locked) return;
    var isCorrect = sortItems.every(function (step, index) {
      return step === sortCorrectOrder[index];
    });
    var hint = document.getElementById("sort-hint");
    if (isCorrect) {
      locked = true;
      stopTimer();
      score += 10;
      updateScore();
      playSound("correct");
      showFeedback(true, getCurrentQuestion().explanation, false);
      markChallengeComplete();
      Array.prototype.forEach.call(answerArea.querySelectorAll("button"), function (button) {
        button.disabled = true;
      });
      continueButton.classList.remove("hidden");
      continueButton.textContent = lives === 0 ? "Ver resultados →" : (isLastChallenge() ? "Ver resultados →" : "Continuar →");
    } else {
      lives -= 1;
      updateLives();
      playSound("wrong");
      hint.textContent = "Ese orden todavía no es correcto. Pierdes una vida; puedes reorganizar los pasos mientras quede tiempo.";
      hint.classList.remove("hidden");
      if (lives === 0) {
        locked = true;
        stopTimer();
        showFeedback(false, getCurrentQuestion().explanation, false);
        Array.prototype.forEach.call(answerArea.querySelectorAll("button"), function (button) {
          button.disabled = true;
        });
        markChallengeComplete();
        continueButton.classList.remove("hidden");
        continueButton.textContent = "Ver resultados →";
      }
    }
  }

  function handleTimeout() {
    if (locked) return;
    locked = true;
    lives -= 1;
    updateLives();
    playSound("wrong");
    var explanation = getCurrentQuestion().explanation;
    if (getCurrentLevel().kind === "sort") {
      explanation += " El orden correcto era: " + getCurrentLevel().steps.join(" → ");
    }
    showFeedback(false, explanation, true);
    Array.prototype.forEach.call(answerArea.querySelectorAll("button"), function (button) {
      button.disabled = true;
    });
    markChallengeComplete();
    continueButton.classList.remove("hidden");
    continueButton.textContent = lives === 0 ? "Ver resultados →" : (isLastChallenge() ? "Ver resultados →" : "Continuar →");
  }

  function goNext() {
    if (lives <= 0) {
      showEnd(false);
      return;
    }
    if (questionIndex < getCurrentLevel().questions.length - 1) {
      questionIndex += 1;
      renderQuestion();
      return;
    }
    levelIndex += 1;
    questionIndex = 0;
    if (levelIndex >= levels.length) {
      showEnd(true);
      return;
    }
    renderQuestion();
  }

  function showEnd(won) {
    stopTimer();
    challengeScreen.classList.add("hidden");
    welcomeScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");
    endScreen.classList.toggle("is-loss", !won);
    document.getElementById("end-medal").textContent = won ? "✦" : "♥";
    document.getElementById("end-kicker").textContent = won ? "MISIÓN COMPLETADA" : "FIN DE LA MISIÓN";
    document.getElementById("end-title").textContent = won ? "¡Vida salvada!" : "No te rindas";
    document.getElementById("end-copy").textContent = won
      ? "Completaste los seis niveles y la simulación final. Repasa siempre los protocolos locales y sigue practicando con supervisión."
      : "Te quedaste sin vidas. Revisa las explicaciones, repasa la secuencia y vuelve a intentarlo.";
    document.getElementById("final-score").textContent = score;
    document.getElementById("final-lives").textContent = lives + " / 3";
    document.getElementById("final-count").textContent = completed + " / " + totalChallenges;
    document.getElementById("level-label").textContent = won ? "MISIÓN COMPLETADA" : "SIMULACIÓN FINALIZADA";
    if (won) {
      document.getElementById("progress-fill").style.width = "100%";
      document.getElementById("progress-label").textContent = "100% completado";
      updateLevelListOnWin();
      playSound("correct");
      celebrate();
    }
  }

  function updateLevelListOnWin() {
    Array.prototype.forEach.call(document.querySelectorAll(".level-item"), function (item) {
      item.classList.remove("is-current");
      item.classList.add("is-done");
    });
  }

  function celebrate() {
    var colors = ["#58e6c1", "#ff7195", "#ffb85c", "#70a8ff", "#c5a4ff"];
    for (var i = 0; i < 48; i += 1) {
      var piece = document.createElement("span");
      piece.className = "confetti";
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.backgroundColor = colors[i % colors.length];
      piece.style.animationDelay = Math.random() * .8 + "s";
      piece.style.animationDuration = (1.7 + Math.random() * 1.3) + "s";
      document.body.appendChild(piece);
      setTimeout(function (node) {
        return function () { node.remove(); };
      }(piece), 3500);
    }
  }

  function startGame() {
    initAudio();
    startMusic();
    levelIndex = 0;
    questionIndex = 0;
    score = 0;
    lives = 3;
    completed = 0;
    locked = false;
    lastCorrectPosition = -1;
    setRescuerPosition(72, 0);
    updateScore();
    updateLives();
    updateProgress();
    renderQuestion();
  }

  document.getElementById("start-button").addEventListener("click", startGame);
  document.getElementById("restart-button").addEventListener("click", startGame);
  continueButton.addEventListener("click", goNext);
  compressionButton.addEventListener("click", practiceCompression);
  Array.prototype.forEach.call(document.querySelectorAll("[data-move]"), function (button) {
    button.addEventListener("click", function () {
      moveRescuer(button.getAttribute("data-move"));
    });
  });

  rescuerPlayer.addEventListener("pointerdown", function (event) {
    if (challengeScreen.classList.contains("hidden") || locked) return;
    event.preventDefault();
    var point = toScenePoint(event);
    dragState = {
      pointerId: event.pointerId,
      startPoint: point,
      startX: rescuerX,
      startY: rescuerY
    };
    rescuerPlayer.classList.add("is-dragging");
    if (typeof rescuerPlayer.setPointerCapture === "function") {
      rescuerPlayer.setPointerCapture(event.pointerId);
    }
  });
  rescuerPlayer.addEventListener("pointermove", function (event) {
    if (!dragState || event.pointerId !== dragState.pointerId) return;
    var point = toScenePoint(event);
    setRescuerPosition(
      dragState.startX + point.x - dragState.startPoint.x,
      dragState.startY + point.y - dragState.startPoint.y
    );
  });
  function finishRescuerDrag(event) {
    if (!dragState || event.pointerId !== dragState.pointerId) return;
    if (typeof rescuerPlayer.hasPointerCapture === "function" &&
        rescuerPlayer.hasPointerCapture(event.pointerId)) {
      rescuerPlayer.releasePointerCapture(event.pointerId);
    }
    dragState = null;
    rescuerPlayer.classList.remove("is-dragging");
  }
  rescuerPlayer.addEventListener("pointerup", finishRescuerDrag);
  rescuerPlayer.addEventListener("pointercancel", finishRescuerDrag);

  document.addEventListener("keydown", function (event) {
    var key = event.key.toLowerCase();
    var direction = {
      arrowup: "up",
      w: "up",
      arrowdown: "down",
      s: "down",
      arrowleft: "left",
      a: "left",
      arrowright: "right",
      d: "right"
    }[key];
    if (direction && !challengeScreen.classList.contains("hidden")) {
      event.preventDefault();
      moveRescuer(direction);
    } else if (key === "r" && !challengeScreen.classList.contains("hidden")) {
      event.preventDefault();
      practiceCompression();
    } else if ((key === "enter" || key === " ") && event.target === rescuerPlayer) {
      event.preventDefault();
      practiceCompression();
    }
  });

  document.getElementById("sound-toggle").addEventListener("click", function () {
    soundEnabled = !soundEnabled;
    document.getElementById("sound-label").textContent = soundEnabled ? "Música: sí" : "Música: no";
    this.setAttribute("aria-pressed", soundEnabled ? "true" : "false");
    this.setAttribute("aria-label", soundEnabled ? "Desactivar música y efectos" : "Activar música y efectos");
    if (soundEnabled) {
      initAudio();
      startMusic();
      playSound("correct");
    } else {
      stopMusic();
    }
  });

  updateScore();
  updateLives();
  updateProgress();
}());
