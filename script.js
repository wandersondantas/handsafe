// Base de dados simulada de utilizadores
const baseDadosUtilizadores = {
    'ana.silva': {
        password: 'senha123',
        nome: 'Ana Silva',
        funcao: 'Enfermeira',
        setor: 'UCI',
        numero: 'ENF12345'
    },
    'joao.costa': {
        password: 'senha123',
        nome: 'João Costa',
        funcao: 'Médico',
        setor: 'Urgência',
        numero: 'MED67890'
    },
    'maria.santos': {
        password: 'senha123',
        nome: 'Maria Santos',
        funcao: 'Auxiliar de Ação Médica',
        setor: 'Medicina Interna',
        numero: 'AUX24680'
    },
    'pedro.alves': {
        password: 'senha123',
        nome: 'Pedro Alves',
        funcao: 'Fisioterapeuta',
        setor: 'Ortopedia',
        numero: 'FIS13579'
    },
    'carla.ferreira': {
        password: 'senha123',
        nome: 'Carla Ferreira',
        funcao: 'Farmacêutica',
        setor: 'Farmácia Hospitalar',
        numero: 'FARM98765'
    }
};

const miniGameQuestions = [
    {
        id: 1,
        text: 'Você entra no quarto do paciente João para verificar a temperatura.',
        options: [
            { label: 'Sim, antes do contato.', correct: true },
            { label: 'Não, é só medir.', correct: false }
        ]
    },
    {
        id: 2,
        text: 'Após ajudar a paciente Maria a ir ao banheiro, o que faz?',
        options: [
            { label: 'Lavo as mãos depois do contato.', correct: true },
            { label: 'Não é necessário, usei luvas.', correct: false }
        ]
    },
    {
        id: 3,
        text: 'Vai preparar uma medicação intravenosa no posto de enfermagem.',
        options: [
            { label: 'Sim, antes de manipular medicamentos.', correct: true },
            { label: 'Não, estou com as mãos limpas.', correct: false }
        ]
    },
    {
        id: 4,
        text: 'Antes de calçar as luvas para um curativo estéril.',
        options: [
            { label: 'Sim, antes de colocar as luvas.', correct: true },
            { label: 'Não, já vou proteger as mãos.', correct: false }
        ]
    },
    {
        id: 5,
        text: 'Ao retirar as luvas após o curativo.',
        options: [
            { label: 'Sim, depois de retirar as luvas.', correct: true },
            { label: 'Não, já usei proteção.', correct: false }
        ]
    },
    {
        id: 6,
        text: 'Antes de tocar no paciente para aferir a pressão arterial.',
        options: [
            { label: 'Sim, antes do contato.', correct: true },
            { label: 'Não, não há risco.', correct: false }
        ]
    },
    {
        id: 7,
        text: 'Após ajustar o cateter urinário do paciente.',
        options: [
            { label: 'Sim, depois do contato com fluidos corporais.', correct: true },
            { label: 'Não, usei luvas.', correct: false }
        ]
    },
    {
        id: 8,
        text: 'Vai colocar o tabuleiro de refeições para o paciente.',
        options: [
            { label: 'Sim, antes do contato com objetos próximos ao doente.', correct: true },
            { label: 'Não, não encostarei nele.', correct: false }
        ]
    },
    {
        id: 9,
        text: 'Ao sair do quarto de isolamento.',
        options: [
            { label: 'Sim, depois de deixar o quarto.', correct: true },
            { label: 'Não, já tirei a bata.', correct: false }
        ]
    },
    {
        id: 10,
        text: 'Antes de ajudar o paciente a mudar de posição na cama.',
        options: [
            { label: 'Sim, antes do contato direto.', correct: true },
            { label: 'Não, não há risco de contaminação.', correct: false }
        ]
    },
    {
        id: 11,
        text: 'Após espirrar ou tossir, mesmo usando máscara.',
        options: [
            { label: 'Sim, imediatamente depois.', correct: true },
            { label: 'Não, usei máscara.', correct: false }
        ]
    },
    {
        id: 12,
        text: 'Antes de preparar uma bandeja com seringas e medicação oral.',
        options: [
            { label: 'Sim, antes da manipulação.', correct: true },
            { label: 'Não, já higienizei hoje.', correct: false }
        ]
    },
    {
        id: 13,
        text: 'Depois de tocar na cama, grades ou mesa do paciente.',
        options: [
            { label: 'Sim, após contato com superfícies próximas.', correct: true },
            { label: 'Não, não toquei no paciente.', correct: false }
        ]
    },
    {
        id: 14,
        text: 'Antes de avaliar o curativo cirúrgico de um paciente.',
        options: [
            { label: 'Sim, antes do contato direto.', correct: true },
            { label: 'Não, o curativo está limpo.', correct: false }
        ]
    },
    {
        id: 15,
        text: 'Após colocar compressas usadas no lixo hospitalar.',
        options: [
            { label: 'Sim, após contato com material contaminado.', correct: true },
            { label: 'Não, usei pinça.', correct: false }
        ]
    },
    {
        id: 16,
        text: 'Antes de inserir um cateter venoso periférico.',
        options: [
            { label: 'Sim, antes de procedimento asséptico.', correct: true },
            { label: 'Não, vou usar luvas.', correct: false }
        ]
    },
    {
        id: 17,
        text: 'Depois de retirar o cateter venoso do paciente.',
        options: [
            { label: 'Sim, após contato com sangue.', correct: true },
            { label: 'Não, o cateter estava limpo.', correct: false }
        ]
    },
    {
        id: 18,
        text: 'Antes de manipular o ventilador mecânico.',
        options: [
            { label: 'Sim, antes do contato com equipamento próximo ao paciente.', correct: true },
            { label: 'Não, o ventilador é estéril.', correct: false }
        ]
    },
    {
        id: 19,
        text: 'Após atender vários pacientes consecutivos.',
        options: [
            { label: 'Sim, entre cada paciente.', correct: true },
            { label: 'Não, apenas no final do turno.', correct: false }
        ]
    },
    {
        id: 20,
        text: 'Após tocar em documentos e computador da enfermagem.',
        options: [
            { label: 'Sim, antes de novo contato com paciente.', correct: true },
            { label: 'Não, são superfícies limpas.', correct: false }
        ]
    },
    {
        id: 21,
        text: 'Antes de colocar luvas para manipular secreções.',
        options: [
            { label: 'Sim, antes de calçar as luvas.', correct: true },
            { label: 'Não, as luvas bastam.', correct: false }
        ]
    },
    {
        id: 22,
        text: 'Após ajudar paciente a assoar o nariz.',
        options: [
            { label: 'Sim, após contato com secreções.', correct: true },
            { label: 'Não, limpei com lenço.', correct: false }
        ]
    },
    {
        id: 23,
        text: 'Antes de trocar um curativo de ferida aberta.',
        options: [
            { label: 'Sim, antes do procedimento.', correct: true },
            { label: 'Não, já fiz assepsia na bancada.', correct: false }
        ]
    },
    {
        id: 24,
        text: 'Após tocar no cabelo ou rosto durante o plantão.',
        options: [
            { label: 'Sim, antes de retomar o atendimento.', correct: true },
            { label: 'Não, é um gesto inofensivo.', correct: false }
        ]
    },
    {
        id: 25,
        text: 'Antes de colocar máscara cirúrgica.',
        options: [
            { label: 'Sim, antes de ajustar o EPI.', correct: true },
            { label: 'Não, as mãos estão visivelmente limpas.', correct: false }
        ]
    },
    {
        id: 26,
        text: 'Após retirar a máscara cirúrgica.',
        options: [
            { label: 'Sim, imediatamente depois.', correct: true },
            { label: 'Não, a máscara protegeu.', correct: false }
        ]
    },
    {
        id: 27,
        text: 'Antes de preparar uma solução intravenosa.',
        options: [
            { label: 'Sim, antes da manipulação de medicação.', correct: true },
            { label: 'Não, não tocarei diretamente.', correct: false }
        ]
    },
    {
        id: 28,
        text: 'Após ajudar o paciente a usar o urinol.',
        options: [
            { label: 'Sim, depois do contato com fluidos.', correct: true },
            { label: 'Não, estava de luvas.', correct: false }
        ]
    },
    {
        id: 29,
        text: 'Antes de entrar no quarto de isolamento com o carrinho de medicação.',
        options: [
            { label: 'Sim, antes de cruzar o ambiente.', correct: true },
            { label: 'Não, não tocaria em nada.', correct: false }
        ]
    },
    {
        id: 30,
        text: 'Após retirar os equipamentos de proteção individual (EPI).',
        options: [
            { label: 'Sim, como última etapa de segurança.', correct: true },
            { label: 'Não, o EPI já evitou contaminação.', correct: false }
        ]
    }
];

