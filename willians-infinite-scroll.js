var apresentar = 9;
var intervalo = null;
verificarRolagem();


$(document).ready(function(){
    //$('.infinite-scroll').jscroll();

    $(".post").hide();

    mostrar(apresentar);

    $("#mais").click(function(){
        mostrar(apresentar);
    });

    $("#teste").click(function(){
        runTheTest();
    });
})

// function getDocHeight() {
//     var D = document;
//     return Math.max(
//         D.body.scrollHeight, D.documentElement.scrollHeight,
//         D.body.offsetHeight, D.documentElement.offsetHeight,
//         D.body.clientHeight, D.documentElement.clientHeight
//     );
// }

//$(window).scroll(function() {
   //  console.error("calculando ---------------");
   //  var top = $(window).scrollTop(); console.info("top: " + top);
   //  var height = $(window).height(); console.info("height: " + height);
   //  var doc = getDocHeight(); console.info("doc: " + doc);
   //  var soma = top + height; console.info("soma: " + (top + height));



   // if( (soma+500) > doc) {
   //     mostrar(apresentar);
   // }
//});

//onscroll="scrolled(this)"

function mostrar(posicao){

    for(cont = 0; cont<posicao+1; cont++){
        $(".post:nth-child("+cont+")").show();
    }

    apresentar +=9;
}


function verificarRolagem(){           
    intervalo = setInterval(function(){
        runTheTest();
    }, 1000);    
}

function apresentouTodosPosts(){
    return $(".post:visible").length == $(".post").length;
}

function runTheTest() {
    clearInterval(intervalo);

    var el = document.getElementById('mais');
    var vis = isElementInViewport(el);
           
    if (!vis){
        console.info("nao");
        verificarRolagem();
        
    }else{
        console.info("sim");
        $("#loading-posts").show();
        
        setTimeout(function(){
            $("#loading-posts").hide();
            mostrar(apresentar);
            if( !apresentouTodosPosts() ){ 
                verificarRolagem();
            }

        }, 3000);

        
    }
}

function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= ($(window).height()) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}