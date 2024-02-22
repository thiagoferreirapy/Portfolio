function descriptionProjects(project){
    let projefect_1 = document.getElementById('projefect_1');
    let projefect_2 = document.getElementById('projefect_2');
    
    
    if (project === 'studio'){
        // projefect_1.style.width = '100%';
        // projefect_1.style.height = '100%';
        
        // projefect_1.style.flexDirection = 'column';

        projefect_1.innerHTML = `
        <h3 id="TitleOfProjects">Stúdio Ramos</h3>
        <h4>Python - Django - JavaScript - APIs - Html - Css- Bootstrap</h4>
        
        <p class="TextOfProjects">O Stúdio Ramos é um projeto em desenvolvimento criado para um stúdio de maquiagem no intuito de agilizar o processo de agendamento dos clientes. O desenvolvimento utilizando o framework Django oferece produtividade rápida e segurança integrada, com recursos como ORM, tornando-o uma escolha eficiente para o desenvolvimento ágil de aplicações web em Python.</p>
        <div class="ContentProjectInformations">
                        <div class="Informations">
                            <h4>Minhas funções</h4>
                            <p>Desenvolvedor Full-Stack, <br> Ux/Ui design</p>
                        </div>
                        <div class="Informations">
                            <h4>Cronograma</h4>
                            <p>2 meses (2023)</p>
                        </div>
                        <div class="Informations">
                            <h4>Ferramentas usadas</h4>
                            <p><span>Python</span>, <span>Django</span>, <br> <span>JavaScript</span>, <span>APIs</span>, <span>Html</span>, <br> <span>Css</span>, <span>Bootstrap</span>, <span>Figma</span></p>
                        </div>
                    </div>
        
        `    
    }

    if (project === 'lanches'){
        projefect_2.style.width = '100%';
        projefect_2.style.height = '100%';
        
        projefect_2.style.flexDirection = 'column';

        projefect_2.innerHTML = `
        <h3>Mega Lanches (em andamento)</h3>
        <h4>Python - Django - JavaScript - APIs - Html - Css- Bootstrap</h4>
        
        <p>O Stúdio Ramos é um projeto em desenvolvimento criado para um stúdio de maquiagem no intuito de agilizar o processo de agendamento dos clientes. Desenvolvido em Django este site possibilita um interação rápida do cliente com o servidor. 🚀</p>
        `    
    }
}