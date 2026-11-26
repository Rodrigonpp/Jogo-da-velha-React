# Jogo da Velha — React

Projeto de revisão da Lista 1 da disciplina Frontend Frameworks.

## Aluno

- Rodrigo Nunes Peixoto Ramos
- Matrícula: 01777171

## Funcionalidades

- Tabuleiro 3 × 3.
- Alternância entre os jogadores X e O.
- Bloqueio de casas já ocupadas.
- Identificação de vitória em linhas, colunas e diagonais.
- Identificação de empate.
- Bloqueio de jogadas após o encerramento.
- Botão **Novo Jogo** para reiniciar a partida.

## Tecnologias

- React
- JavaScript
- Vite
- CSS

## Requisitos e Como executar

É necessário ter Node.js e npm instalados.

```bash
npm install
npm run dev
```

Abra no navegador o endereço informado pelo Vite, normalmente `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
```

## Estrutura

```text
revisao1_tic_tac_toe/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── components/
    │   ├── Board.jsx
    │   └── Square.jsx
    └── utils/
        └── game.js
```

## Capturas de tela

<img width="845" height="833" alt="image" src="https://github.com/user-attachments/assets/65c18d0a-e0f4-4813-89a6-20ccff10aaf7" />
<img width="753" height="848" alt="image" src="https://github.com/user-attachments/assets/e4fb2a8c-921d-4172-b1c1-bba292af67e9" />



## Conceitos de React praticados

- Componentização com `App`, `Board` e `Square`.
- JSX e composição de componentes.
- Passagem de dados e funções por `props`.
- Estado com `useState`.
- Tratamento de eventos com `onClick`.
- Atualização imutável de arrays.
- Renderização de listas com `map`.
- Uso da propriedade `key`.
- Renderização condicional do status da partida.