let userData = {
    username: '',
    nome: '',
    funcao: '',
    setor: '',
    numero: '',
    totalCheckins: 0,
    higienizacoesConfirmadas: 0,
    ultimoCheckIn: null,
    historico: [],
    miniGameAnswers: []
};

let currentUser = null;
let miniGameState = {
    currentIndex: 0
};

// Carregar dados salvos por utilizador
function carregarDados(username) {
    const saved = localStorage.getItem(`hygieneData_${username}`);
    if (saved) {
        userData = JSON.parse(saved);
        if (!userData.miniGameAnswers) {
            userData.miniGameAnswers = [];
        }
        return true;
    }
    return false;
}

// Salvar dados por utilizador
function salvarDados() {
    if (userData.username) {
        localStorage.setItem(`hygieneData_${userData.username}`, JSON.stringify(userData));
    }
}

function tentarLogin() {
    const username = document.getElementById('username').value.trim().toLowerCase();
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Verificar na base de dados
    const user = baseDadosUtilizadores[username];

    if (!user) {
        alert('❌ Nome de utilizador não encontrado!');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        return;
    }

    if (user.password !== password) {
        alert('❌ Palavra-passe incorreta!');
        document.getElementById('password').value = '';
        return;
    }

    // Login bem-sucedido
    currentUser = username;

    // Carregar dados existentes ou criar novos
    if (!carregarDados(username)) {
        // Novo utilizador - inicializar dados
        userData = {
            username: username,
            nome: user.nome,
            funcao: user.funcao,
            setor: user.setor,
            numero: user.numero,
            totalCheckins: 0,
            higienizacoesConfirmadas: 0,
            ultimoCheckIn: null,
            historico: [],
            miniGameAnswers: []
        };
    }

    mostrarModal();
}

