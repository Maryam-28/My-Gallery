$(document).ready(function(){
    $('.my_gallery').magnificPopup({
     type: 'image',
     delegate: 'a',
     gallery: {
      enabled : true
     }
    });
   });