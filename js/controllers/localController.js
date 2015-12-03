app.controller('LocalController', function($scope, $stateParams, $ionicModal, $timeout) {
    
        
    $scope.idLocal = $stateParams.id;
    
    
    $scope.code = $stateParams.status;
    
    
    $scope.control = true;
    
    $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    
    $scope.openModal = function() {
        $scope.modal.show();
    };
    
    $scope.closeModal = function() {
        $scope.modal.hide();
    };

    
    if ($scope.code == 1)
    {
       $timeout(function(){
            $scope.openModal();
        });
    }


    
    $scope.locais = [
        {
            nome: 'Praça Dom Adauto - 1',
            imagens: ['praca-1/1 ok.png',
                      'praca-1/2 ok.png',
                      'praca-1/3 ok.png'
            ],
            descricao: 'A praça segue um padrão trapezoidal: no início é estreita e vai se alargando na medida que se aproxima da igreja, como forma de anunciação progressiva, característica da urbanística barroca. Hoje, a praça pode ser dividida em duas partes: antes e depois do prédio dos correios que prejudica a visibilidade da vista da praça após o prédio e das demais edificações, como a Igreja. A parcela da praça que se encontra antes do prédio dos correios está sendo utilizada para a locar uma feira livre da cidade.',
            dica: 'O tesouro não está aqui, mas mesmo se tivesse dificilmente você encontraria. Tem uma barreira visual no meio da praça!',
            alerta: 'Mas não desanime, veja uma fotos de como era essa praça antes da construção do prédio dos correios e siga até um lugar de onde se pode visualizar a igreja por completo.',
            imgPista: 'img/locais/praca-1.png'
        },
        {
            nome: 'Praça Dom Adauto - 2',
            imagens: ['praca-2/1 ok.png',
                      'praca-2/2 ok.png',
                      'praca-2/3 ok.png',
                      'praca-2/4 ok.png',
                      'praca-2/5 ok.png',
                      'praca-2/6 ok.png',
                      'praca-2/7 ok.png',
                      'praca-2/8 ok.png',
                      'praca-2/9 ok.png',
            ],
            descricao: 'O segundo ponto é a parte da praça que fica mais próxima a Igreja, local aberto que dá visibilidade e direciona o olhar para ela. Da praça, podemos ter visibilidade para conjuntos de casas coloniais além do caminho para o Teatro e o Cemitério, todos na mesma rua da Igreja. A sua configuração favorece a permanência dos que usufruem dela e serve como local de atividades coletivas e ainda como forma de vigilância natural. Nesse ponto da praça, é perceptível que a visão tornou-se mais limpa, seja pela uniformidade dos elementos e do gabarito do conjunto de casas coloniais ou pela ausência da barreira visual verificada no ponto anterior. Ainda na praça podemos observar o monumento de Oswaldo Trigueiro de Albuquerque Melo, político que fez parte da história da cidade. ',
            dica: 'A vista está limpa e a partir dessa praça você consegue ver completamente a Igreja, mas não o tesouro, é preciso andar mais um pouco. Aprecie a vista dos azulejos portugueses e de quebra ganhe um fundo para sua foto.',
            alerta: 'Não se avexe que o ponto de wi-fi é aqui, poste a foto, mas não vale se atrasar e esquecer seu tesouro.  Que tal se confessar?',
            imgPista: 'img/locais/praca-2.png'
        },{
            nome: 'Conjunto de Casas',
            imagens: ['conjunto-casas/1 ok.png',
                      'conjunto-casas/2 ok.png',
                      'conjunto-casas/3 ok.png',
                      'conjunto-casas/4 ok.png',
                      'conjunto-casas/5 ok.png',
            ],
            descricao: 'O conjunto de casas no estilo colonial reproduzem os padrões de época. As residências térreas pertenciam as classes mais baixas e os sobrados de dois andares, às classes mais altas. Elas seguem o traçado da rua e são geminadas, com duas àguas, uma frontal e outra posterior. As aberturas frontais serviam de conexão com a rua e as posteriores para ventilação e iluminação natural. Entre as aberturas haviam as alcovas, para permanência noturna, e nesse tipo de edificação havia ausência de vegetação e de jardins. As casas eram padronizadas com o uso dos documentos normativos chamados cartas régias, advindo da cultura portuguesa medieval-renascentista. Atualmente a visibilidade desse conjunto de casas é prejudicada pela presença inadequada de fios e postes, o que não valoriza sua fachada original. Outro problema encontrado nesse quesito de preservação são as placas de alguns estabelecimentos comerciais que escondem sua originalidade com esses elementos que em muitos casos não “conversam” com a arquitetura colonial',
            dica: 'Nossa, percebeu a falta de sinalização? Mas fique atento, você chegou a um lugar muito importante para a memória cultural da cidade. Aqui você pode encontrar muitas relíquias e marcas da história de um cantor da terra. Olhe em sua volta e veja quantas construções coloniais, mas observe também que nem todas estão bem conservadas. Uffa! já andamos bastante, porém ainda está “frio” para encontrar o tesouro.',
            alerta: 'Siga o caminho, mas antes que tal se refrescar? Procure a casa com uma simpática senhora vendendo delícias geladas.',
            imgPista: 'img/memorial.png'
        },{
            nome: 'Igreja',
            imagens: ['igreja/1 ok.png',
                      'igreja/2 ok.png',
                      'igreja/3 ok.png',
            ],
            descricao: 'A Igreja Matriz de Nossa Senhora de Boa Viagem foi fundada pelo vigário, Frei Alberto Cabral, em 1861 e inaugurada em 1868. Inicialmente, era em estilo clássico predominante, porém a mesma passou por diversas reformas em seu interior e fachada, adquirindo traços góticos e barrocos. Esse traços podem ser observados nas arcadas ogivais, altares, forro, arcos, paredes e torres, demonstrando o poder e a imponência da sociedade da época. Centralizada ao cume central da edificação, uma cruz de 1,5 m foi colocada expressando o catolicismo, além de possuir em seu interior imagens de santos dispostos em suas paredes e altares,além das 14 estações da via sacra.',
            dica: 'É na igreja que se encontra a realização barroca, realize-se apreciando os mínimos detalhes. Ainda há tempo de se confessar.',
            'alerta':'Vá num lugar onde a saudade é constante e de onde se pode observar a igreja e o teatro.',
            imgPista: 'img/locais/igreja.png'
        },{
            nome: 'Cemitério',
            imagens: ['cemiterio/1 ok.png',
                      'cemiterio/2 ok.png',
                      'cemiterio/3 ok.jpg',
                      'cemiterio/4 ok.png',
            ],
            descricao: 'A localização do cemitério está mais ligada à sua função do que a anunciação: está instalado na rua da igreja, na parte em que ela se estreita. Construído em um dos pontos mais altos do município, a partir dele pode-se visualizar a igreja e o teatro ao fundo, pontos que geralmente podem ser vistos de vários lugares da cidade - característica da exaltação barroca. No cemitério há uma pequena capela, sendo os túmulos mais imponentes localizados próximos a ela e da entrada e pertencentes à classe mais abastada.',
            dica: 'Cemitérios sempre foram lugares de medo, drible as assombrações e dê um close na capela e na vista da cidade daqui de cima. Ainda bem que você já se confessou, se não o fez, ainda resta tempo!',
            alerta: 'A busca continua, por isso siga até o local onde existem diversas lembraças de um grande artista.',
            imgPista: 'img/locais/cemiterio.png'
        },{
            nome: 'Casa da esquina',
            imagens: ['casa-esquina/1 ok.png',
                      'casa-esquina/2 ok.png',
                      'casa-esquina/3 ok.png',
            ],
            descricao: 'Esse tipo de casa é uma variação da arquitetura colonial da época. Normalmente, essas casas possuíam 2 pavimentos (sobrados) em que a parte inferior servia para o comércio. Sua  configuração acompanha a forma das ruas, sua linearidade ou falta dela. O terreno possui subtrações devido a formatação gerada pelas ruas, além de possuírem duas fachadas, cada uma voltada para ruas distintas que formam a esquina. Desta forma, as plantas e telhados das casas sofrem alterações, podendo gerar telhados com água-furtada, que torna desnecessária a utilização de calhas e rufos.',
            dica: 'Agora sim você pode se refrescar! A busca merece essa pausa. Compre um dindin e admire a vista que te espera: a casa de esquina e o largo do teatro, eles auxiliam no traçado urbano da cidade e sua configuração ajuda no destaque para os elementos importantes do local.',
            alerta: 'Busque pelo ambiente ideal para apresentações culturais na cidade.',
            imgPista: 'img/dindin.png'
        },{
            nome: 'Teatro Santa Ignez',
            imagens: ['teatro/1 ok.png',
                      'teatro/2 ok.png',
                      'teatro/3 ok.png',
                      'teatro/4 ok.png',
            ],
            descricao: 'É o terceiro teatro mais antigo da Paraíba, construído em 1902 e inaugurado 2 anos mais tarde pelo chefe político da localidade. O teatro foi responsável por abrir portas para a criação de grupos teatrais na cidade, como o primeiro grupo teatral de Alagoa Grande, o TAG que logo depois passou a ser chamado de TEAG (teatro de estudantes de alagoa grande). O teatro passou por modificações e diferentes utilizações, servindo de cinema local e até mesmo estábulo. Atualmente, possui aproximadamente 180 assentos, para shows e apresentações. A arquitetura presente na edificação é a neoclássica que integra o barroco colonial com elementos de inspiração européia e rústica.',
            dica: 'O teatro é uma das obras mais importantes do Estado, pegue um panfleto, beba uma água e veja a programação dos artistas da terra! A sua fonte é um ótimo local para uma fotografia e para dar uma descansada. Mas não durma no serviço, você não é o único percorrendo esse caminho. ',
            alerta: 'Procure um conjunto de casas diferentes das coloniais, mas que ainda assim são “bellas”.',
            imgPista: 'img/locais/teatro.png'
        },{
            nome: 'Casas da Rua D. Pedro II',
            imagens: ['dom-pedro/1 ok.png',
                      'dom-pedro/2 ok.png',
                      'dom-pedro/3 ok.png',
                      'dom-pedro/4 ok.png',
            ],
            descricao: 'As casas dessa rua são representantes de um movimento da arquitetura do século XIX, em que o centro da cidade se desenvolveu e a antiga tranquilidade foi substituída pelo movimento, assim determinados segmentos da cidade preferiram se afastar do centro, construindo casas de transição, com características da arquitetura rural, como uso de alpendre, varanda, recuos e jardins.',
            dica: 'As casas aqui são belas e únicas, lugar perfeito para um croqui e uma aquarela. Olhe o entorno, veja quantas opções e lembre-se que o tesouro valerá todo o esforço.',
            alerta: 'Foco, você está ficando “quente”! Tem um lugar especial que te proporciona uma vista incrível, procure com paciência, está pertinho.',
            imgPista: 'img/locais/dom-pedro.png'
        },{
            nome: 'Janelas Urbanas',
            imagens: ['janela/1 ok.png',
                      'janela/2 ok.png',
            ],
            descricao: 'A edificação Vila Bella Vista é uma construção da década de 20 e difere da arquitetura que vinha sendo utilizada na época: os jardins residenciais na entrada das casas começaram a ser instalados, a solução adotada para o telhado é diferente da que vinha sendo praticada e nota-se a presença de terraços, bem como a de recuos. As casas vizinhas desse mesmo período possuem cararacterísticas similares e suas fachadas são voltadas para a cidade, o que proporcionava uma “bela vista”, daí, provavelmente deu-se o nome da edificação. É possível encontrar ainda uma janela - vazio entre edificações que se abrem para o ambiente urbano - nesse conjunto de casas mais recentes a partir de onde tem-se uma vista da lagoa que dá nome à cidade e da área central de Alagoa Grande.',
            dica: 'Mas que vista! Um ótimo lugar para um registro. Só não perca seu foco, o tesouro está ficando cada vez mais perto…',
            alerta: 'Consegue ver daqui o brilho do seu tesouro? Vá ao lugar que representa muito a cidade, o local dá nome à ela.',
            imgPista: 'img/locais/janela.png'
        },{
            nome: 'Lagoa',
            imagens: ['lagoa/1 ok.png',
                      'lagoa/2 ok.png',
                      'lagoa/3 ok.png',
                      'lagoa/4 ok.png',
                      
            ],
            descricao: 'Alagoa Grande teve seu nome derivado da Lagoa do Paó, antigo nome dado a lagoa presente na região. A povoação do muncípio feita pelos índios carirís se deu às margens da lagoa do Paó, que era conhecida como Sertão do Paó que significa “nesga de terra que sobe” em tupi-guarani. Após a povoação, a cidade cresceu tanto, a ponto de precisar de uma contenção devido à proximidade com a lagoa.',
            dica: 'Olhe só que vista, o maior tesouro da cidade é a paisagem. Mas isso não quer dizer que você ficou sem pêmio.',
            alerta: 'Se você foi o primeiro a chegar, Parabéns! Procure a organização do congresso e resgate seu tesouro.',
            imgPista: 'img/locais/lagoa.png'
        },
    ]
    
});