function mostrarModal() {
    document.getElementById('hygieneModal').style.display = 'block';
}

function confirmarHigienizacao(higienizou) {
    document.getElementById('hygieneModal').style.display = 'none';

    userData.totalCheckins++;
    if (higienizou) {
        userData.higienizacoesConfirmadas++;
    }

    const agora = new Date();
    userData.ultimoCheckIn = agora.toISOString();

    // Adicionar ao histórico
    userData.historico.unshift({
        data: agora.toISOString(),
        higienizou: higienizou,
        tipo: 'Início de sessão no sistema'
    });

    // Manter apenas últimos 10 registros
    if (userData.historico.length > 10) {
        userData.historico = userData.historico.slice(0, 10);
    }

    salvarDados();
    mostrarDashboard();
}

function abrirMiniJogoModal() {
    if (!currentUser) {
        alert('Inicie sessão para acessar o minijogo.');
        return;
    }
    prepararMiniJogo();
    document.getElementById('miniGameModal').style.display = 'block';
}

function fecharMiniJogoModal() {
    document.getElementById('miniGameModal').style.display = 'none';
}

function prepararMiniJogo() {
    miniGameState.currentIndex = proximaPerguntaDisponivel();
    const feedback = document.getElementById('miniGameFeedback');
    feedback.textContent = '';
    feedback.className = 'mini-game-feedback';
    atualizarMiniGameUI();
}

function proximaPerguntaDisponivel() {
    const nextIndex = miniGameQuestions.findIndex(
        q => !userData.miniGameAnswers.some(answer => answer.questionId === q.id)
    );

    return nextIndex === -1 ? 0 : nextIndex;
}

function selecionarResposta(optionIndex) {
    if (!currentUser) return;

    const question = miniGameQuestions[miniGameState.currentIndex];
    const selectedOption = question.options[optionIndex];
    const resposta = {
        questionId: question.id,
        question: question.text,
        selected: selectedOption.label,
        correct: selectedOption.correct,
        timestamp: new Date().toISOString()
    };

    const existingIndex = userData.miniGameAnswers.findIndex(a => a.questionId === question.id);
    if (existingIndex >= 0) {
        userData.miniGameAnswers[existingIndex] = resposta;
    } else {
        userData.miniGameAnswers.push(resposta);
    }

    salvarDados();
    miniGameState.currentIndex = proximaPerguntaDisponivel();
    mostrarFeedback(selectedOption.correct);
    atualizarMiniGameUI();
}

function mostrarFeedback(isCorrect) {
    const feedback = document.getElementById('miniGameFeedback');
    feedback.textContent = isCorrect
        ? 'Boa! Essa é uma situação que exige higienização.'
        : 'Atenção! Esta situação também exige higienização das mãos.';
    feedback.className = `mini-game-feedback ${isCorrect ? 'success' : 'error'}`;
}

function atualizarMiniGameUI() {
    const total = miniGameQuestions.length;
    const respondidas = userData.miniGameAnswers.length;
    const acertos = userData.miniGameAnswers.filter(a => a.correct).length;
    const progressEl = document.getElementById('miniGameProgress');
    const scoreEl = document.getElementById('miniGameScore');
    const questionTextEl = document.getElementById('miniGameQuestionText');
    const optionA = document.getElementById('optionA');
    const optionB = document.getElementById('optionB');

    scoreEl.textContent = `Pontuação: ${acertos}/${respondidas}`;

    if (respondidas >= total) {
        progressEl.textContent = 'Todas as perguntas respondidas';
        questionTextEl.textContent = 'Parabéns! Você registrou as 30 situações de higienização.';
        optionA.textContent = 'Rever respostas';
        optionB.textContent = 'Reiniciar minijogo';
        optionA.disabled = true;
        optionB.disabled = true;
    } else {
        const question = miniGameQuestions[miniGameState.currentIndex];
        progressEl.textContent = `Pergunta ${miniGameState.currentIndex + 1} de ${total}`;
        questionTextEl.textContent = question.text;
        optionA.textContent = `A) ${question.options[0].label}`;
        optionB.textContent = `B) ${question.options[1].label}`;
        optionA.disabled = false;
        optionB.disabled = false;
    }

    renderHistoricoMinijogo();
}

