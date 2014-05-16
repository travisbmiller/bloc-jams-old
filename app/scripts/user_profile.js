var buildSubscription = function() {
    var subscriptionTemplate = 
      '<div class="row mid_content">'
    + ' <div class="col-md-9 col-md-offset-2 subscription_imgs">'
    + '  <img src="/images/subscription-placeholder.png">'
    + '  <img src="/images/subscription-placeholder.png">'
    + '  <img src="/images/subscription-placeholder.png">'       
    + ' </div>'
    + '</div>'
    + '<div class="row end_content">'
    + ' <div class="col-md-5 col-md-offset-4 visa_info">'
    + '  <h1>Credit Cards</h1>'
    + '  <table class="card_table">'
    + '   <tr class="card_info">'
    + '    <td class="card">VISA</td>'
    + '    <td class="card_num">XXXX-1234</td>'
    + '    <td class="icon"><i class="fa-minus-circle"></i></td>'
    + '   <tr class="card_info">'
    + '    <td class="card">VISA</td>'
    + '    <td class="card_num">XXXX-1234</td>'
    + '    <td class="icon"><i class="fa-minus-circle"></i></td>'
    + '  </table>'
    + ' </div>'
    + '</div>'
    + '<div class="row">'
    + ' <div class="col-md-5 col-md-offset-4 visa_btn_container text-center">'
    + '  <button>Add Card</button>'
    + ' </div>'
    + '</div>'
    ;
    return $(subscriptionTemplate);
  };

var buildAccount = function() {
    var accountTemplate = 
      ' <div class="row main_container">'
    + '       <div class="col-md-3 personal">'
    + '         <div class="personal_thumbnail">'
    + '          <h1>Personal Information</h1>'
    + '           <div class="img_container"><img src="/images/user-upload-placeholder.png">'
    + '            <button class="upload">UPLOAD</button>'
    + '          </div>'
    + '        </div>'
    + '      </div>'
    + '       <div class="col-md-7">'
    + '         <div class="text-center account_subs">'
    + '           <ul class="pagination">'
    + '             <li>'
    + '               <button class="account not_active">YOUR ACCOUNT</button>'
    + '             </li>'
    + '             <li>'
    + '               <button class="subscription">SUBSCRIPTION</button>'
    + '             </li>'
    + '           </ul>'
    + '         </div>'
    + ' <form role="form">'
    + '  <div class="form-group">'
    + '    <label for="user_name">User Name</label><br>'
    + '     <input type="text" id="user_name" class="form-control"><br>'
    + '      <label for="email">Email</label><br>'
    + '      <input type="email" id="email" class="form-control"><br>'
    + '      <div class="row">'
    + '        <div class="city col-md-6">'
    + '          <label for="city">City</label><br>'
    + '          <input type="text" id="city" class="form-control">'
    + '        </div>'
    + '        <div class="state col-md-6">'
    + '          <label for="state">State</label><br>'
    + '          <input type="text" id="state" class="form-control">'
    + '        </div>'
    + '      </div>'
    + '      <label for="Country">Country</label><br>'
    + '     <input type="text" id="country" class="form-control"><br>'
    + '      <div class="text-center">'
    + '        <button>SAVE PROFILE</button>'
    + '      </div>'
    + '      <div class="password_container">'
    + '        <label for="password">Password</label><br>'
    + '        <input type="password" id="password" class="form-control"><br>'
    + '        <label for="passconfirm">Password Confirmation</label><br>'
    + '        <input type="password" id="passconfirm" class="form-control"><br>'
    + '        <div class="text-center">'
    + '        <button>CHANGE PASSWORD</button>'
    + '       </div>'
    + '      </div>'
    + '    </div>'
    + '  </form>'
    + '</div>'
    ;
    return $(accountTemplate);
  };



if (document.URL.match(/\/user/)) {
  $(document).ready(function() {
  
    $('.subscription').click(function(){
       if ( $('.account').hasClass('not_active')){ 
        $('form').remove();
        $('.col-md-3.personal').remove();
        $('.col-md-7').addClass('col-md-offset-3');
        $('.row').append(buildSubscription);
        $('.subscription').addClass('not_active');
        $('.account').removeClass('not_active');
      }
    });

  $('.account').click(function(){
       if ( $('.subscription').hasClass('not_active')){ 
        $('.main_container').remove();
        $('.user_container').append(buildAccount);
        $('.account').addClass('not_active');
        $('.subscription').removeClass('not_active');
      }
    });    


  });
}
