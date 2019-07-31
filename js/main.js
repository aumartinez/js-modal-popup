let btnOpen = document.getElementById("open-mod");
  let btnHide = document.getElementById("btn-close");
  
  btnOpen.addEventListener("click", showModal, false);
  btnHide.addEventListener("click", hideModal, false);
  
  function showModal(evt) {
    let id = evt.currentTarget.dataset.target;    
    let root = document.getElementsByTagName("body")[0];
    let tgt = document.getElementById(id);    
    let modalclass = "active";    
    let rootclass = "modal-open";
    
    tgt.style.top = window.scrollY + "px";
    
    addClass(rootclass, root);
    addClass(modalclass, tgt);    
  }
  
  function hideModal(evt) {
      let id = evt.currentTarget.dataset.target;
      let root = document.getElementsByTagName("body")[0];
      let tgt = document.getElementById(id);      
      let modalclass = "active";
      let rootclass = "modal-open";
      
      removeClass(rootclass, root);
      removeClass(modalclass, tgt);           
  }
  
  function addClass(name, elem) {
    if (elem.classList) {
      elem.classList.add(name);
    }
    else {
      let arr = elem.className.split(" ");
      let i = arr.indexOf(name);
      if (i == -1) {
        arr.push(name)
        elem.className = arr.join(" ");
      }
    }
  }
  
  function removeClass(name, elem) {
    if (elem.classList) {
      elem.classList.remove(name);
    }
    else {
      let arr = elem.className.split(" ");
      let i = arr.indexOf(name);
      if (i >= 0) {
        arr.splice(i, 1);
        elem.className = arr.join(" ");
      }
    }
  }
