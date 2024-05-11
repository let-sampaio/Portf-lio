       // Seleciona os botões
       const btnProjetos = document.getElementById('btn-projetos');
       const btnSkills = document.getElementById('btn-skills');

       // Adiciona um ouvinte de evento de clique ao botão de projetos
       btnProjetos.addEventListener('click', function() {
           // Redireciona para a página de projetos
           window.location.href = 'projetos.html'; // Substitua 'pagina_projetos.html' pelo caminho da sua página de projetos
       });

       // Adiciona um ouvinte de evento de clique ao botão de contato
       btnSkills.addEventListener('click', function() {
           // Redireciona para a página de contato
           window.location.href = 'skills.html'; // Substitua 'pagina_contato.html' pelo caminho da sua página de contato
       });