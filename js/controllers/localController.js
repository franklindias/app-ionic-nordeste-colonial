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
            imagens: [''
            ],
            descricao: 'A praça segue um padrão trapezoidal: no início é estreita e vai se alargando na medida que se aproxima da igreja, como forma de anunciação progressiva, característica da urbanística barroca. Hoje, a praça pode ser dividida em duas partes: antes e depois do prédio dos correios que prejudica a visibilidade da vista da praça após o prédio e das demais edificações, como a Igreja. A parcela da praça que se encontra antes do prédio dos correios está sendo utilizada para a locar uma feira livre da cidade.',
            dica: '',
            imgPista: ''
        },
        {
            nome: 'Praça Dom Adauto - 2',
            imagens: [''
            ],
            descricao: '',
            dica: '',
            imgPista: ''
        },{
            nome: 'Conjunto de Casas',
            imagens: [''
            ],
            descricao: '',
            dica: '',
            imgPista: ''
        },{
            nome: 'Igreja',
            imagens: [
               ''
            ],
            descricao: 'A Igreja Matriz de Nossa Senhora de Boa Viagem foi fundada pelo vigário, Frei Alberto Cabral, em 1861 e inaugurada em 1868. Inicialmente, era em estilo clássico predominante, porém a mesma passou por diversas reformas em seu interior e fachada, adquirindo traços góticos e barrocos. Esse traços podem ser observados nas arcadas ogivais, altares, forro, arcos, paredes e torres, demonstrando o poder e a imponência da sociedade da época. Centralizada ao cume central da edificação, uma cruz de 1,5 m foi colocada expressando o catolicismo, além de possuir em seu interior imagens de santos dispostos em suas paredes e altares,além das 14 estações da via sacra.',
            dica: 'É na igreja que se encontra a realização barroca, realize-se apreciando os mínimos detalhes. Ainda há tempo de se confessar, depois vá num lugar onde a saudade é constante e de onde se pode observar a igreja e o teatro.',
            imgPista: 'img/locais/igreja.png'
        },{
            nome: 'Cemitério',
            imagens: [''
            ],
            descricao: '',
            dica: '',
            imgPista: ''
        },{
            nome: 'Casa da esquina',
            imagens: [''
            ],
            descricao: '',
            dica: '',
            imgPista: ''
        },{
            nome: 'Teatro Santa Ignez',
            imagens: [''
            ],
            descricao: '',
            dica: '',
            imgPista: ''
        },{
            nome: 'Casas da Rua D. Pedro II',
            imagens: [''
            ],
            descricao: '',
            dica: '',
            imgPista: ''
        },{
            nome: 'Janelas Urbanas',
            imagens: [''
            ],
            descricao: '',
            dica: '',
            imgPista: ''
        },{
            nome: 'Lagoa',
            imagens: [''
            ],
            descricao: '',
            dica: '',
            imgPista: ''
        },
    ]
    
});