function renderHistoricoMinijogo() {
    const historyList = document.getElementById('miniGameHistoryList');
    historyList.innerHTML = '';

    miniGameQuestions.forEach(question => {
        const answer = userData.miniGameAnswers.find(a => a.questionId === question.id);
        const item = document.createElement('div');
        item.className = 'history-item';
        item.innerHTML = `
            <div class="history-question">${question.id}️⃣ ${question.text}</div>
            <div class="history-answer ${answer ? (answer.correct ? 'correct' : 'incorrect') : ''}">
                ${answer ? `${answer.selected}` : 'Ainda não respondida'}
            </div>
        `;
        historyList.appendChild(item);
    });
}

function reiniciarMiniJogo() {
    userData.miniGameAnswers = [];
    miniGameState.currentIndex = 0;
    document.getElementById('miniGameFeedback').textContent = '';
    salvarDados();
    atualizarMiniGameUI();
}

function mostrarDashboard() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('miniGameBanner').style.display = 'flex';

    // Atualizar informações do usuário
    document.getElementById('welcomeMessage').textContent = `Bem-vindo(a), ${userData.nome}!`;
    document.getElementById('userDetails').textContent = `${userData.funcao} - ${userData.setor} | Nº ${userData.numero}`;

    // Atualizar estatísticas
    document.getElementById('totalCheckins').textContent = userData.totalCheckins;
    document.getElementById('higienizacoes').textContent = userData.higienizacoesConfirmadas;

    const taxa = userData.totalCheckins > 0
        ? Math.round((userData.higienizacoesConfirmadas / userData.totalCheckins) * 100)
        : 0;
    document.getElementById('taxaCompliance').textContent = `${taxa}%`;

    // Atualizar barra de compliance
    const complianceFill = document.getElementById('complianceFill');
    setTimeout(() => {
        complianceFill.style.width = `${taxa}%`;
        complianceFill.textContent = `${taxa}%`;
    }, 100);

    // Mostrar alerta se não higienizou
    if (userData.historico[0] && !userData.historico[0].higienizou) {
        document.getElementById('alertBanner').classList.add('show');
    }

    // Atualizar histórico
    atualizarHistorico();
    prepararMiniJogo();
}

function atualizarHistorico() {
    const activityList = document.getElementById('activityList');
    activityList.innerHTML = '';

    if (userData.historico.length === 0) {
        activityList.innerHTML = '<p style="text-align: center; color: #a0aec0; padding: 20px;">Nenhuma atividade registrada ainda.</p>';
        return;
    }

    userData.historico.forEach(item => {
        const data = new Date(item.data);
        const tempo = formatarTempo(data);

        const div = document.createElement('div');
        div.className = 'activity-item';
        div.innerHTML = `
            <div class="activity-icon">${item.higienizou ? '✅' : '❌'}</div>
            <div class="activity-info">
                <div class="activity-title">
                    ${item.higienizou ? 'Higienização confirmada' : 'Higienização não confirmada'}
                </div>
                <div class="activity-time">${tempo} - ${item.tipo}</div>
            </div>
        `;
        activityList.appendChild(div);
    });
}

function formatarTempo(data) {
    const agora = new Date();
    const diff = agora - data;
    const minutos = Math.floor(diff / 60000);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    if (minutos < 1) return 'Agora mesmo';
    if (minutos < 60) return `Há ${minutos} minuto${minutos > 1 ? 's' : ''}`;
    if (horas < 24) return `Há ${horas} hora${horas > 1 ? 's' : ''}`;
    return `Há ${dias} dia${dias > 1 ? 's' : ''}`;
}

function logout() {
    currentUser = null;
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('alertBanner').classList.remove('show');
    document.getElementById('miniGameBanner').style.display = 'none';
    fecharMiniJogoModal();

    // Limpar campos
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

// Permitir login com Enter
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            tentarLogin();
        }
    });

    document.addEventListener('click', function(event) {
        const miniGameModal = document.getElementById('miniGameModal');
        const hygieneModal = document.getElementById('hygieneModal');

        if (event.target === miniGameModal) {
            fecharMiniJogoModal();
        }

        if (event.target === hygieneModal) {
            hygieneModal.style.display = 'none';
        }
    });
});
