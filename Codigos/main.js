//Feito por Pablo Magalhães
//TIAW - Sprint 3
//Engenharia de Software - Má Gestão do Tempo

window.onload = () => {

    carrega_local_storage();
    carrega_imagens();
    define_label();

    //É criado variáveis para armazenar os círculos para futuras edições
    let divisao_1 = document.getElementById("circulo_1");
    let divisao_2 = document.getElementById("circulo_2");
    let divisao_3 = document.getElementById("circulo_3");
    let divisao_4 = document.getElementById("circulo_4");

    //Caso seja clicado em um círculo é encaminhado para a função
    divisao_1.onclick = () => {

        clique_círculo('check_1',0,'barra_habito_1');

    } 

    divisao_2.onclick = () => {

        clique_círculo('check_2',1,'barra_habito_2');

    }

    divisao_3.onclick = () => {

        clique_círculo('check_3',2,'barra_habito_3');

    }

    divisao_4.onclick = () => {

        clique_círculo('check_4',3,'barra_habito_4');

    }

    //É criado variavéis para armazenar as informações, ela também poderia ter feita sendo usado...
    //...o local storage, porém esse processo se torna mais simples e otimizado

    let descricao_1 = document.getElementById('descricao_1');
    let descricao_2 = document.getElementById('descricao_2');
    let descricao_3 = document.getElementById('descricao_3');
    let descricao_4 = document.getElementById('descricao_4');

    descricao_1.onclick = () => {

        muda_descricao(0, 'barra_habito_1');
    }

    descricao_2.onclick = () => {

        muda_descricao(1, 'barra_habito_2');
    }

    descricao_3.onclick = () => {

        muda_descricao(2, 'barra_habito_3');
    }

    descricao_4.onclick = () => {

        muda_descricao(3, 'barra_habito_4');
    }

    let botao = document.getElementById('botao_exclui');

    botao.onclick = () => {
        if (confirm("Você deseja excluir algum hábito ? ") == true){

            let excluir = prompt("Informe a descrição do hábito que deseja excluir: ");

            let desc_1 = JSON.parse(localStorage.getItem('barra_habito_1'));
            let desc_2 = JSON.parse(localStorage.getItem('barra_habito_2'));
            let desc_3 = JSON.parse(localStorage.getItem('barra_habito_3'));
            let desc_4 = JSON.parse(localStorage.getItem('barra_habito_4'));

            do{

                if(excluir == desc_1.descricao){
                
                    window.circulo_1.style.visibility = 'hidden';
                    window.descricao_1.style.visibility = 'hidden';
                    break;
                    
                }
    
                if(excluir == desc_2.descricao){
                    
                    window.circulo_2.style.visibility = 'hidden';
                    window.descricao_2.style.visibility = 'hidden';
                    break;
                    
                }
    
                if(excluir == desc_3.descricao){
                    
                    window.circulo_3.style.visibility = 'hidden';
                    window.descricao_3.style.visibility = 'hidden';
                    break;
                }
    
                if(excluir == desc_4.descricao){
                    
                    window.circulo_4.style.visibility = 'hidden';
                    window.descricao_4.style.visibility = 'hidden';
                    break;
                    
                }

                excluir = prompt("Descrição errada, informe uma válida EX: ",desc_1.descricao);


            }while(true);

            
            

        }
    }

    
}

//Arquitetura JSON de molde
// O Id seria vindo do usuário da tela de login além de quer por default todas os hábitos seriam definidos como...
//...false já que o usuário ao decorrer do dia iria concluir tal hábito, assim mudando esse valor para true...
//...e a descricao seria pré-alocada para mudança posteriormente.

var barra_habito = [
    {
        id: 1,
        concluida: false,
        descricao: "Passear"

    },

    {
        id: 1,
        concluida: false,
        descricao: "Meditar"

    },

    {
        id: 1,
        concluida: false,
        descricao: "Estudar"

    },

    {
        id: 1,
        concluida: false,
        descricao: "Dormir"
    },

]


//Usado para carregar todo o local_storage

