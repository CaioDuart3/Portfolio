# Portfólio Modularizado com JSON

Este portfólio foi refatorado para usar uma **estrutura completamente modularizada** onde **TODOS os dados estão centralizados em um arquivo JSON** (`assets/data/portfolio.json`), facilitando manutenção e atualizações sem tocar em HTML ou JavaScript.

## 🎯 Status: 100% Dinâmico

Agora, **nenhum dado está hardcoded**. Tudo é carregado do JSON:
- ✅ Seção de Início (nome, descrição, foto, botões)
- ✅ Stack/Ferramentas (tecnologias e ícones)
- ✅ Projetos (cards com informações)
- ✅ Experiências (histórico profissional)
- ✅ Voluntariado
- ✅ Habilidades (skills por categoria)
- ✅ Estatísticas
- ✅ CTA (Call-to-Action)
- ✅ Informações de contato

## 📁 Estrutura de Arquivos

```
Portfolio/
├── assets/
│   ├── css/
│   │   └── index.css              # Estilos
│   ├── data/
│   │   └── portfolio.json         # 💾 DADOS CENTRALIZADOS
│   ├── img/                       # Imagens dos projetos
│   ├── files/                     # CV e arquivos
│   └── js/
│       ├── dataLoader.js          # Carrega o JSON [PRIMEIRO]
│       ├── renderHeroAndStack.js  # Renderiza seções de início e stack
│       ├── index.js               # Theme + Scroll + Skills/Stats/CTA
│       ├── setProjects.js         # Renderiza projetos
│       ├── setExperiences.js      # Renderiza experiências
│       └── setVolunteer.js        # Renderiza voluntariado
├── index.html                     # HTML (mínimo, apenas estrutura)
└── README.md                      # Documentação
```

## 🔄 Fluxo de Carregamento

```
1. HTML carrega
2. dataLoader.js → Carrega portfolio.json para variável global
3. renderHeroAndStack.js → Renderiza seção início e stack/ferramentas
4. index.js → Renderiza skills, statistics e CTA
5. setProjects.js → Renderiza projetos
6. setExperiences.js → Renderiza experiências
7. setVolunteer.js → Renderiza voluntariado
↓
✨ Portfólio completo renderizado dinamicamente!
```

## 📝 Como Atualizar Dados

### Alterar Informações Pessoais

Edite `assets/data/portfolio.json` - seção `personalInfo`:

```json
"personalInfo": {
  "name": "Seu Nome Completo",
  "title": "Sua Profissão",
  "description": "Uma descrição sobre você",
  "phone": "+5561996901265",
  "email": "seu.email@gmail.com",
  "profileImage": "URL ou caminho da foto",
  "cvFile": "./assets/files/curriculo.pdf"
}
```

### Adicionar um Novo Projeto

No JSON, seção `projects`, adicione:

```json
{
  "img": "./assets/img/seu-projeto.png",
  "descricao": "Uma breve descrição",
  "titulo": "Nome do Projeto",
  "tecnologias": ["Tech1", "Tech2", "Tech3"],
  "github": "https://github.com/user/repo",
  "deploy": "https://seu-projeto.com"
}
```

### Adicionar uma Experiência/Voluntariado

Seção `experiences` ou `volunteer` (mesma estrutura):

```json
{
  "img": "URL da logo ou SVG",
  "titulo": "Cargo - Empresa",
  "periodo": "MM/YYYY - presente",
  "descricao": "Descrição do que fez"
}
```

### Atualizar Stack/Tecnologias

Seção `stack`:

```json
{
  "name": "NomeDaTecnologia",
  "icon": "URL do ícone"
}
```

### Adicionar/Editar Habilidades

Seção `skills`:

```json
{
  "category": "Backend",
  "items": ["Python", "Django", "Node.js", "APIs REST"]
}
```

## 📊 Estrutura Completa do JSON

```json
{
  "personalInfo": { ... },
  "social": { 
    "github": "...",
    "linkedin": "...",
    "whatsapp": "..."
  },
  "projects": [ ... ],
  "experiences": [ ... ],
  "volunteer": [ ... ],
  "stack": [ ... ],
  "skills": [ ... ],
  "statistics": [ ... ],
  "cta": { ... }
}
```

## 🚀 Vantagens da Arquitetura

| Vantagem | Descrição |
|----------|-----------|
| 📝 **Dados Centralizados** | Um único arquivo JSON com todas as informações |
| 🔧 **Fácil Manutenção** | Edite dados sem mexer em JavaScript/HTML |
| 🎯 **Zero Hardcoding** | Nenhum dado estático no código |
| 📈 **Escalável** | Adicione novas seções facilmente |
| 🔄 **Reutilizável** | JSON pode ser consumido por APIs/outras apps |
| 📊 **Versionamento Git** | Mudanças no JSON são rastreáveis |
| 🧹 **Código Limpo** | HTML e JS ficam simples e legíveis |

## 🎨 Tecnologias

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6)
- **Data Storage**: JSON
- **Icons**: URLs externas + SVG inline
- **Animations**: Intersection Observer + CSS transitions
- **Theme**: CSS variables com localStorage
- **Responsividade**: Mobile-first

## 📚 Scripts Carregados (em ordem)

1. **dataLoader.js** - Carrega `portfolio.json` → `portfolioData`
2. **renderHeroAndStack.js** - Renderiza início + stack
3. **index.js** - Theme + animations + skills/stats/CTA
4. **setProjects.js** - Renderiza projetos
5. **setExperiences.js** - Renderiza experiências
6. **setVolunteer.js** - Renderiza voluntariado

## ✅ Checklist de Manutenção

Quando deseja atualizar o portfólio:

- [ ] Abra `assets/data/portfolio.json`
- [ ] Atualize os dados desejados
- [ ] Salve o arquivo
- [ ] Recarregue o navegador
- [ ] Pronto! ✨

## 🛠️ Troubleshooting

| Problema | Solução |
|----------|---------|
| Dados não aparecem | Verifique se `portfolio.json` está em `assets/data/` |
| Layout quebrado | Limpe o cache (Ctrl+Shift+Delete) e recarregue |
| Imagens não carregam | Verifique se os URLs/caminhos das imagens estão corretos |
| Funções JavaScript falhando | Abra console (F12) e procure por erros |

## 📞 Contatos

Os links de contato são carregados automaticamente de `personalInfo.social` no JSON.

## 🎉 Resultado Final

Um portfólio **profissional, modular e fácil de manter**, onde adicionar ou modificar informações é tão simples quanto editar um arquivo JSON!

---

**Versão**: 2.0 - Completamente Modularizado  
**Última atualização**: 10/02/2026  
**Desenvolvido por**: Caio Duarte

