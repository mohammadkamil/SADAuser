/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
 
   
        /* graphic button  #btnKor */
    $(document).on("click", "#btnKor", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#korporat"); 
         return false;
    });
    
        /* graphic button  #btnPeng */
    $(document).on("click", "#btnPeng", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#penguna"); 
         return false;
    });
    
        /* graphic button  #btnKerjaya */
    $(document).on("click", "#btnKerjaya", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#kerjaya"); 
         return false;
    });
    
        /* graphic button  #btnTender */
    $(document).on("click", "#btnTender", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#tender"); 
         return false;
    });
    
        /* graphic button  #btnInfo */
    $(document).on("click", "#btnInfo", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#infoam"); 
         return false;
    });
    
        /* button  #menu */
    $(document).on("click", "#menu", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#menuSlide"));  
         return false;
    });
    
        /* button  #plihbank */
    $(document).on("click", "#plihbank", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#bank"); 
         return false;
    });
    
    
        /* button  #cari */
    $(document).on("click", "#cari", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#cariantukang"); 
         return false;
    });
    
        /* button  #home */
    $(document).on("click", "#home", function(evt)
    { uib_sb.toggle_sidebar($("#menuSlide"));  
         /*global activate_subpage */
         activate_subpage("#page_38_94"); 
         return false;
    });
    
        /* button  #slideKor */
    $(document).on("click", "#slideKor", function(evt)
    { uib_sb.toggle_sidebar($("#menuSlide"));  
         /*global activate_subpage */
         activate_subpage("#korporat"); 
         return false;
    });
    
        /* button  #slidePeng */
    $(document).on("click", "#slidePeng", function(evt)
    { uib_sb.toggle_sidebar($("#menuSlide"));  
         /*global activate_subpage */
         activate_subpage("#penguna"); 
         return false;
    });
    
        /* button  #slideKer */
    $(document).on("click", "#slideKer", function(evt)
    { uib_sb.toggle_sidebar($("#menuSlide"));  
         /*global activate_subpage */
         activate_subpage("#kerjaya"); 
         return false;
    });
    
        /* button  #slideTen */
    $(document).on("click", "#slideTen", function(evt)
    { uib_sb.toggle_sidebar($("#menuSlide"));  
         /*global activate_subpage */
         activate_subpage("#tender"); 
         return false;
    });
    
        /* button  #slideInfo */
    $(document).on("click", "#slideInfo", function(evt)
    { uib_sb.toggle_sidebar($("#menuSlide"));  
         /*global activate_subpage */
         activate_subpage("#infoam"); 
         return false;
    });
    
        /* button  #btnlogin */
    $(document).on("click", "#btnlogin", function(evt)
    { uib_sb.toggle_sidebar($("#menuSlide"));  
         /*global activate_subpage */
         activate_subpage("#login"); 
         return false;
    });
    
        /* button  Exit */
    $(document).on("click", ".uib_w_20", function(evt)
    { uib_sb.toggle_sidebar($("#menuSlide"));  
        /* your code goes here */ 
         return false;
    });
    
        /* button  #login */
    
    
        /* button  #daftar */
    $(document).on("click", "#daftar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#register"); 
         return false;
    });
    
        /* button  #bantu */
    $(document).on("click", "#bantu", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#bantu").modal("toggle");  
         return false;
    });
    
        /* button  #register */
   
    
        /* button  #lksPeta */
    $(document).on("click", "#lksPeta", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#lokasipeta"); 
         return false;
    });
    
        /* button  Lokasi di Peta */
    $(document).on("click", ".uib_w_149", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#lokasipeta"); 
         return false;
    });
    
        /* button  Lokasi di Peta */
    $(document).on("click", ".uib_w_150", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#lokasipeta"); 
         return false;
    });
    
        /* button  Lokasi di Peta */
    $(document).on("click", ".uib_w_151", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#lokasipeta"); 
         return false;
    });
    
        /* button  Lokasi di Peta */
    $(document).on("click", ".uib_w_152", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#lokasipeta"); 
         return false;
    });
    
        /* listitem  #aduan */
    $(document).on("click", "#aduan", function(evt)
    {
         /*global activate_subpage */
        $("#aduanTarikh").val(moment().format('YYYY-MM-DD'));
        
    // onSuccess Callback 
    // This method accepts a Position object, which contains the 
    // current GPS coordinates 
    // 
    var onSuccess = function(position) {
        $("#aduanLokasi").val('Latitude: '+ position.coords.latitude+ '\n' +' Longitude: '+ position.coords.longitude);
      
    };
 
    // onError Callback receives a PositionError object 
    // 
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
 
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
 
        
         activate_subpage("#aduanpenguna"); 
         return false;
    });
    
        /* listitem  #bayar */
    $(document).on("click", "#bayar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pembayaran"); 
         return false;
    });
    
        /* listitem  #cawagan */
    
    
        /* listitem  #cari */
    $(document).on("click", "#cari", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#senaraiTukang"); 
         return false;
    });
    
        /* listitem  Wilayah Utara 1 */
    $(document).on("click", ".uib_w_78", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#snaraicawagan"); 
         return false;
    });
    
        /* listitem  Wilayah Utara 2 */
    $(document).on("click", ".uib_w_79", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#snaraicawagan"); 
         return false;
    });
    
        /* listitem  Wilayah Tengah */
    $(document).on("click", ".uib_w_80", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#snaraicawagan"); 
         return false;
    });
    
        /* listitem  Wilayah Timur */
    $(document).on("click", ".uib_w_81", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#snaraicawagan"); 
         return false;
    });
    
        /* listitem  Wilayah Selatan */
    $(document).on("click", ".uib_w_82", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#snaraicawagan"); 
         return false;
    });
    
        /* listitem  Wilayah Langkawi */
    $(document).on("click", ".uib_w_83", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#snaraicawagan"); 
         return false;
    });
    
        /* listitem  #cawagan */
    $(document).on("click", "#cawagan", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#cawagansada"); 
         return false;
    });
    
        /* listitem  #bil */
    $(document).on("click", "#bil", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#semakBil"); 
         return false;
    });
    
        /* button  #loginSemak */
    $(document).on("click", "#loginSemak", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#login"); 
         return false;
    });
    
        /* button  #btnSemakBil */
    $(document).on("click", "#btnSemakBil", function(evt)
    {
         /*global activate_subpage */
      var akaun=  $("#noBilSemak").val();
        $("#infoDisplay").html("No Akaun Bil: "+akaun+"<br>Jumlah yang perlu dibayar: RM 123.34");
         activate_subpage("#infobil"); 
         return false;
    });
    
        /* button  #paybil */
    $(document).on("click", "#paybil", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#bank"); 
         return false;
    });
    
        /* button  #login */
    $(document).on("click", "#login", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#infoBil2"); 
         return false;
    });
    
        /* button  #register */
    $(document).on("click", "#register", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#login"); 
         return false;
    });
    
        /* button  Bayar Bil */
    $(document).on("click", ".uib_w_186", function(evt)
    {
         /*global activate_subpage */
            $("#infoDisplay").html("No Akaun Bil: 91111115424<br>Jumlah yang perlu dibayar: RM 0.00");
         activate_subpage("#infobil"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
