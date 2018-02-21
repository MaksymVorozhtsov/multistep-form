$(document).ready(function() {
    $('.services-group').bind('change', function() {    	
        var targetId = '#' + $(this).attr('id') + '-mir';
        if ($(this).prop('checked')){
          $(targetId).attr("checked","checked");}
        else{
          $(targetId).removeAttr("checked"); }
    });
});