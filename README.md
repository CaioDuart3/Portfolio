# Portfólio Modularizado com JSON

Este portfólio foi refatorado para usar uma estrutura modularizada onde **todos os dados estão centralizados em um arquivo JSON** (`assets/data/portfolio.json`), facilitando manutenção e atualizações.

## 📁 Estrutura de Arquivos

```
Portfolio/
├── assets/
│   ├── css/
│   │   └── index.css          # Estilos
│   ├── data/
│   │   └── portfolio.json     # ✨ DADOS CENTRALIZADOS
│   ├── img/                   # Imagens
│   ├── files/                 # CVs e arquivos
│   └── js/
│       ├── dataLoader.js      # Carrega o JSON
│       ├── index.js           # Theme + Scroll animations + Dynamic sections
│       ├── setProjects.js     # Renderiza projetos
│       ├── setExperiences.js  # Renderiza experiências
│       └── setVolunteer.js    # Renderiza voluntariado
├── index.html                 # HTML principal
└── README.md                  # Este arquivo
```

## 🔄 Fluxo de Carregamento

1. **dataLoader.js** carrega o JSON e disponibiliza em `portfolioData`
2. **setProjects.js**, **setExperiences.js**, **setVolunteer.js** leem `portfolioData` e renderizam os cards
3. **index.js** renderiza Skills, Statistics e CTA dinamicamente

## 📝 Como Usar

### Adicionar/Editar um Projeto

Edite `assets/data/portfolio.json`:

```json
{
  "projects": [
    {
      "img": "./assets/img/projeto.png",
      "descricao": "Uma breve descrição",
      "titulo": "Nome do Projeto",
      "tecnologias": ["Tech1", "Tech2"],
      "github": "https://github.com/user/repo",
      "deploy": "https://projeto.example.com"
    }
  ]
}
```

### Adicionar/Editar uma Experiência

```json
{
  "experiences": [
    {
      "img": "data:image/svg+xml;utf8,<svg>...</svg>",
      "titulo": "Cargo - Empresa",
      "periodo": "MM/YYYY - MM/YYYY",
      "descricao": "Descrição da experiência"
    }
  ]
}
```

### Adicionar/Editar Voluntariado

Mesma estrutura das experiências:

```json
{
  "volunteer": [
    {
      "img": "data:image/svg+xml;utf8,...",
      "titulo": "Cargo de Voluntário",
      "periodo": "MM/YYYY - presente",
      "descricao": "Descrição do trabalho voluntário"
    }
  ]
}
```

### Adicionar/Editar Habilidades

```json
{
  "skills": [
    {
      "category": "Backend",
      "items": ["Python", "Django", "Node.js"]
    },
    {
      "category": "Frontend",
      "items": ["React", "HTML/CSS", "JavaScript"]
    }
  ]
}
```

### Adicionar/Editar Estatísticas

```json
{
  "statistics": [
    {
      "number": "10+",
      "label": "Projetos Desenvolvidos"
    }
  ]
}
```

### Editar Informações Pessoais

```json
{
  "personalInfo": {
    "name": "Seu Nome",
    "title": "Sua Profissão",
    "email": "seu.email@example.com",
    "phone": "+55119999999",
    "profileImage": "./assets/img/foto.jpeg",
    "cvFile": "./assets/files/curriculo.pdf"
  },
  "social": {
    "github": "https://github.com/seu-usuario",
    "linkedin": "https://linkedin.com/in/seu-usuario",
    "whatsapp": "https://wa.me/5561996901265"
  }
}
```

### Editar CTA (Call-to-Action)

```json
{
  "cta": {
    "title": "Pronto para colaborar?",
    "description": "Descrição do CTA",
    "buttons": [
      {
        "text": "Texto do botão",
        "url": "https://link.com",
        "class": "cta-btn-primary"
      }
    ]
  }
}
```

## 🎨 Estrutura Completa do JSON

```json
{
  "personalInfo": {...},
  "social": {...},
  "projects": [...],
  "experiences": [...],
  "volunteer": [...],
  "skills": [...],
  "statistics": [...],
  "cta": {...}
}
```

## 🚀 Vantagens da Modularização

- ✅ **Centralized Data**: Todos os dados em um único arquivo
- ✅ **Easy Maintenance**: Edite dados sem mexer em JavaScript
- ✅ **Scalable**: Fácil adicionar mais seções
- ✅ **Reusable**: Os dados podem ser usados por APIs ou outras aplicações
- ✅ **Version Control**: Mudanças no JSON são facilmente rastreadas no Git

## 🔧 Tecnologias

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6)
- **Data**: JSON
- **Icons**: Inline SVGs com data-uri
- **Animations**: Intersection Observer + CSS transitions
- **Theme**: CSS variables com localStorage

## 📚 Documentação

Para editar o portfólio no futuro:

1. Acesse `assets/data/portfolio.json`
2. Modifique os dados conforme necessário
3. Salve o arquivo
4. Recarregue o navegador - as mudanças aparecem automaticamente! ✨

## 📞 Contatos

Os links de contato estão centralizados em `personalInfo.social` no JSON.

---

**Portfólio modularizado com sucesso! 🎉**
