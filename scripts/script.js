function toggleActive(trigger) {
    trigger.classList.toggle("active");
    var lines = document.querySelectorAll('.listRec');
    var listMenu = document.getElementsByClassName("listMenu")[0];

    if(trigger.classList.contains("active")){
      lines.forEach(function(element, index){
        element.style.backgroundColor = "#0099ff";
      });
      listMenu.style.display = "flex";
    }else{
      lines.forEach(function(element, index){
        element.style.backgroundColor = "#ffffff";
      });
      listMenu.style.display = "none";
    }
  }





  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const responseMessage = document.getElementById('responseMessage');

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://formspree.io/f/xnnavbqa', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            responseMessage.textContent = "Thank you for contacting us!";
            responseMessage.style.color = "green";
        } else if (xhr.readyState == 4) {
            responseMessage.textContent = "Sorry, something went wrong. Please try again.";
            responseMessage.style.color = "red";
        }
    };

    const data = JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message
    });

    xhr.send(data);
});
