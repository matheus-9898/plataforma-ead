$(function(){

    $(window).resize(function(){

        if($('#containerMenu').css('display') == 'none' && $(window).width() > 480){
            $('#containerMenu').css('display','flex');
        }else if($(window).width() <= 480){
            $('#containerMenu').css('display','none');
        }
    })



    $('#aviso > p').html('<p>Seja bem vindo <u>'+ localStorage.getItem('nomeComp') +'</u>! Te desejamos bons estudos.</p>')

    $('.sair').click(function(){
        window.location.href = 'login.html';
        localStorage.setItem('validacaoAcesso',false);
    })

    $('main > #aviso > .material-symbols-outlined').click(function(){
        $('main > #aviso').fadeOut();
    })
    
    $('#conteinerConteudo>header>#perfil>img , #conteinerConteudo>header>#perfil>.material-symbols-outlined').click(function(){
        if($('#conteinerConteudo>header>#perfil>#menuSuspenso').css('display') == 'none'){
            $('#conteinerConteudo>header>#perfil>#menuSuspenso').css('display','initial');
        }else{
            $('#conteinerConteudo>header>#perfil>#menuSuspenso').css('display','none');
        }
    })
    $('#conteinerConteudo>header>#perfil>#menuSuspenso').mouseleave(function(){
        $('#conteinerConteudo>header>#perfil>#menuSuspenso').css('display','none');
    })


    $('#conteinerConteudo > header > .material-symbols-outlined').click(function(){
        
        if($('#containerMenu > #containerMenuIcones .descricaoIcone').css('display') == 'none'){
            
            if($(window).width() <= 480){
                $('#containerMenu').css('display','flex');

                $('#containerMenu').animate({
                    width:'60%'
                },200)

                $('#conteinerConteudo > header').animate({
                    paddingLeft:'62%'
                },200)
            }else{

                $('#containerMenu').animate({
                    width:300
                },200)

                $('#conteinerConteudo > header').animate({
                    paddingLeft:225
                },200)
            }


            $('#containerMenu > #containerMenuIcones').css('align-items','start');
    
            
            $('#containerMenu > #containerMenuIcones > #iconesCentrais').css('align-items','start');
    
            $('#containerMenu > #containerMenuIcones .descricaoIcone').css('display','initial');

            $('#conteinerConteudo > header > #perfil > a').css('display','none');
        }else{

            if($(window).width() <= 480){
                $('#containerMenu').css('display','none');
            }

            $('#containerMenu').animate({
                width:90
            },200)
    
            $('#conteinerConteudo > header').animate({
                paddingLeft:15
            },200)

            $('#containerMenu > #containerMenuIcones').css('align-items','center');

            $('#containerMenu > #containerMenuIcones > #iconesCentrais').css('align-items','center');

            $('#containerMenu > #containerMenuIcones .descricaoIcone').css('display','none');

            setTimeout(function(){
                $('#conteinerConteudo > header > #perfil > a').css('display','initial');
            },100)

        }

    })

    validacaoCadastro();

    $('#formLogin').submit(function(){
        if($('#usuarioLogin').val() != localStorage.getItem('usuario') || $('#senhaLogin').val() != localStorage.getItem('senha')){
            alert('Usuário e senha incorretos. Tente novamente.');
            return false;
        }else{
            localStorage.setItem('validacaoAcesso',true);
        }
    })

})

var validacaoCadastro = function(){
    var verificacaoNomeComp = false;
    var verificacaoUsuario = false;
    var verificacaoSenha = false;

    $('#nomeCompCadastro').blur(function(){
        var testNomeComp = /^[A-Za-zÀ-ÖØ-öø-ÿ']{2,}(\s[A-Za-zÀ-ÖØ-öø-ÿ']{2,})+$/;
        
        if(testNomeComp.test($('#nomeCompCadastro').val()) == false){
            $('#nomeCompCadastro').css('outline','3px solid red');
            verificacaoNomeComp = false;
        }else{

            $('#nomeCompCadastro').css('outline','3px solid var(--verde)');
            verificacaoNomeComp = true;
        }

    })

    $('#usuarioCadastro').blur(function(){
        var testUsuario = /^[a-zA-Z0-9.-]{3,}$/;
        
        if(testUsuario.test($('#usuarioCadastro').val()) == false){
            $('#usuarioCadastro').css('outline','3px solid red');
            verificacaoUsuario = false;
        }else{

            $('#usuarioCadastro').css('outline','3px solid var(--verde)');
            verificacaoUsuario = true;
        }

    })

    $('#senhaCadastro').blur(function(){
        var testSenha = /^[a-zA-Z0-9.@-_]{4,}$/;
        
        if(testSenha.test($('#senhaCadastro').val()) == false){
            $('#senhaCadastro').css('outline','3px solid red');
            verificacaoSenha = false;
        }else{

            $('#senhaCadastro').css('outline','3px solid var(--verde)');
            verificacaoSenha = true;
        }

    })

    $('#formCadastro').submit(function(){
    
        if(verificacaoNomeComp == false || verificacaoUsuario == false || verificacaoSenha == false){
            alert('Preencha o formulário corretamente.')
            return false;
        }else{
            
            localStorage.setItem('usuario',$('#usuarioCadastro').val());
            localStorage.setItem('senha',$('#senhaCadastro').val());
            localStorage.setItem('nomeComp',$('#nomeCompCadastro').val());
            alert('Cadastro realizado com sucesso!');
        }


    })
}