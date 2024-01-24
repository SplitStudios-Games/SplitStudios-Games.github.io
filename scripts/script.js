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

  function redirectToLink(url) {
    window.location.href = url;
  }

  function openLinkInNewTab(url) {
    window.open(url, '_blank');
  }