## Projeto principal
 - [x] Portal no **C#** deve rodar o **Chromium** com a **URL** do **Next**
 - [ ] **C#** deve ler o arquivo **INI** ,descriptografar e enviar as seções para o navegador
 - [ ] Usuário deve selecionar a seção para carregar os usuários, enviando a selecionada para o **C#** e iniciando uma conexão com o banco selecionado
 - [ ] Preencher o campo de Usuário deve ir auto completando com os usuários do sistema
 - [ ] Caso exista usuário digitado, libera o campo de senha
 - [ ] Ao digitar usuário e senha e clicar em login, enviar para o **C#** os dados
 - [ ] A conexão aberta com o **PG** retorna se o usuário é valido ou não
	 - [ ] Caso usuário seja válido, exibir mensagem de login e mudar **URL**
	 - [ ] Caso usuário seja inválido, exibir mensagem de usuário inválido
- [ ] Dentro da nova URL deve ser iniciada carregando e ser consultado quais módulos o cliente tem acesso
- [ ] Depois de buscar os módulos, para de mostrar que está carregando e exibe os módulos em baixo
- [ ] Os outros menus devem ser utilizados conforme já existe no portal hoje, provavelmente eles chamam **URL's** já prontas, caso não chamem, mais coisa pra gente montar no projeto 😊
- [ ] O click nos módulos devem mandar os seguintes parâmetros para o **C#**: `usuário`, `senha`, `empresa`, `banco de dados`, `código do módulo`
- [ ] O **C#** deverá chamar o `.exe` do módulo passando os parâmetros ( precisa verificar como funciona hoje, se chamar com parâmetros, fica mais fácil de montarmos, mas caso não chame, precisa ver como o **Delphi** inicia os sistemas com o usuário já logado )

## Outros
- [ ] O **CSS** deverá ser responsivo para mais tipos de resoluções`1920x1080`, `1280x720`, `1024x768`, `720x480` e `640x480`
- [ ] O **JavaScript** final deve ser compilado em uma versão com mais retrocompatibilidade
- [ ] O ideal seria conseguir compilar uma versão que não precisa do acesso a internet, o **Next** permite isso fazendo a geração de **Static Pages**
- [ ] Inicio de abertura de chamados pelo novo portal utilizando o **Next** ou o **C#** como backend.

> Caso seja utilizado o Next como backend, que seria a melhor opção, precisa ver como o C# irá passar as configurações do arquivo INI para o Next e o frontend enviará para a API, da para fazer com SessionStorage para mantermos ativo apenas pela sessão do usuário logado atualmente e isso envia nas requisições da API, porem o ideal seria ter ela criptografada e o backend descriptografar e validar se é um tipo INI valido.

## Ideias
- [ ] Adicionar um chat direto dentro do portal
> O chat fará com que o Next rode em um servidor customizado pois o Socket.IO não é implementado automaticamente dentro do Next, além disso, teríamos que criar tipo um dashboard web para funcionários acessarem e conseguirem atender as chamadas do chat
