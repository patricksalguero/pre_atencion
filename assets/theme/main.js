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
})