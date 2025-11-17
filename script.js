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

let userData = {
    username: '',
    nome: '',
    funcao: '',
    setor: '',
    numero: '',
    totalCheckins: 0,
    higienizacoesConfirmadas: 0,
    ultimoCheckIn: null,
    historico: []
};

let currentUser = null;

// Carregar dados salvos por utilizador
function carregarDados(username) {
    const saved = localStorage.getItem(`hygieneData_${username}`);
    if (saved) {
        userData = JSON.parse(saved);
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
            historico: []
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
    document.getElementById('miniGameModal').style.display = 'block';
}

function fecharMiniJogoModal() {
    document.getElementById('miniGameModal').style.display = 'none';
}

function mostrarDashboard() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';

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
