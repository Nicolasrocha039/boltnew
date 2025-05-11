# bolt.diy

[![bolt.diy: Desenvolvimento Web Full-Stack com IA no Navegador](./public/social_preview_index.jpg)](https://bolt.diy)

Bem-vindo ao bolt.diy, a versão open source oficial do Bolt.new, que permite escolher o LLM que você usa para cada prompt! Atualmente, você pode usar modelos da OpenAI, Anthropic, Ollama, OpenRouter, Gemini, LMStudio, Mistral, xAI, HuggingFace, DeepSeek ou Groq - e é facilmente extensível para usar qualquer outro modelo suportado pelo Vercel AI SDK! Veja as instruções abaixo para executar isso localmente e estendê-lo para incluir mais modelos.

-----

Confira a [Documentação do bolt.diy](https://stackblitz-labs.github.io/bolt.diy/) para mais instruções de instalação oficiais e mais informações.

-----
Além disso, [este post fixado em nossa comunidade](https://thinktank.ottomator.ai/t/videos-tutorial-helpful-content/3243) tem uma série de recursos incríveis para executar e implantar o bolt.diy você mesmo!

Nós também lançamos um agente experimental chamado "bolt.diy Expert" que pode responder a perguntas comuns sobre o bolt.diy. Encontre-o aqui no [oTTomator Live Agent Studio](https://studio.ottomator.ai/).

O bolt.diy foi originalmente iniciado por [Cole Medin](https://www.youtube.com/@ColeMedin), mas rapidamente se tornou um esforço comunitário massivo para construir o MELHOR assistente de codificação AI open source!

## Índice

- [Junte-se à Comunidade](#junte-se-à-comunidade)
- [Adições Solicitadas](#adições-solicitadas)
- [Recursos](#recursos)
- [Configuração](#configuração)
- [Executar a Aplicação](#executar-a-aplicação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Contribuindo](#contribuindo)
- [Roteiro](#roteiro)
- [FAQ](#faq)

## Últimas Alterações

### Implementação da Página Principal
- **Componente MainPage**: Adicionado um novo componente que apresenta uma interface de usuário com botões de login e cadastro.
- **Navegação**: Implementada a navegação para a página de autenticação ao clicar nos botões de login e cadastro.
- **Estilização**: Utilização do Tailwind CSS para melhorar a apresentação visual da página.
- **Feedback Visual**: Melhoria na experiência do usuário com feedback visual nos botões.

### Resolução de Erros
- **Erro de Permissão**: Abordadas questões relacionadas ao erro EACCES ao instalar o React Native CLI globalmente.
- **Dependências**: Reinstalação das dependências do projeto para resolver conflitos e garantir que todos os módulos necessários estejam disponíveis.

### Melhorias Gerais
- **Documentação**: Atualização da documentação do projeto para refletir as alterações recentes e fornecer informações claras sobre as funcionalidades implementadas.

## Junte-se à Comunidade

[Junte-se à comunidade bolt.diy aqui, no oTTomator Think Tank!](https://thinktank.ottomator.ai)

## Gerenciamento de Projetos

O bolt.diy é um esforço comunitário! No entanto, a equipe central de colaboradores visa organizar o projeto de uma maneira que permita
que você entenda onde estão as áreas de foco atuais.

Se você quiser saber no que estamos trabalhando, o que estamos planejando trabalhar ou se deseja contribuir para o
projeto, consulte o [guia de gerenciamento de projetos](./PROJECT.md) para começar facilmente.

## Adições Solicitadas

- ✅ Integração OpenRouter (@coleam00)
- ✅ Integração Gemini (@jonathands)
- ✅ Autogerar modelos Ollama a partir do que é baixado (@yunatamos)
- ✅ Filtrar modelos por provedor (@jasonm23)
- ✅ Baixar projeto como ZIP (@fabwaseem)
- ✅ Melhorias no prompt principal do bolt.new em `app\lib\.server\llm\prompts.ts` (@kofi-bhr)
- ✅ Integração da API DeepSeek (@zenith110)
- ✅ Integração da API Mistral (@ArulGandhi)
- ✅ Integração da API "Open AI Like" (@ZerxZ)
- ✅ Capacidade de sincronizar arquivos (sincronização unidirecional) para pasta local (@muzafferkadir)
- ✅ Containerizar a aplicação com Docker para fácil instalação (@aaronbolton)
- ✅ Publicar projetos diretamente no GitHub (@goncaloalves)
- ✅ Capacidade de inserir chaves de API na interface do usuário (@ali00209)
- ✅ Integração Beta do xAI Grok (@milutinke)
- ✅ Integração do LM Studio (@karrot0)
- ✅ Integração do HuggingFace (@ahsan3219)
- ✅ Terminal Bolt para ver a saída dos comandos executados pelo LLM (@thecodacus)
- ✅ Streaming da saída do código (@thecodacus)
- ✅ Capacidade de reverter o código para versões anteriores (@wonderwhy-er)
- ✅ Funcionalidade de backup e restauração do histórico de chat (@sidbetatester)
- ✅ Integração do Cohere (@hasanraiyan)
- ✅ Comprimento máximo dinâmico de tokens do modelo (@hasanraiyan)
- ✅ Melhorar o aprimoramento de prompts (@SujalXplores)
- ✅ Cache de prompts (@SujalXplores)
- ✅ Carregar projetos locais no aplicativo (@wonderwhy-er)
- ✅ Integração do Together (@mouimet-infinisoft)
- ✅ Amigável para dispositivos móveis (@qwikode)
- ✅ Melhorar o aprimoramento de prompts (@SujalXplores)
- ✅ Anexar imagens aos prompts (@atrokhym)(@stijnus)
- ✅ Botão de Clonagem do Git adicionado (@thecodacus)
- ✅ Importação do Git a partir da URL (@thecodacus)
- ✅ PromptLibrary para ter diferentes variações de prompts para diferentes casos de uso (@thecodacus)
- ✅ Detectar package.json e comandos para auto instalar e executar a pré-visualização para pasta e importação do git (@wonderwhy-er)
- ✅ Ferramenta de seleção para direcionar alterações visualmente (@emcconnell)
- ✅ Detectar erros de terminal e pedir ao bolt para corrigi-los (@thecodacus)
- ✅ Detectar erros de pré-visualização e pedir ao bolt para corrigi-los (@wonderwhy-er)
- ✅ Adicionar opções de modelo inicial (@thecodacus)
- ✅ Integração do Perplexity (@meetpateltech)
- ✅ Integração do AWS Bedrock (@kunjabijukchhe)
- ✅ Adicionar uma "Visualização de Diferenças" para ver as alterações (@toddyclipsgg)
- ⬜ **ALTA PRIORIDADE** - Impedir que o bolt reescreva arquivos com tanta frequência (bloqueio de arquivos e diferenças)
- ⬜ **ALTA PRIORIDADE** - Melhorar o prompting para LLMs menores (a janela de código às vezes não inicia)
- ⬜ **ALTA PRIORIDADE** - Executar agentes no backend em vez de uma única chamada de modelo
- ✅ Implantar diretamente no Netlify (@xKevIsDev)
- ⬜ Integração do Supabase
- ⬜ Fazer o LLM planejar o projeto em um arquivo MD para melhores resultados/transparência
- ⬜ Integração do VSCode com confirmações semelhantes ao git
- ⬜ Carregar documentos para conhecimento - modelos de design de interface, uma base de código para referência de estilo de codificação, etc.
- ⬜ Prompt por voz
- ⬜ Integração da API Azure Open AI
- ⬜ Integração do Vertex AI
- ⬜ Integração do Granite
- ✅ Janela Popout para Web Container(@stijnus)
- ✅ Capacidade de alterar o tamanho da janela Popout (@stijnus)

## Recursos

- **Desenvolvimento web full-stack com IA** para **aplicações baseadas em NodeJS** diretamente no seu navegador.
- **Suporte para múltiplos LLMs** com uma arquitetura extensível para integrar modelos adicionais.
- **Anexar imagens aos prompts** para melhor compreensão contextual.
- **Terminal integrado** para visualizar a saída dos comandos executados pelo LLM.
- **Reverter o código para versões anteriores** para facilitar a depuração e mudanças mais rápidas.
- **Baixar projetos como ZIP** para fácil portabilidade e sincronização para uma pasta no host.
- **Suporte para Docker pronto para integração** para uma configuração sem complicações.
- **Implantar** diretamente no **Netlify**

## Configuração

Se você é novo na instalação de software do GitHub, não se preocupe! Se você encontrar algum problema, sinta-se à vontade para enviar um "problema" usando os links fornecidos ou melhorar esta documentação fazendo um fork do repositório, editando as instruções e enviando um pull request. A seguinte instrução ajudará você a colocar a versão estável em funcionamento na sua máquina local em pouco tempo.

Vamos colocá-lo em funcionamento com a versão estável do Bolt.DIY!

## Download Rápido

[![Baixar Última Versão](https://img.shields.io/github/v/release/stackblitz-labs/bolt.diy?label=Baixar%20Bolt&sort=semver)](https://github.com/stackblitz-labs/bolt.diy/releases/latest) ← Clique aqui para ir para a versão mais recente!

- Em seguida, **clique em source.zip**

## Pré-requisitos

Antes de começar, você precisará instalar duas peças importantes de software:

### Instalar Node.js

Node.js é necessário para executar a aplicação.

1. Visite a [Página de Download do Node.js](https://nodejs.org/en/download/)
2. Baixe a versão "LTS" (Long Term Support) para o seu sistema operacional
3. Execute o instalador, aceitando as configurações padrão
4. Verifique se o Node.js está instalado corretamente:
   - **Para Usuários do Windows**:
     1. Pressione `Windows + R`
     2. Digite "sysdm.cpl" e pressione Enter
     3. Vá para a aba "Avançado" → "Variáveis de Ambiente"
     4. Verifique se `Node.js` aparece na variável "Path"
   - **Para Usuários do Mac/Linux**:
     1. Abra o Terminal
     2. Digite este comando:
        ```bash
        echo $PATH
        ```
     3. Procure por `/usr/local/bin` na saída

## Executando a Aplicação

Você tem duas opções para executar o Bolt.DIY: diretamente na sua máquina ou usando Docker.

### Opção 1: Instalação Direta (Recomendado para Iniciantes)

1. **Instalar Gerenciador de Pacotes (pnpm)**:

   ```bash
   npm install -g pnpm
   ```

2. **Instalar Dependências do Projeto**:

   ```bash
   pnpm install
   ```

3. **Iniciar a Aplicação**:

   ```bash
   pnpm run dev
   ```
   
### Opção 2: Usando Docker

Esta opção requer algum conhecimento sobre Docker, mas fornece um ambiente mais isolado.

#### Pré-requisito Adicional

- Instalar Docker: [Baixar Docker](https://www.docker.com/)

#### Passos:

1. **Construir a Imagem Docker**:

   ```bash
   # Usando script npm:
   npm run dockerbuild

   # OU usando comando Docker direto:
   docker build . --target bolt-ai-development
   ```

2. **Executar o Container**:
   ```bash
   docker compose --profile development up
   ```

## Configurando Chaves de API e Provedores

### Adicionando Suas Chaves de API

Configurar suas chaves de API no Bolt.DIY é simples:

1. Abra a página inicial (interface principal)
2. Selecione seu provedor desejado no menu suspenso
3. Clique no ícone de lápis (editar)
4. Insira sua chave de API no campo de entrada seguro

![Interface de Configuração da Chave de API](./docs/images/api-key-ui-section.png)

### Configurando URLs Base Personalizadas

Para provedores que suportam URLs base personalizadas (como Ollama ou LM Studio), siga estes passos:

1. Clique no ícone de configurações na barra lateral para abrir o menu de configurações
   ![Localização do Botão de Configurações](./docs/images/bolt-settings-button.png)

2. Navegue até a aba "Provedores"
3. Pesquise seu provedor usando a barra de pesquisa
4. Insira sua URL base personalizada no campo designado
   ![Configuração da URL Base do Provedor](./docs/images/provider-base-url.png)

> **Nota**: URLs base personalizadas são particularmente úteis ao executar instâncias locais de modelos de IA ou usar endpoints de API personalizados.

### Provedores Suportados

- Ollama
- LM Studio
- OpenAILike

## Configuração Usando Git (Apenas para Desenvolvedores)

Este método é recomendado para desenvolvedores que desejam:

- Contribuir para o projeto
- Manter-se atualizado com as últimas mudanças
- Alternar entre diferentes versões
- Criar modificações personalizadas

#### Pré-requisitos

1. Instalar Git: [Baixar Git](https://git-scm.com/downloads)

#### Configuração Inicial

1. **Clonar o Repositório**:

   ```bash
   git clone -b stable https://github.com/stackblitz-labs/bolt.diy.git
   ```

2. **Navegar até o Diretório do Projeto**:

   ```bash
   cd bolt.diy
   ```

3. **Instalar Dependências**:

   ```bash
   pnpm install
   ```

4. **Iniciar o Servidor de Desenvolvimento**:
   ```bash
   pnpm run dev
   ```

5. **(OPCIONAL)** Mudar para a Branch Principal se você quiser usar a versão de pré-lançamento/teste:
   ```bash
   git checkout main
   pnpm install
   pnpm run dev
   ```
  Dica: Esteja ciente de que isso pode ter recursos beta e é mais provável que tenha bugs do que a versão estável.

>**Abra a WebUI para testar (Padrão: http://localhost:5173)**
>   - Iniciantes: 
>     - Tente usar um Provedor/Modelo sofisticado como Anthropic com os Modelos Claude Sonnet 3.x para obter os melhores resultados.
>     - Explicação: O Prompt do Sistema atualmente implementado no bolt.diy não pode cobrir o melhor desempenho para todos os provedores e modelos disponíveis. Portanto, funciona melhor com alguns modelos do que com outros, mesmo que os modelos em si sejam perfeitos para programação.
>     - Futuro: Está planejado um Plugin/Biblioteca de Extensões para que possam haver diferentes Prompts de Sistema para diferentes Modelos, o que ajudará a obter melhores resultados.

#### Mantendo-se Atualizado

Para obter as últimas mudanças do repositório:

1. **Salve Suas Alterações Locais** (se houver):

   ```bash
   git stash
   ```

2. **Puxe as Últimas Atualizações**:

   ```bash
   git pull 
   ```

3. **Atualize as Dependências**:

   ```bash
   pnpm install
   ```

4. **Restaure Suas Alterações Locais** (se houver):
   ```bash
   git stash pop
   ```

#### Resolvendo Problemas na Configuração do Git

Se você encontrar problemas:

1. **Instalação Limpa**:

   ```bash
   # Remover módulos node e arquivos de bloqueio
   rm -rf node_modules pnpm-lock.yaml

   # Limpar cache do pnpm
   pnpm store prune

   # Reinstalar dependências
   pnpm install
   ```

2. **Redefinir Alterações Locais**:
   ```bash
   # Descartar todas as alterações locais
   git reset --hard origin/main
   ```

Lembre-se de sempre confirmar suas alterações locais ou armazená-las antes de puxar atualizações para evitar conflitos.
