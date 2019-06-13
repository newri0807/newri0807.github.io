var imgs=3;
var now=0;

jQuery(document).ready(function(){
    start();
    
/*    
    function start(){
        $(".slide img").eq(0).siblings().css({"margin-top":"-300px"});
        setInterval(function(){slide();},2000);
        
        
        
    }
    
    function slide(){
        now=now==imgs?0:now+=1;
        $(".slide img").eq(now-1).css({"margin-top":"-300px"});
       $(".slide img").eq(now).css({"margin-top":"0px"});
        
        
        
    }
    */




 
   function start(){

      setInterval(function(){

            InOut();},2000);

   }

 

   function InOut(){

      now = ( now == imgs?0:now+=1 );

      $("#con0 img").eq(now-1).fadeOut(1000, function(){

            $("#con0 img").eq(now).fadeIn(1000);

        });      

   }    
    
    

    
    
});



    

