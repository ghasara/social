var input = $('#myInput');
var sendButton = $('#send');
input.on("keyup", function(event){
    if(event.keyCode == 13){
        sendMessage();
    }
});
sendButton.on("click", sendMessage);

function sendMessage() {
        var newComment = input.val();
        var commentList = $('.main-chat')[0];
        var ownComment = $($('.message-row--own')[0]).clone();
        ownComment.find('.message__bubble').text(newComment);
        ownComment.find('.message__time').text(Date().slice(16,21));
        ownComment.appendTo(commentList);
        input.val('').focus();
}

//   var input = $('#myInput');
//   input.on("keyup", function(event) {
//      if(event.keyCode == 13){
//          var newComment = event.target.value;
//          var commentList = $('.main-chat')[0];
//          $(this).val('').blur();
//          var ownComment = $($('.message-row--own')[0]).clone();
//          ownComment.find('.message__bubble').text(newComment);
//          ownComment.find('.message__time').text(Date.now());
//          ownComment.appendTo(commentList);
//          commentList.append($(`<div class='message-row message-row--own'>
//         <div class='message-row__content'>
//         <div class='message__info'>
//           <span class='message__bubble'>${newComment}</span>
//           <span class='message__time'>21:27</span>
//         </div>
//       </div>
//     </div>`));
//      }
//  });
 