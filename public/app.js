function opencar(carname){
    var i;
    var x = document.getElementsByClassName("car");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(carname).style.display = "block";
  }

  $(document).ready(function(){
$('#btn2').click(function(){
  $('#right ').css("color" , "green");
  $('#right').css("font-size" , "20px");
  $('#right').css("font-weight" , "bold");
});
$("#btn3").click(function(){
  $("#not,not").toggle(400)
});
$("#click1").click(function(){
  window.confirm("right-answer");
});

$('.wrong').click(function(){
  window.confirm("wrong answer");
});

$('#btn4').click(function(){
  $('#rightanswer').css("color","darkblue");
  $('#rightanswer').css("font-size","20px");

});

$('.pop').click(function(){
 window.confirm("right answer");
});

$('.no').click(function(){
 window.confirm("wrong answer");
});

$('#btn5').click(function(){
 $('#go,go').toggle(400);
});

$('#btn6').click(function(){
 $('#r1').css('color','blue');
 $('#r1').css('font-size','20px');

});
$('#btn7').click(function(){
 $('#test,test').toggle(400);
});

$('.up').click(function(){
  window.confirm('right answer');
});

$('.yes').click(function(){
  window.confirm('wrong answer');
});

$('#btn8').click(function(){
  $('#cl').css('color','deepskyblue');
  $('#cl').css('font-size','20px');
});

$('.open2').click(function(){
  window.confirm('right answer');
});

$('#btn9').click(function(){
 $('#hidden,hidden').toggle(400);
});

$('.cross').click(function(){
  window.confirm('wrong answer');
});

$('#pk').click(function(){
  $('.vikas').css('color',"green");
  $('.vikas').css('font-size',"16px");

});

$('#btnopen').click(function(){
  $('#show1').css('color','orange');
  $('#show1').css('font-size','20px');
});

$('#btnshow').click(function(){
  $('#show2,show2').toggle(400);
});

$('.run2').click(function(){
  $('.s1').css('color', 'blue');
});
$('.run3').click(function(){
  $('.s2').css('color', 'lightblue');
});
$('.run4').click(function(){
  $('.s3').css('color', 'pink');
});



});