function carrega_local_storage(){

    //Caso o localStorage esteja vazio irá ser inserido esses valores da barra de hábito
    if(localStorage.length == 0){

        let string_1 = JSON.stringify(barra_habito[0]);
        localStorage.setItem('barra_habito_1',string_1);

        let string_2 = JSON.stringify(barra_habito[1]);
        localStorage.setItem('barra_habito_2',string_2);

        let string_3 = JSON.stringify(barra_habito[2]);
        localStorage.setItem('barra_habito_3',string_3);

        let string_4 = JSON.stringify(barra_habito[3]);
        localStorage.setItem('barra_habito_4',string_4);

    }

}

function carrega_imagens(){

    //Aqui é carregado as imagens e definindo-as como 'hidden'
    window.check_1.style.visibility = 'hidden';
    window.check_2.style.visibility = 'hidden';
    window.check_3.style.visibility = 'hidden';
    window.check_4.style.visibility = 'hidden';

    let imagem_1 = JSON.parse(localStorage.getItem('barra_habito_1'));
    let imagem_2 = JSON.parse(localStorage.getItem('barra_habito_2'));
    let imagem_3 = JSON.parse(localStorage.getItem('barra_habito_3'));
    let imagem_4 = JSON.parse(localStorage.getItem('barra_habito_4'));

    //Caso os hábitos já estejam concluídos a visbilidade é definida como verdadeira para aparecer...
    //...a imagem de check

    if(imagem_1.concluida == true){
        window.check_1.style.visibility = 'visible';
    }

    if(imagem_2.concluida == true){
        window.check_2.style.visibility = 'visible';
    }

    if(imagem_3.concluida == true){
        window.check_3.style.visibility = 'visible';
    }

    if(imagem_4.concluida == true){
        window.check_4.style.visibility = 'visible';
    }



    

}

function clique_círculo(id_imagem,posicao_alterar,barra_habito_x){

    //Aqui é obtido o id da imagem para que ela seja editada
    let imagem = document.getElementById(id_imagem);

    let obj = JSON.parse(localStorage.getItem(barra_habito_x));

    //Caso a imagem esteja escondida, quer dizer que o hábito ainda não foi concluída, então...
    //...ela se torna visível e seu estado é alterado para concluída seja verdadeiro, fora...
    //...sua atualização no banco de dados, isso acontece caso a imagem esteja aparcendo...
    //...fazendo com que o processo seja ao contrário do descrito

        if(imagem.style.visibility == 'hidden'){

            imagem.style.visibility = 'visible';
            obj.concluida = true;
            localStorage.setItem(barra_habito_x, JSON.stringify(obj));

        }else{

            imagem.style.visibility = "hidden";
            obj.concluida = false;
            localStorage.setItem(barra_habito_x, JSON.stringify(obj));
            
        }

}

function define_label(){

    //É colocado a descrição presente no banco de dados no label dos hábitos
    document.getElementById('descricao_1').innerHTML = JSON.parse(localStorage.getItem('barra_habito_1')).descricao;
    document.getElementById('descricao_2').innerHTML = JSON.parse(localStorage.getItem('barra_habito_2')).descricao;
    document.getElementById('descricao_3').innerHTML = JSON.parse(localStorage.getItem('barra_habito_3')).descricao;
    document.getElementById('descricao_4').innerHTML = JSON.parse(localStorage.getItem('barra_habito_4')).descricao;
}

function muda_descricao(id_habito, barra_habito_x){

    //Aqui é mostrado uma janela modal caso o usuario realmente deseje alterar o hábito e caso...
    //...ele queira, uma nova janela modal irá abrir, para que ele informe a descrição do...
    //...novo hábito, logo pós isso é atualizado o local storage e atualizado os labels

    if(confirm("Deseja alterar o hábito? ") == true){
            
        let descricao_nova = prompt("Informe o novo hábito: ");

        //Laço para não deixar o usuário informar algo nulo
        do{ 
            
            if(descricao_nova == "" || descricao_nova == "null"){
                descricao_nova = prompt("Descrição inválida, informe outra: ");
            }else{
                break;
            }

        }while(true);

        let objeto = JSON.parse(localStorage.getItem(barra_habito_x));
        objeto.descricao = descricao_nova;

        localStorage.setItem(barra_habito_x,JSON.stringify(objeto));

        define_label();

    }

}






