// ==============================
// Dados das habilidades
// ==============================
const habilidadesData = {
    front: [
        { icone: 'fa-brands fa-html5', titulo: 'HTML5', descricao: 'Estruturação semântica de páginas web' },
        { icone: 'fa-brands fa-css3-alt', titulo: 'CSS3', descricao: 'Estilização e design responsivo' },
        { icone: 'fa-brands fa-js', titulo: 'JavaScript', descricao: 'Interatividade e lógica de programação' },
        { icone: 'fa-solid fa-code', titulo: 'TypeScript', descricao: 'JavaScript tipado, no front e no back' },
        { icone: 'fa-brands fa-react', titulo: 'React', descricao: 'Interfaces em componentes (Virtual Tabletop)' },
        { icone: 'fa-solid fa-layer-group', titulo: 'JAMstack', descricao: 'JavaScript, APIs e Markup' }
    ],
    back: [
        { icone: 'fa-solid fa-feather', titulo: 'NestJS', descricao: 'API e WebSockets do Virtual Tabletop' },
        { icone: 'fa-solid fa-bolt', titulo: 'Socket.IO', descricao: 'Sincronização em tempo real' },
        { icone: 'fa-brands fa-php', titulo: 'PHP', descricao: 'Desenvolvimento back-end e APIs' },
        { icone: 'fa-brands fa-java', titulo: 'Java', descricao: 'Programação orientada a objetos' },
        { icone: 'fa-solid fa-fire', titulo: 'Firebase', descricao: 'Login e banco em tempo real' },
        { icone: 'fa-solid fa-database', titulo: 'PostgreSQL', descricao: 'Banco relacional com Prisma' },
        { icone: 'fa-solid fa-database', titulo: 'MySQL', descricao: 'Banco de dados relacional' },
        { icone: 'fa-solid fa-server', titulo: 'SQL', descricao: 'Linguagem de consulta estruturada' }
    ],
    qa: [
        { icone: 'fa-solid fa-route', titulo: 'Cypress', descricao: 'Testes E2E e regressivos' },
        { icone: 'fa-solid fa-robot', titulo: 'Robot Framework', descricao: 'Automação de testes de interface e de API' },
        { icone: 'fa-solid fa-list-check', titulo: 'BDD (Gherkin)', descricao: 'Escrita de cenários de teste' },
        { icone: 'fa-solid fa-mobile-screen', titulo: 'Testes manuais', descricao: 'Desktop, mobile (Android/iOS) e tablets' },
        { icone: 'fa-solid fa-clipboard-check', titulo: 'Funcionais e não funcionais', descricao: 'Incluindo testes de compatibilidade' },
        { icone: 'fa-solid fa-bug', titulo: 'Gestão de defeitos', descricao: 'Registro de bugs e reporte de impedimentos' },
        { icone: 'fa-solid fa-id-card', titulo: 'Massa de dados', descricao: 'Gerador de Dados para testes de cadastro' }
    ],
    ferramentas: [
        { icone: 'fa-brands fa-git-alt', titulo: 'Git & GitHub', descricao: 'Versionamento e publicação' },
        { icone: 'fa-brands fa-docker', titulo: 'Docker', descricao: 'Ambiente com Postgres e Redis' },
        { icone: 'fa-solid fa-code', titulo: 'Visual Studio', descricao: 'IDE para desenvolvimento' },
        { icone: 'fa-solid fa-pen-to-square', titulo: 'Sublime Text', descricao: 'Editor de texto avançado' },
        { icone: 'fa-solid fa-table', titulo: 'MySQL Workbench', descricao: 'Gerenciamento de banco MySQL' },
        { icone: 'fa-solid fa-server', titulo: 'SQL Server Management', descricao: 'Consultas para validar dados nos testes' },
        { icone: 'fa-brands fa-microsoft', titulo: 'Azure DevOps', descricao: 'Gestão de tarefas, testes e bugs' },
        { icone: 'fa-brands fa-trello', titulo: 'Trello', descricao: 'Organização de tarefas em Kanban' },
        { icone: 'fa-solid fa-window-maximize', titulo: 'NetBeans', descricao: 'IDE para desenvolvimento Java' },
        { icone: 'fa-solid fa-gamepad', titulo: 'Construct 2', descricao: 'Desenvolvimento de jogos' },
        { icone: 'fa-solid fa-magnifying-glass-chart', titulo: 'Elasticsearch', descricao: 'Motor de busca e análise' }
    ]
};

// ==============================
// Renderiza os cards (antes do observer de animação do ScriptPadrao)
// ==============================
document.addEventListener('DOMContentLoaded', () => {
    Object.entries(habilidadesData).forEach(([categoria, itens]) => {
        const grid = document.getElementById(`grid-${categoria}`);
        if (!grid) return;
        grid.innerHTML = itens.map((item, i) => `
            <div class="skill-card reveal" style="--delay:${(i % 4) * 0.06}s">
                <div class="skill-icon"><i class="${item.icone}"></i></div>
                <div>
                    <h3>${item.titulo}</h3>
                    <p>${item.descricao}</p>
                </div>
            </div>
        `).join('');
    });

    // Efeito de brilho que segue o mouse
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('pointermove', e => {
            const r = card.getBoundingClientRect();
            card.style.setProperty('--mx', `${e.clientX - r.left}px`);
            card.style.setProperty('--my', `${e.clientY - r.top}px`);
        });
    });
});
