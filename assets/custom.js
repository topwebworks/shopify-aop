var originPath = window.location.origin;
jQuery_T4NT(document).ready(function($) {
   /******************************Custom Page Start**********************************/
  var wishlistNumer = $(".t4s-account-nav-link--wishlist").length;
  if(wishlistNumer>0){
    setTimeout(function () {
    var countGet = $("#zooomy-wishlist-counter span").html();
    $(".t4s-account-nav-link--wishlist span").html(countGet);
       }, 1500);
  }
  $(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
  /******************************Custom Page End**********************************/
  const isNumericInput = (event) => {
	const key = event.keyCode;
	return ((key >= 48 && key <= 57) || // Allow number line
		(key >= 96 && key <= 105) // Allow number pad
	);
};

const isModifierKey = (event) => {
	const key = event.keyCode;
	return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
		(key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
		(key > 36 && key < 41) || // Allow left, up, right, down
		(
			// Allow Ctrl/Command + A,C,V,X,Z
			(event.ctrlKey === true || event.metaKey === true) &&
			(key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
		)
};

const enforceFormat = (event) => {
	// Input must be of a valid number format or a modifier key, and not longer than ten digits
	if(!isNumericInput(event) && !isModifierKey(event)){
		event.preventDefault();
	}
};

const formatToPhone = (event) => {
	if(isModifierKey(event)) {return;}

	// I am lazy and don't like to type things more than once
	const target = event.target;
	const input = event.target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
	const zip = input.substring(0,3);
	const middle = input.substring(3,6);
	const last = input.substring(6,10);

	if(input.length > 6){target.value = `(${zip}) ${middle} - ${last}`;}
	else if(input.length > 3){target.value = `(${zip}) ${middle}`;}
	else if(input.length > 0){target.value = `(${zip}`;}
};

const inputElement = document.getElementById('AddressPhoneNew');
  if (inputElement) {
inputElement.addEventListener('keydown',enforceFormat);
inputElement.addEventListener('keyup',formatToPhone);
  }



  // data-flickityt4s-js='{"setPrevNextButtons":true,"arrowIcon":"1","imagesLoaded": 0,"adaptiveHeight": 0, "contain": 1, "groupCells": "100%", "dragThreshold" : 5, "cellAlign": "left","wrapAround": true,"prevNextButtons": true,"percentPosition": 1,"pageDots": false, "autoPlay" : 0, "pauseAutoPlayOnHover" : true }'
//   $('.relateds-prouct-slidr').flickity({
//   // options
//   cellAlign: 'left',
//   contain: true
// });
  

 $(document).on('click','.t4s-section-header .t4s-container nav.t4s-navigation li a',function(e){
    if($(this).siblings('.t4s-sub-menu').find('.t4s-lazy_menu').children().length > 0){
      e.preventDefault();
      $(this).parent('li').siblings('li').removeClass('is-action__hover');
      $(this).parent('li').addClass('is-action__hover');
    }
  });
  //click outside
  $(document).mouseup(function(e){
  var container = $("a.t4s-align-items-center");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
      $(container).parent('li').removeClass('is-action__hover');
    }
  });
  // open poup click on header login/create account
  $(".t4s-top-bar-custom__html.t4s-rte--list .login, .login-btn").on("click",function(){
    console.log("open");
    $(".t4s-site-nav__icon.t4s-site-nav__account.t4s-pr.t4s-d-none.t4s-d-md-inline-block .t4s-pr").trigger("click");
  });
 
  // login popup js
  var isALARenderedlogin;
  function ALAcheck_login() {
    isALARenderedlogin = setInterval(function () {
      customALA_login()
    }, 200);
  }
  ALAcheck_login();
  function customALA_login() {
  var selector = $("#login_login-sidebar");
      if(selector.length > 0) {
      clearInterval(isALARenderedlogin);
      
      $(document).find("#t4s-login-sidebar .t4s_field.t4s_mb_20 button").on("click",function(e){
       var IDGet = $(this).parents("form").attr("id");
        if(IDGet == "recover_customer_passwordlogin-sidebar")
        {
          e.preventDefault();
          $(this).parents("#recover_customer_passwordlogin-sidebar").submit();
        }
        else{
        var LoginRedirect = window.location.href;
        $(".loginFormPop").attr("value", LoginRedirect);          
        var email = $('#CustomerEmail').val();  
        // var password = $('#CustomerPassword').val(); 
        var password = $(this).parents().siblings(".t4s_field.t4s-pr.t4s_mb_10").find("#CustomerPassword").val();
        var ck = $("#customer_loginlogin-sidebar input[name='ck-custom']").is(":checked");
        if(!email){
           e.preventDefault();
            $('.error_msg.email').text('This field is required');  
        }
        else if(!password)
        {
           e.preventDefault();
          $('.error_msg.pass').text('This field is required');  
        }
          // else if(!ck)
          // {
          //    e.preventDefault();
          //   // $('.form-group.checkbox.t4s_mb_20 .h6').addClass('error');
          //   $('.form-group.checkbox.t4s_mb_20 .h6').css("color","red");
          // }
        else
        {
            var regEx = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
            var validEmail = regEx.test(email);  
            if (!validEmail) { 
               e.preventDefault();
              $('.error_msg.email').text('Enter a valid email');  
            }
              
            else if (password.length < 8) { 
               e.preventDefault();
              $('.error_msg.pass').text('Password must be at least 8 characters long');  
            }
            else
            {
              $(".error_msg.email").hide();
              $(".error_msg.pass").hide();
              $('.form-group.checkbox.t4s_mb_20 .h6').css("color","#494d54");
              // $('.form-group.checkbox.t4s_mb_20 .h6').removeClass('error');
              $(this).parents("#customer_loginlogin-sidebar").submit();
            }
        }
        }
      });

    
      $(document).find("#t4s-login-sidebar .t4s-drawer__content #login_login-sidebar #customer_loginlogin-sidebar .t4s_field .show-password").on("click",function(){
         var get_pass = $(this).parents(".t4s_field.t4s-pr.t4s_mb_10").find("#CustomerPassword").val();
        if($($(this).parents(".t4s_field.t4s-pr.t4s_mb_10").find("#CustomerPassword")).attr("type") == "password")
        {
         $(this).parents(".t4s_field.t4s-pr.t4s_mb_10").find("#CustomerPassword").attr("type", "text");
          $(this).parents(".t4s_field.t4s-pr.t4s_mb_10").find("#CustomerPassword").val(get_pass);
          $(".active-state").show();
          $(".default-state").hide();
        }
        else
        {
          $(this).parents(".t4s_field.t4s-pr.t4s_mb_10").find("#CustomerPassword").attr("type", "password");
          $(".active-state").hide();
          $(".default-state").show();
        }
    });
    }  
  }

  // customALA register
var isALARenderedreg;
  function ALAcheck_reg() {
    isALARenderedreg = setInterval(function () {
      customALA_reg()
    }, 200);
  }
  ALAcheck_reg();
  function customALA_reg() {
     var selector_1 = $("#create_login-sidebar");
    if(selector_1.length > 0) {
      clearInterval(isALARenderedreg);
      $(document).find("#customer_createlogin-sidebar .t4s_field.t4s-pr.t4s_mb_10 span.show-password").on("click",function(){
     
        var get_pass_retpe = $(this).siblings("input").val();
        if($(this).siblings("input").attr("type") == "password")
        {
          $(this).siblings("input").attr("type", "text");
          //console.log(get_pass_retpe);
          $(this).siblings("input").val(get_pass_retpe);
          $(this).find(".active-state").show();
          $(this).find(".default-state").hide();
        }
        else
        {
          $(this).siblings("input").attr("type", "password");
          $(this).find(".active-state").hide();
          $(this).find(".default-state").show();
        }
    });

       $(document).find("#t4s-login-sidebar .t4s_field.t4s_mb_20.register button").on("click",function(e){
         //console.log("click");
        var email = $('#RegisterForm-email').val();  
        var password = $('#RegisterForm-password').val(); 
        var retype_password = $('#RegisterForm-RetypePassword').val(); 
        var first_name = $('#RegisterForm-FirstName').val();
        var last_name = $('#RegisterForm-LastName').val();
        var $this = $(this);
        var CurrentLink = window.location.href;
        CurrentLink = CurrentLink.split("?");
         CurrentLink = CurrentLink[0];
        $("#create_login-sidebar input[name='return_to']").val(CurrentLink);
       
       // console.log(ck);
        if(!first_name){
           e.preventDefault();
            $('.fname_error').text('This field is required');  
        }
        else if(!last_name)
        {
           e.preventDefault();
          $('.Lname_error').text('This field is required');  
        }
        else if(!password)
        {
           e.preventDefault();
          $('.password-note-text').css('color','red');
        }
       else if(!retype_password)
        {
           e.preventDefault();
          $('.retype_pass').text('This field is required'); 
        }
        else if(!email)
        {
           e.preventDefault();
          $('.email_error').text('This field is required'); 
        }
        else
        {
          var regEx = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
          var validEmail = regEx.test(email);  
          if (!validEmail) { 
             e.preventDefault();
            $('.error_msg.email').text('Enter a valid email'); 
          }
          else if (password.length < 8) { 
             e.preventDefault();
            $('.password-note-text').css('color','red');
          }
          else if (password != retype_password) { 
             e.preventDefault();
            $('.retype_pass').text('please add correct password'); 
          }
          else
          {
            
            $('.fname_error').hide();  
            $('.Lname_error').hide();  
            $('.password-note-text').css('color','#1b1c1e');
            $('.retype_pass').hide();  
            $('.email_error').hide(); 
            var encrypted = CryptoJS.AES.encrypt(password, "password");
            localStorage.setItem('Fname', first_name);
            localStorage.setItem('Lname', last_name);            
            localStorage.setItem('email', email);
            localStorage.setItem('pass', encrypted);
            localStorage.setItem('return_url', CurrentLink);
            $this.parents("#customer_createlogin-sidebar").submit();
            
          } 
        }
      });
      
    }
  }
  
   
});


$('body').on('click', '.t4s-customer #create_customer .t4s_btn_submmit', function(e) {
 // $("#create_customer").submit(function(event){
    e.preventDefault();
   var email = $('#RegisterForm-email').val();  
        var password = $('#RegisterForm-password').val(); 
        var retype_password = $('#RegisterForm-RetypePassword').val(); 
        var first_name = $('#RegisterForm-FirstName').val();
        var last_name = $('#RegisterForm-LastName').val();
         var $this = $(this);
       
       // console.log(ck);
        if(!first_name){
           e.preventDefault();
            $('.fname_error').text('This field is required');  
        }
        else if(!last_name)
        {
           e.preventDefault();
          $('.Lname_error').text('This field is required');  
        }
        else if(!password)
        {
           e.preventDefault();
          $('.password-note-text').css('color','red');
        }
        else if(!email)
        {
           e.preventDefault();
          $('.email_error').text('This field is required'); 
        }
        else
        {
          var regEx = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
          var validEmail = regEx.test(email);  
          if (!validEmail) { 
             e.preventDefault();
            $('.error_msg.email').text('Enter a valid email'); 
          }
          else if (password.length < 8) { 
             e.preventDefault();
            $('.password-note-text').css('color','red');
          }
          else
          {
            $('.fname_error').hide();  
            $('.Lname_error').hide();  
            $('.password-note-text').css('color','#1b1c1e');
            $('.retype_pass').hide();  
            $('.email_error').hide(); 
            var encrypted = CryptoJS.AES.encrypt(password, "password");
            localStorage.setItem('Fname', first_name);
            localStorage.setItem('Lname', last_name);            
            localStorage.setItem('email', email);
            localStorage.setItem('pass', encrypted);
            $("#create_customer").submit();
          } 
        }
//});
})

var Errorlngth = ($(".form__message").length);
            var pasencrypted = (localStorage.getItem('pass'));
            var emailGet = (localStorage.getItem('email'));
            var FirstName = (localStorage.getItem('Fname'));
            var LastName = (localStorage.getItem('Lname'));
            var pathname = window.location.pathname;
if (localStorage.getItem("pass") === null) {
}
else
{
if((Errorlngth==1) && (pathname=="/account/register")){
}
else{
  if (localStorage.getItem("return_url") === null) {
            var decrypted = CryptoJS.AES.decrypt(pasencrypted, "password");
            decrypted = decrypted.toString(CryptoJS.enc.Utf8);
            ajaxUrl = originPath+'/apps/api/teacher/save';
            var data = new FormData();
            data.append('first_name', FirstName);
            data.append('last_name', LastName); 
            data.append('password', decrypted);
            data.append('email', emailGet);
  
            function reqListener() {
            //console.log(this.responseText);
              //localStorage.clear();
               var getstatus = this.responseText;
              getstatus = $.parseJSON(getstatus); //convert to javascript array
              var geterrortext = "";
              $.each(getstatus,function(key,value){
                 if(key == "error"){
                geterrortext = value;
                  localStorage.clear();
                 }
                else if(key == "success"){
               localStorage.clear();
                  //console.log("submit");
                }
              });
              
            } 
            const req = new XMLHttpRequest();
            req.addEventListener("load", reqListener); 
            req.open("POST", ajaxUrl);
            req.send(data);
}
}
}
if (localStorage.getItem("return_url") !== null) {
var CurrentPath = $(location).attr("pathname");
  if((CurrentPath == "/challenge")){}
      else{
  console.log(CurrentPath)
  if(CurrentPath.indexOf("account/register") != -1){
  var DivISze = $(".form__message").length;
    console.log($(".form__message").length)
  if(DivISze > 0){
    localStorage.removeItem('return_url'); 
  }else{
  var locationget = (localStorage.getItem("return_url"));
  window.location.href = locationget;
  localStorage.removeItem('return_url'); 
  }
  }
  else{
  var locationget = (localStorage.getItem("return_url"));
 window.location.href = locationget;
  localStorage.removeItem('return_url');
  }
    }
}
 $(window).scroll(function () {
        var sticky = $(".t4s-section-header"),
            scroll = $(window).scrollTop();
        scroll >= 100
            ? (sticky.addClass("site-header--stuck"),
              setTimeout(function () {
                  sticky.addClass("site-header--opening");
              }, 100))
            : (sticky.removeClass("site-header--stuck"),
              setTimeout(function () {
                  sticky.removeClass("site-header--opening");
              }, 100));
    });
$(".t4s-close-overlay, .t4s-drawer__close, .done-text").click(function(e){
  e.preventDefault();
  if($(this).hasClass("student_cancel"))
  {
    location.reload();
  }
  else
  {
  $(".t4s-close-overlay").removeClass("is--visible open");
  $("#t4s-consest-modal").removeClass("open");
    $("body").removeClass("show-popup");
  $("html").removeClass("show-popup");
    }
})

$(".dropdown.student-meta.digital-drop .select").click(function(){
  $(this).next("ul").toggle();
  $(this).toggleClass("open");
}) 

 setTimeout(function() {
   $(".t4s-countdown-pr.t4s-text-start.t4s-dn.t4s-countdown-enabled").show();
 }, 3000);

/*******************************Mobile Login Start *************************************/
$('body').on('click', '.mobile-login a', function(e) {
  e.preventDefault();
  $("#t4s-menu-drawer").attr("aria-hidden","true");
  $("#t4s-login-sidebar").attr("aria-hidden","false");
  $("body").addClass("t4s-lock-scroll is--opend-drawer");
  $(".t4s-close-overlay.t4s-op-0").addClass("is--visible");
})
/*******************************Mobile Register End**************************************/
/***********************************************Enroll Popup Start*****************************************/
$(".student-enroll-free-button").click(function(e){
  e.preventDefault();
  $(this).addClass("enroll_loader");
    var courId = $(this).attr("data-CourID");
   var stuId = $(this).attr("data-StudentId");
  var stuName = $(this).attr("data-name");
  ajaxUrl = originPath+'/apps/api/lms/student/enroll?student_id='+stuId+'&course_id='+courId; 
function reqListener() {
  var getstatus = (this.responseText);
  getstatus = $.parseJSON(getstatus);

  $.each(getstatus,function(key,value){
    if((key == "success") && (value == true)){
                  $(".student-enroll-free-button").removeClass("enroll_loader");
                  $(".enroll-confirmation-overlay").addClass("is--visible");
                  $(".enroll-conformation-popup").attr("aria-hidden","false");
    }
    else{
      $(".student-enroll-free-button").removeClass("enroll_loader");
               //alert(value);
    }
              });
  
 
}
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener); 
  req.open("POST", ajaxUrl);
  req.setRequestHeader('ngrok-skip-browser-warning', "69420");
  req.send();
 

})

$(".confirm-enroll-btn, .enroll_close").click(function(){
    $(".enroll-confirmation-overlay").removeClass("is--visible");
  $(".enroll-conformation-popup").attr("aria-hidden","true");
  var StudentId = $(".student-enroll-free-button").attr("data-studentid");
  var handle = $(".student-enroll-free-button").attr("data-prohandle");
  var combined = (StudentId+handle);
  var enroll_access_check = "yes";
  localStorage.removeItem(combined);
  //localStorage.setItem(combined, enroll_access_check);
  location.reload();

  })
/***********************************************Enroll Popup End*****************************************/
/***********************************************MAIN Image Loading Issue on PDP START*****************************************/
setTimeout(function () {
$(".t4s-product__media-wrapper.visiblityHide").removeClass("visiblityHide");
  $(".t4s-col-item.t4s-product__info-wrapper.t4s-pr.VisiblityInfo").removeClass("VisiblityInfo");
 }, 3000); 
/***********************************************MAIN Image Loading Issue on PDP END*****************************************/
/***********************************************Monarch Link START*****************************************/

$(document).on("click", ".monarch_link", function(e){
   e.preventDefault();
   $(".monarch_link").addClass("monarch_api");
   ajaxUrl = originPath+'/apps/api/lms/launches?redirect=/'; 
   logoutURL = originPath+'/account/logout/'; 
function reqListener() 
{ 
  var getstatus = this.responseText;
  getstatus = $.parseJSON(getstatus); //convert to javascript array
              $.each(getstatus,function(key,value){
                if((value === null)){
                  $(".monarch_link.monarch_api").removeClass("monarch_api");
                }
                  else if (value == false){
                    window.location.href = "https://monarch-app.aop.com/";
                    // window.location.href = "https://consumer-lms.cns-staging-shard-monarch.il-consumer.com/";
                    $(".monarch_link.monarch_api").removeClass("monarch_api");
                  }
                else{
                  window.location.href = value;
                  $(".monarch_link.monarch_api").removeClass("monarch_api");
                }
                
              });
 
}
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("POST", ajaxUrl);
req.setRequestHeader('ngrok-skip-browser-warning', "69420"); 
req.send();

    //logout
    $.ajax(logoutURL)
    .done(function() {
      console.log('done');
    });
 });
/***********************************************Monarch Link END *****************************************/
/***************************************On Logout Button click Start **********************************/
$("a[href='/account/logout']").click(function(e){
  localStorage.clear();
  localStorage.setItem("logout", "true");
})
if (localStorage.getItem("logout") === "true") {
  $.ajax({
    type: "POST",
    url: '/cart/clear.js',
    success: function(){
       localStorage.clear();
    },
    dataType: 'json'
  });
 
}
/***********************************************Digital Cources Start *****************************************/

$(".purchasing-block.digital-purchase ul .rest-listing").click(function(){
  $(".digital-drop").addClass("processing_loader");
  $('.relateds-prouct-slidr').flickity().flickity('destroy');
  setTimeout(function() {
  $('.relateds-prouct-slidr').flickity({
  // options
  cellAlign: 'left',
  contain: true
});
    }, 2000);
  var variant_idGet = $(".student-subcription-item.active").attr("data-id");
  if($("select.t4s-product__select").length > 0 ){
    $("select.t4s-product__select option").val(variant_idGet);
  }
  else{
  $(".t4s-form__product input[name='id']").val(variant_idGet);
  }
   var selling_id = $(".student-subcription-item.active").attr("data-selling");
  $("input[name='selling_plan']").val(selling_id);
  if($("select.t4s-product__select").length > 0 ){
    $("select.t4s-product__select option").val(variant_idGet);
  }
  else{
  $(".t4s-form__product input[name='id']").val(variant_idGet);
  }
  var selling_id = $(this).attr("data-selling");
  $(".newselling_plan").val(selling_id);
  $(this).siblings("li").removeClass("active");
  $(this).addClass("active");
  var data_access_check = $(this).attr("data-access");
   var data_subscription_check = $(this).attr("data-subscription");
    var studentname = $(this).text();
  var stuName = $(this).attr("data-name");
  var stusername=$(this).attr("data-username");
  $(".student_name").val(stuName);
  var stusername=$(this).attr("data-username");
   $(".student_username").val(stusername);
  var StudentId = $(this).attr("data-id");
  var ProductHandle = $(this).attr("data-prohand");
  var combinedName = (StudentId+ProductHandle);
  var StudenCourceId = $(this).attr("data-courseId");
  $(".single-products-btn button, .custom-btns button, .custom-grid-btns button").attr("data-StudentId",StudentId);
  $(".single-products-btn button, .custom-btns button").attr("data-CourID",StudenCourceId);
  var GetSingleSKU = $(".t4s-sku-wrapper>span").html();
  var getenrollMain = (localStorage.getItem(combinedName));
  function AllCases(){
    if((data_access_check == "yes") && (data_subscription_check == "yes") && (enroll_access_check == "yes")){
    $(".full-access").show();
     $(".access-text").show();
    $(".single-products-btn .student-enrolled-button").show();
    $(".single-products-btn .select-student-button").hide();
    $(".single-products-btn .student-active-button").hide();
    $(".single-products-btn .student-enroll-free-button").hide();
    $(".student-subcription-plan").hide();
    $(".custom-btns").hide();
     $(".free-with-access").hide();
    $(".digital-drop").removeClass("processing_loader");
  }
    else if((data_access_check == "yes") && (data_subscription_check == "yes") && (enroll_access_check == "no")) {
    $(".full-access").show();
    $(".access-text").hide();
    $(".student-subcription-plan").show();  
    $(".single-products-btn .student-enrolled-button").hide();
    $(".single-products-btn .select-student-button").hide();
    $(".single-products-btn .student-active-button").hide();
    $(".single-products-btn .student-enroll-free-button").show();
    $(".custom-btns").hide();
      $(".free-with-access").show();
      $(".digital-drop").removeClass("processing_loader");
    }
      else if((data_access_check == "no") && (data_subscription_check == "yes") && (enroll_access_check == "yes")) {
    $(".full-access").hide();
    $(".access-text").hide();
    $(".single-products-btn .student-subcription-plan").hide();    
    $(".single-products-btn .student-enrolled-button").show();
    $(".single-products-btn .select-student-button").hide();
    $(".single-products-btn .student-active-button").hide();
    $(".single-products-btn .student-enroll-free-button").hide();
    $(".student-subcription-plan").hide();
    $(".custom-btns").hide();
         $(".free-with-access").hide();
        $(".digital-drop").removeClass("processing_loader");
    }
    else if((data_access_check == "yes") && (data_subscription_check == "no") && (enroll_access_check == "yes")) {
    $(".full-access").show();
    $(".access-text").show();
    $(".single-products-btn .student-enrolled-button").show();
    $(".single-products-btn .select-student-button").hide();
    $(".single-products-btn .student-active-button").hide();
    $(".single-products-btn .student-enroll-free-button").hide();
    $(".custom-btns").hide();
    $(".free-with-access").show();
    $(".student-subcription-plan").hide();
    $(".digital-drop").removeClass("processing_loader");
    }
      else if((data_access_check == "no") && (data_subscription_check == "yes") && (enroll_access_check == "no")) {
    $(".full-access").hide();
    $(".access-text").hide();   
    $(".single-products-btn .student-enrolled-button").hide();
    $(".single-products-btn .select-student-button").hide();
    $(".single-products-btn .student-active-button").hide();
    $(".single-products-btn .student-enroll-free-button").show();
    $(".student-subcription-plan").show();
    $(".custom-btns").hide();
       $(".free-with-access").hide();
        $(".digital-drop").removeClass("processing_loader");
    }
    else if((data_access_check == "yes") && (data_subscription_check == "no") && (enroll_access_check == "no")) {
    $(".full-access").show();
    $(".access-text").hide();
    $(".single-products-btn .student-enrolled-button").hide();
    $(".single-products-btn .select-student-button").hide();
    $(".single-products-btn .student-active-button").hide();
    $(".single-products-btn .student-enroll-free-button").show();
    $(".student-subcription-plan").show();
    $(".custom-btns").hide();
       $(".free-with-access").hide();
      $(".digital-drop").removeClass("processing_loader");
    }  
      else if((data_access_check == "no") && (data_subscription_check == "no") && (enroll_access_check == "no")) {
    $(".full-access").hide();
    $(".access-text").hide();
    $(".student-subcription-plan").show();
    $(".single-products-btn .student-enrolled-button").hide();
    $(".single-products-btn .select-student-button").hide();
    $(".single-products-btn .student-active-button").hide();
    $(".single-products-btn .student-enroll-free-button").hide();
    $(".student-subcription-plan").show();
    $(".custom-btns").show();
    $(".free-with-access").hide();
        $(".digital-drop").removeClass("processing_loader");
    }
   else if((data_access_check == "no") && (data_subscription_check == "no") && (enroll_access_check == "yes")) {
     $(".full-access").hide();
    $(".access-text").hide();
    $(".single-products-btn .student-enrolled-button").hide();
    $(".single-products-btn .select-student-button").hide();
    $(".single-products-btn .student-active-button").hide();
    $(".single-products-btn .student-enroll-free-button").hide();
    $(".student-subcription-plan").show();
    $(".custom-btns").show();
    $(".free-with-access").hide();
     $(".digital-drop").removeClass("processing_loader");
    }
  else{
    $(".access-text").hide();
     $(".full-access").hide();
    $(".single-products-btn .student-enrolled-button").hide();
     $(".free-with-access").hide();
    $(".student-subcription-plan").show();
    $(".single-products-btn .select-student-button").show();
    $(".digital-drop").removeClass("processing_loader");
  }
  }
  if (localStorage.getItem(combinedName) === null) {
    //console.log("null");
    var enroll_access_check = "no";
    localStorage.setItem(combinedName, enroll_access_check);
    ajaxUrl = originPath+'/apps/api/lms/student/enrollments?student_id='+StudentId; 
function reqListener() {
  //console.log(this.responseText,'response');
  var getstatus = this.responseText;
  var data = this.responseText;
   getstatus = JSON.parse(getstatus); //convert to javascript array
  var arr = [], len;
  for(key in getstatus.courses) {
      arr.push(key);
  }
  len = arr.length;
  if (len != 0) {
  $.each(getstatus, function (i) {
    $.each(this, function (keyy, valuee) {
    {
      if(keyy == GetSingleSKU){
        if(valuee == "enrolled"){
          enroll_access_check = "yes";
            localStorage.setItem(combinedName, enroll_access_check);
        }
      }
    }
    });
  });
  }
  AllCases();
}
const req = new XMLHttpRequest(); 
req.addEventListener("load", reqListener);
req.open("GET", ajaxUrl); 
req.setRequestHeader('ngrok-skip-browser-warning', "69420");
req.send();
   
  }
  else{
    enroll_access_check = (localStorage.getItem(combinedName));
    AllCases();
  }
  var GetDropValue = $(this).text();
  $(".static_val").html(GetDropValue);
  $(".purchasing-block ul").hide();
  $(".dropdown.student-meta .select").removeClass("open");
})
/***********************************************Digital Cources End *****************************************/



/***********************************************SKU Cources Start *****************************************/
$(".dropdown.student-meta.sku-drop .select").click(function(){
  $(this).next("ul").toggle();
  $(this).toggleClass("open");
})
$(".purchasing-block.sku-purchase ul .rest-listing").click(function(){
  
    var StudentId = $(this).attr("data-id");
    var ProductHandle = $(this).attr("data-prohand");
  var combinedName = (StudentId+ProductHandle);
  var StudenCourceId = $(this).attr("data-courseId");
  $(".single-products-btn button, .custom-btns button, .custom-grid-btns button").attr("data-StudentId",StudentId);
  $(".single-products-btn button, .custom-btns button").attr("data-CourID",StudenCourceId);
  
  $(this).siblings("li").removeClass("active");
  $(this).addClass("active");
  var data_access_check = $(this).attr("data-access");
   var data_subscription_check = $(this).attr("data-subscription");
  var GetSingleSKU = $(".t4s-sku-wrapper>span").html();
  $(".dropdown.student-meta.sku-drop").addClass("processing_loader");
  var studentname = $(this).text();
  var stuName = $(this).attr("data-name");
  $(".student_name").val(stuName);
  var stusername=$(this).attr("data-username");
  $(".student_username").val(stusername);
  function CasesRobotify(){
  if((data_access_check == "yes") && (data_subscription_check == "yes") && (enroll_access_check == "yes")){
    $(".full-access").show();
      $(".access-text").html("This student is already enrolled in this course under their Full Access membership.").show();
    $(".student-subcription-plan").hide();
    $(".single-products-btn .student-enrolled-button").show();
    $(".single-products-btn .select-student-button").hide();
    $(".single-products-btn .student-active-button").hide();
    $(".single-products-btn .student-enroll-free-button").hide();
    $(".custom-btns").hide();
    $(".free-with-access").show();
    $(".sku-drop").removeClass("processing_loader");
  }
    else if((data_access_check == "yes") && (data_subscription_check == "yes") && (enroll_access_check == "no")) {
     $(".full-access").show();
      $(".access-text").html("This student is already enrolled in this course under their Full Access membership.").show();
    $(".student-subcription-plan").hide();
    $(".single-products-btn .student-enrolled-button").show();
    $(".single-products-btn .select-student-button").hide();
    $(".single-products-btn .student-active-button").hide();
    $(".single-products-btn .student-enroll-free-button").hide();
    $(".custom-btns").hide();
    $(".free-with-access").show();
    $(".sku-drop").removeClass("processing_loader");
    }
      else if((data_access_check == "no") && (data_subscription_check == "yes") && (enroll_access_check == "yes")) {
     $(".full-access").show();
     $(".access-text").html("This student is already enrolled.").show();
    $(".single-products-btn .student-enrolled-button").show();
    $(".single-products-btn .select-student-button").hide();
    $(".single-products-btn .student-active-button").hide();
    $(".single-products-btn .student-enroll-free-button").hide();
    $(".student-subcription-plan").hide();
    $(".custom-btns").hide();
    $(".free-with-access").hide();
    $(".sku-drop").removeClass("processing_loader");
    }
    else if((data_access_check == "yes") && (data_subscription_check == "no") && (enroll_access_check == "yes")) {
     $(".full-access").show();
     $(".access-text").html("This student is already enrolled.").show();
    $(".single-products-btn .student-enrolled-button").show();
    $(".single-products-btn .select-student-button").hide();
    $(".single-products-btn .student-active-button").hide();
    $(".single-products-btn .student-enroll-free-button").hide();
    $(".student-subcription-plan").hide();
    $(".custom-btns").hide();
    $(".free-with-access").hide();
    $(".sku-drop").removeClass("processing_loader");
    }
      else if((data_access_check == "no") && (data_subscription_check == "yes") && (enroll_access_check == "no")) {
    $(".full-access").hide();
    $(".access-text").hide();
    $(".student-subcription-plan").show();
    $(".single-products-btn .student-enrolled-button").hide();
    $(".single-products-btn .select-student-button").hide();
    $(".single-products-btn .student-active-button").hide();
    $(".single-products-btn .student-enroll-free-button").hide();
    $(".custom-btns").show();
    $(".free-with-access").hide();
    $(".sku-drop").removeClass("processing_loader");
    }
    else if((data_access_check == "yes") && (data_subscription_check == "no") && (enroll_access_check == "no")) {
    $(".full-access").hide();
    $(".access-text").hide();
    $(".student-subcription-plan").show();
    $(".single-products-btn .student-enrolled-button").hide();
    $(".single-products-btn .select-student-button").hide();
    $(".single-products-btn .student-active-button").hide();
    $(".single-products-btn .student-enroll-free-button").hide();
    $(".custom-btns").show();
    $(".free-with-access").hide();
    $(".sku-drop").removeClass("processing_loader");
    }  
      else if((data_access_check == "no") && (data_subscription_check == "no") && (enroll_access_check == "no")) {
    $(".full-access").hide();
    $(".access-text").hide();
    $(".student-subcription-plan").show();
    $(".single-products-btn .student-enrolled-button").hide();
    $(".single-products-btn .select-student-button").hide();
    $(".single-products-btn .student-active-button").hide();
    $(".single-products-btn .student-enroll-free-button").hide();
    $(".custom-btns").show();
    $(".free-with-access").hide();
    $(".sku-drop").removeClass("processing_loader");
    }
         else if((data_access_check == "no") && (data_subscription_check == "no") && (enroll_access_check == "yes")) {
           $(".full-access").hide();
    $(".access-text").hide();
    $(".student-subcription-plan").show();
    $(".single-products-btn .student-enrolled-button").hide();
    $(".single-products-btn .select-student-button").hide();
    $(".single-products-btn .student-active-button").hide();
    $(".single-products-btn .student-enroll-free-button").hide();
    $(".custom-btns").show();
    $(".free-with-access").hide();
    $(".sku-drop").removeClass("processing_loader");
    }
  else{
    $(".access-text").hide();
     $(".full-access").hide();
    $(".single-products-btn .student-enrolled-button").hide();
     $(".free-with-access").hide();
    $(".student-subcription-plan").show();
    $(".single-products-btn .select-student-button").show();
    $(".sku-drop").removeClass("processing_loader");
  }
  }
  if (localStorage.getItem(combinedName) === null) {
    var enroll_access_check = "no";
    localStorage.setItem(combinedName, enroll_access_check);
    ajaxUrl = originPath+'/apps/api/lms/student/enrollments?student_id='+StudentId; 
function reqListener() {
  console.log(this.responseText,'response');
  var getstatus = this.responseText;
  var data = this.responseText;
   // getstatus = JSON.parse(getstatus); //convert to javascript array
  var arr = [], len;
  for(key in data.courses) {
      arr.push(key);
  }
  len = arr.length;
  if (len != 0) {
  $.each(data, function (i) {
    $.each(this, function (key, value) {
    {
      if(key == GetSingleSKU){
        if(value == "enrolled"){
          enroll_access_check = "yes";
          localStorage.setItem(combinedName, enroll_access_check);
        }
      }
    }
    });
  });
  }
   CasesRobotify();
}
const req = new XMLHttpRequest(); 
req.addEventListener("load", reqListener);
req.open("GET", ajaxUrl); 
req.setRequestHeader('ngrok-skip-browser-warning', "69420");
req.send();
    
    
  }
  else{
    enroll_access_check = (localStorage.getItem(combinedName));
    CasesRobotify();
    
  }
  
  var GetDropValue = $(this).text();
  $(".static_val").html(GetDropValue);
  $(".purchasing-block ul").hide();
  $(".dropdown.student-meta .select").removeClass("open");
})
/***********************************************SKU Cources End *****************************************/

/***********************************************Student Popup Start *****************************************/
$(".provide-consent-form .provide_consent").click(function(e){
   e.preventDefault();
  $(".new-student-detail-form").show();
  $(".provide-consent-form").hide();
})
$(".provide-consent-form .provide_consent").click(function(e){
   e.preventDefault();
  $(".new-student-detail-form").show();
  $(".provide-consent-form").hide();
})

$(".student-subcription-item").click(function(e){
    var getPrice = $(this).attr("data-price");
  var gettitle = $(this).attr("data-tit");
  $(".t4s-product__title").html(gettitle);
  var Offpercentage = $(this).attr("data-off");
  $(".t4s-product__info-container .t4s-product-price").html(getPrice);
  if (typeof Offpercentage !== 'undefined' && Offpercentage !== false) {
    var getOff = $(this).attr("data-off");
    var getcompare = $(this).attr("data-compare");
    $(".t4s-main-product__content .t4s-product__info-container .t4s-product-price del").html(getcompare);
    $(".t4s-main-product__content .t4s-product__info-container span.t4s-badge-price").html(getOff+"Off");
     $(".t4s-main-product__content .t4s-product__info-container .t4s-product-price del").show();
    $(".t4s-main-product__content .t4s-product__info-container span.t4s-badge-price").show();
  }
  else{
    $(".t4s-main-product__content .t4s-product__info-container .t4s-product-price del").hide();
    $(".t4s-main-product__content .t4s-product__info-container span.t4s-badge-price").hide();
  }
  var GetUrl = $(this).attr("data-url");
  var variant_idGet = $(this).attr("data-id");
  var selling_id = $(this).attr("data-selling");
  $("input[name='selling_plan']").val(selling_id);
  if($("select.t4s-product__select").length > 0 ){
    $("select.t4s-product__select option").val(variant_idGet);
  }
  else{
  $(".t4s-form__product input[name='id']").val(variant_idGet);
  }
  $(this).siblings(".student-subcription-item").removeClass("active");
  $(this).addClass("active");
  var getTitle = $(this).attr("data-tit");
})
  
  $('body').on('click', '.addstudent', function(e) {
  
  e.preventDefault();
  $("body").addClass("show-popup");
  $("html").addClass("show-popup");
  $(".t4s-close-overlay.student_cancel").addClass("is--visible open");
  $("#t4s-consest-modal").addClass("open");
})
$(".provide-consent-form .provide_consent").click(function(e){
   e.preventDefault();
  $(".new-student-detail-form").show();
  $(".provide-consent-form").hide();
})
$(".provide-consent-form .provide_consent").click(function(e){
   e.preventDefault();
  $(".new-student-detail-form").show();
  $(".provide-consent-form").hide();
})
/***********************************************Student Popup End *****************************************/
 $(".variant_drop").on('change', function() {
   //var variant_id = $(this).attr("data-id");
   var variant_id = $('option:selected', this).attr('data-id');
   var selling_id = $('option:selected', this).attr('seling-id');
   $(this).prev(".student_name").prev("input").val(variant_id);
   $(this).parents(".product_form").children(".selling_plan").val(selling_id);
 })
$(".add-custom-cart").click(function(e){
  e.preventDefault();
  var thisdiv = $(this).parents(".product_form");
  $.ajax({
      type: 'POST',
      url: '/cart/add.js',
      data: thisdiv.serialize(),
      dataType: 'json',
      success: function(response){
        window.location.href = "/cart";
}
})	  
})


/*****************************************BLOG JS START*************************************/
  $(".dropdown.mobile-category-drodown .select.customCat").click(function(){
    $(this).next("input").next(".t4s-blog-categories").toggleClass("open");
  })
  $(".dropdown.mobile-category-drodown .select.customTags").click(function(){
    $(this).next("input").next(".t4s-blog-tags").toggleClass("open");
  })
/*****************************************STUDENT ADD JS START*************************************/
$(".AddStudentCustom").click(function(e){
  var user = $('#username').val();  
        var password = $('#CustomerPassword').val(); 
        var retype_password = $('#CustomerRecoverPassword').val(); 
        var first_name = $('#firstname').val();
        var last_name = $('#lastname').val();
       
       // console.log(ck);
        if(!first_name){
           e.preventDefault();
            $('#firstname').css('border-color',"red");  
            $('#lastname').css('border-color',"#707070");
            $('#username').css('border-color',"#707070");
            $('#CustomerRecoverPassword').css('border-color',"#707070");
            $('#CustomerPassword').css('border-color',"#707070");
          $('.password-note-text').css('color','#1b1cle');
        }
        else if(!last_name)
        {
           e.preventDefault();
          $('#lastname').css('border-color',"red"); 
            $('#firstname').css('border-color',"#707070");
            $('#username').css('border-color',"#707070");
            $('#CustomerRecoverPassword').css('border-color',"#707070");
            $('#CustomerPassword').css('border-color',"#707070");
          $('.password-note-text').css('color','#1b1cle');
        }
        else if(!user)
        {
           e.preventDefault();
          $('#username').css('border-color',"red");  
          $('#firstname').css('border-color',"#707070");
            $('#lastname').css('border-color',"#707070");
            $('#CustomerRecoverPassword').css('border-color',"#707070");
            $('#CustomerPassword').css('border-color',"#707070");
          $('.password-note-text').css('color','#1b1cle');
        }
        else if(!password)
        {
           e.preventDefault();
          $('#password-note-text').css('color','red');
            $('#firstname').css('border-color',"#707070");
            $('#lastname').css('border-color',"#707070");
            $('#username').css('border-color',"#707070");
            $('#CustomerRecoverPassword').css('border-color',"#707070");
          $('.password-note-text').css('color','#1b1cle');
        }
       else if(!retype_password)
        {
           e.preventDefault();
          $('#CustomerRecoverPassword').css('border-color','red'); 
            $('#firstname').css('border-color',"#707070");
            $('#lastname').css('border-color',"#707070");
            $('#username').css('border-color',"#707070");
            $('#CustomerPassword').css('border-color',"#707070");
          $('.password-note-text').css('color','#1b1cle');
        }
        
        else
        {
          e.preventDefault();
           if (password.length < 8) { 
             e.preventDefault();
            $('.password-note-text').css('color','red');
          }
          else if (password != retype_password) { 
             e.preventDefault();
            $('.error_msg.pass').text('please add correct password'); 
          }
          else
          {
            $(this).addClass("loaderActive");
            $('#firstname').css('border-color',"#707070");
            $('.password-note-text').css('color','#1b1cle');
            $('#lastname').css('border-color',"#707070");
            $('#username').css('border-color',"#707070");
            $('#CustomerRecoverPassword').css('border-color',"#707070");
            $('#CustomerPassword').css('border-color',"#707070");
            $('.error_msg.pass').text(' '); 
            
            ajaxUrl = originPath+'/apps/api/student/save';
            var data = new FormData();
            data.append('first_name', first_name);
            data.append('last_name', last_name);
            data.append('password', password);
            data.append('username', user);
            data.append('coppa_consent', 'true');
            data.append("student_id", "sdad-dsad-d-asd-sa-dae");
            data.append("robotify_student_id", " ");
            data.append("package_subscription", "false");
            data.append("package_subscription_active", "false");
            data.append("package_subscription_expiration", " ");
            data.append("package_subscription_calculated_expiration", " ");
            data.append("robotify_subscription_active", "false");
            data.append("robotify_expiration", " ");
            data.append("fullprice", "false");
            data.append("created_on", " ");
            data.append("updated_on", " ");
            function reqListener() {
            //console.log(this.responseText);
              var getstatus = this.responseText;
              getstatus = $.parseJSON(getstatus); //convert to javascript array
              var geterrortext = "";
              $.each(getstatus,function(key,value){
                 if(key == "error"){
                geterrortext = value;
                   console.log(geterrortext);
                   value = value.split(":");
                   value = value[1];
                   if(geterrortext.indexOf("student was already created") != -1 || geterrortext.indexOf("Student with such username already exists") != -1)
                   {
                     $(".student_error").html("User not created. Please make sure to select a unique username and try again.");
                   }
                   else{
                     $(".student_error").html("Error adding the student, please try again.");
                   }
                   $(".AddStudentCustom").removeClass("loaderActive");
                   
                 }
                else if(key == "success"){
               $('#Addstudentform')[0].reset();
              $(".new-student-detail-form").hide();
            $(".student-added-form-detail").show();
                 $(".student_error").html(" ");
                   $(".AddStudentCustom").removeClass("loaderActive");
                }
              });
              //console.log("geterrortext="+geterrortext);
              
              
            }
            
            const req = new XMLHttpRequest();
            req.addEventListener("load", reqListener);
            req.open("POST", ajaxUrl);
            req.setRequestHeader('ngrok-skip-browser-warning', "69420");
            req.send(data);
            //alert(localStorage.getItem('email'));
            
          } 
        }
  
})
$('.show-password').click(function(){
     if($(this).prev("label").prev('input').attr('type')==='password'){
        $(this).prev("label").prev('input').attr('type','text');
     }else{
      $(this).prev("label").prev('input').attr('type','password');
     }
 });
/*****************************************STUDENT ADD JS END*************************************/
/*****************************************CART JS START*************************************/
  // $(".minus_custom_quant").click(function(e){
  //   e.preventDefault();
  //   alert("preventDefault");
  // })
$('body').on('click', '.checkfullPrice , .minus_custom_quant', function(e) {
  e.preventDefault();
  var getKeyCurrent =  $(this).attr("href");
  $(".confirm-command-btn").attr("data-path",getKeyCurrent);
  $.ajax({
    url: '/cart.js',
    type: 'GET',
    dataType: 'json',
    success: function(cart){
     //console.log(cart['items']);
      data = (cart['items']);
      var arrayGet = [];
       $.each(data, function(i, item) {
         var getTitle = (data[i].title);
         var getKey = (data[i].key);
         arrayGet.push(getTitle);
       })
      if((arrayGet.includes("Additional Student Full Access Subscription Yearly - Yearly Free Trial")) || (arrayGet.includes("Additional Student Full Access Subscription Monthly - Monthly Free Trial")) || (arrayGet.includes("Additional Student Full Access Subscription Monthly - Monthly")) || (arrayGet.includes("Additional Student Full Access Subscription Yearly - Yearly"))){
        $(".cart-confirmation-overlay").addClass("is--visible");
        $(".cart-conformation-popup").attr("aria-hidden","false");
      }
      else{
        $.ajax({
    type: 'POST',
    url: getKeyCurrent,
    data: "",
    dataType: 'json',
    success: function(data) { 
        location.reload();
    }
    })
      }
      
    }
    })
})
$('body').on('click', '.confirm-command-btn', function(e) {
  e.preventDefault();
  var getKeyCurrent =  $(this).attr("data-path");
   $.ajax({
    url: '/cart.js',
    type: 'GET',
    dataType: 'json',
    success: function(cart){
     //console.log(cart['items']);
      data = (cart['items']);
      var arrayGet = [];
       $.each(data, function(i, item) {
         var getTitle = (data[i].title);
         var getKey = (data[i].key);
         if((getTitle == "Additional Student Full Access Subscription Yearly - Yearly Free Trial") || (getTitle == "Additional Student Full Access Subscription Monthly - Monthly Free Trial") || (getTitle == "Additional Student Full Access Subscription Monthly - Monthly") || (getTitle == "Additional Student Full Access Subscription Yearly - Yearly"))
         {
           $.ajax({
    type: 'POST',
    url: originPath+'/cart/change?quantity=0&id='+getKey,
    data: "",
    dataType: 'json',
    success: function(data) { 
      $.ajax({
    type: 'POST',
    url: originPath+getKeyCurrent,
    data: "",
    dataType: 'json',
    success: function(data) { 
       location.reload();
    }
    })
    }
    })
         }
       })
      
    }
    })
})
$('body').on('click', '.cancel-comman-btn, .cart-confirmation-overlay', function(e) {
  e.preventDefault();
   $(".t4s-close-overlay.t4s-op-0.cart-confirmation-overlay").removeClass("is--visible");
        $(".cart-conformation-popup").attr("aria-hidden","true");
})
/*****************************************CART JS END*************************************/