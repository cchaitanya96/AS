let Count = 0;
const userMessages = [];

function check() {
    event.preventDefault();
    const username = document.cheese.username.value;
    const pass = document.cheese.password.value;

    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;

    const messageContainer = document.getElementById('message-container');
  //  console.log(messageContainer.innerHtml);

    if (username.length<1 || pass.length < 1) {
        messageContainer.innerText = 'Please enter username!';
     //   return false;
   // } else if (username.length < 4) {
     //   messageContainer.innerHtml = 'Username must be at least 4 characters.';
//} else if (pass.length < 1) {
 //       messageContainer.innerHtml = 'Please enter Password!';
 //   } else if (pass.length < 4) {
//        messageContainer.innerHtml = 'Password must be at least 4 characters.';
    }// else {
     //   if (!uppercaseRegex.test(pass) || !lowercaseRegex.test(pass) || !specialCharacterRegex.test(pass) || !numberRegex.test(pass)) {
       //     messageContainer.innerText = 'Password must contain :- \n1) capital letter \n2) 1 small letter \n3) A special character \n4) 1 number.';
      //  } 
        //  if {
        //    if (specialCharacterRegex.test(username)) {
         //       Count++;
//
        //        if (Count === 3) {
        //            messageContainer.innerText = 'You have entered special characters three times. You are now blocked.';
        //            DelayNode
       //             window.location.href = "Block.html"; 
         //       } else {
        //            messageContainer.innerText = 'Special characters are not allowed in the username. Please try again.' + Count;
         //       } 
      //  }  else {
       // messageContainer.innerHTML = username; // This line can lead to XSS vulnerability
   //     window.location.href = "try.html";
  //  }
    userMessages.push({
        text: username,//username
        image: pass,//password
      });
      renderMessages();

      function renderMessages() {
        let messageItems = '';
        for (const message of userMessages) {
          messageItems = `
            ${messageItems}
            <li class="message-item">
              <div class="message-image">
                <img src="${message.image}" alt="${message.text}">
              </div>
              <p>${message.text}</p>
            </li>
          `;
        }
}
messageContainer.innerHTML = messageItems;
}

userMessageForm.addEventListener('submit', formSubmitHandler);