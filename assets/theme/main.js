$(document).ready( function() {
    $(".item-tarjeta").click(function(event){
        let classText = 'item-select'
        if( $(this).hasClass(classText)) {
            $(this).removeClass(classText)
            
            $(this).find('.tarjeta1').addClass('d-none')
            return;
        }

        $(this).find('.tarjeta1').removeClass('d-none')
        $(this).addClass(classText)
    })

    //Tipo de Pago
    $(".selected1").click(function(event){
        if(! $(this).hasClass('btn-success')) $(".selected1").addClass('btn-success')
        $(".selected2").removeClass('btn-success')
        $(".selected3").removeClass('btn-success')
    })


    $(".selected2").click(function(event){
        if(! $(this).hasClass('btn-success')) $(".selected2").addClass('btn-success')
        $(".selected1").removeClass('btn-success')
        $(".selected3").removeClass('btn-success')
    })


    $(".selected3").click(function(event){
        if(! $(this).hasClass('btn-success')) $(".selected3").addClass('btn-success')
        $(".selected1").removeClass('btn-success')
        $(".selected2").removeClass('btn-success')
    })

})