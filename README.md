# 🧼 HandSafe - Sistema de Check-in Digital de Higienização das Mãos

Sistema de prontuário eletrónico com check-in obrigatório de higienização das mãos, desenvolvido para projeto académico de Enfermagem.

## 📋 Sobre o Projeto

Este sistema foi inspirado na experiência-piloto do Singapore General Hospital (2022) e adaptado para a realidade do sistema de saúde português.

### Objetivo
Integrar lembretes de higienização das mãos no momento do login em sistemas eletrónicos de saúde, promovendo a adesão às boas práticas e reduzindo infeções hospitalares.

## 🚀 Como Usar

### Configuração Inicial
1. Coloque o arquivo `logo.png` na mesma pasta dos arquivos HTML, CSS e JS
2. Certifique-se de que todos os arquivos estão na mesma pasta:
   - `index.html`
   - `style.css`
   - `script.js`
   - `logo.png`

### Abrir o Sistema
1. Navegue até à pasta do projeto
2. Abra o arquivo `index.html` num navegador web (Chrome, Firefox, Edge, Safari)

### Utilizadores de Demonstração

O sistema possui 5 utilizadores pré-cadastrados:

| Utilizador | Palavra-passe | Função | Serviço |
|------------|---------------|--------|---------|
| ana.silva | senha123 | Enfermeira | UCI |
| joao.costa | senha123 | Médico | Urgência |
| maria.santos | senha123 | Auxiliar de Ação Médica | Medicina Interna |
| pedro.alves | senha123 | Fisioterapeuta | Ortopedia |
| carla.ferreira | senha123 | Farmacêutica | Farmácia Hospitalar |

## 💡 Funcionalidades

### 🎨 Personalização da Marca
- Logo personalizado exibido no cabeçalho
- Design responsivo que se adapta a diferentes tamanhos de tela
- Logo otimizado para visualização em dispositivos móveis

### 🔐 Login Simplificado
- Interface de login limpa com apenas username e password
- Validação de credenciais em tempo real
- Mensagens de erro claras e informativas

### ✅ Check-in Obrigatório
- Modal automático ao fazer login
- Pergunta: "Você higienizou as mãos nos últimos 30 minutos?"
- Resposta obrigatória (Sim/Não)

### 📊 Dashboard de Métricas
- Total de check-ins realizados
- Número de higienizações confirmadas
- Taxa de compliance (%)
- Barra de progresso visual

### 📝 Histórico de Atividades
- Registo de todos os check-ins
- Timestamp de cada evento
- Identificação visual (✅ confirmado / ❌ não confirmado)

### 🎮 Minijogo Educativo
- 30 situações clínicas para revisão
- Feedback imediato sobre respostas
- Histórico completo de progresso
- Sistema de pontuação

### ⚠️ Sistema de Alertas
- Banner de aviso quando não confirma higienização
- Feedback visual imediato

### 💾 Persistência de Dados
- Dados salvos localmente no navegador
- Histórico individual por utilizador
- Simula sistema real com múltiplos acessos

## 🎯 Cenários de Demonstração

### Cenário 1: Boa Adesão
1. Login como `ana.silva`
2. Confirmar "Sim, higienizei" em múltiplos acessos
3. Demonstrar taxa de compliance de 100%

### Cenário 2: Necessidade de Intervenção
1. Login como `joao.costa`
2. Alternar entre "Sim" e "Não"
3. Mostrar alerta vermelho e taxa reduzida

### Cenário 3: Comparação entre Profissionais
1. Fazer login com diferentes utilizadores
2. Demonstrar históricos independentes
3. Mostrar rastreabilidade individual

### Cenário 4: Minijogo Educativo
1. Fazer login com qualquer utilizador
2. Clicar no banner do minijogo
3. Responder às 30 situações clínicas
4. Visualizar histórico e pontuação

## 🔧 Tecnologias Utilizadas

- HTML5
- CSS3 (Design responsivo)
- JavaScript (Vanilla)
- LocalStorage API (Persistência de dados)

## 📱 Compatibilidade

- ✅ Desktop (Windows, macOS, Linux)
- ✅ Tablet
- ✅ Smartphone
- ✅ Todos os navegadores modernos

## 🎨 Personalização

### Como Trocar o Logo
1. Substitua o arquivo `logo.png` pelo seu logo
2. Recomendações:
   - Formato: PNG com fundo transparente
   - Dimensões recomendadas: 400x160 pixels (proporção 5:2)
   - Tamanho máximo de exibição: 200x80 pixels (desktop) / 150x60 pixels (mobile)
   - O sistema ajustará automaticamente o tamanho mantendo a proporção

## 📚 Fundamentação Científica

### Por que funciona?
- **Momento crítico**: Lembrete aparece exatamente quando o profissional vai aceder ao prontuário
- **Obrigatoriedade**: Não é possível ignorar o aviso
- **Rastreabilidade**: Permite identificar padrões e áreas de melhoria
- **Feedback imediato**: Profissional vê o impacto das suas ações
- **Gamificação**: Minijogo reforça conhecimento de forma lúdica

### Benefícios Esperados
- ⬆️ Aumento da adesão à higienização das mãos
- ⬇️ Redução de infeções associadas aos cuidados de saúde (IACS)
- 📊 Dados para auditorias e melhoria contínua
- 🎯 Intervenções direcionadas por serviço/profissional
- 🎓 Educação contínua através do minijogo

## 📖 Referências

- Singapore General Hospital (2022) - Experiência piloto de check-in digital
- OMS - Diretrizes sobre Higienização das Mãos nos Cuidados de Saúde
- DGS Portugal - Programa de Prevenção e Controlo de Infeções

## 📝 Changelog

### Versão 18/11/2024
- ✅ Adicionado suporte para logo personalizado
- ✅ Simplificado login (removido campo "Nome do Profissional")
- ✅ Login apenas com username e password
- ✅ Design responsivo do logo
- ✅ Melhorias na experiência mobile

### Versão 17/11/2024
- ✅ Implementado minijogo com 30 situações clínicas
- ✅ Sistema de pontuação e histórico de respostas
- ✅ Banner de acesso ao minijogo no dashboard

## 👥 Créditos

Projeto desenvolvido para trabalho académico do curso de Enfermagem.

---

**Nota**: Este é um protótipo para fins de demonstração e apresentação académica. Para implementação real em ambiente hospitalar, seriam necessárias adaptações de segurança, integração com sistemas existentes e conformidade com RGPD.
