  function deleteModel5() {
    document.getElementById("delModel5").style.display = "block";
  }

  function closeModel5() {
    document.getElementById("delModel5").style.display = "none";
    document.getElementById("post5").style.display="none";   
  }

  function deleteModel4() {
    document.getElementById("delModel4").style.display = "block";
  }
  
  function closeModel4() {
    document.getElementById("delModel4").style.display = "none";
    document.getElementById("post4").style.display="none";   
  }

  function deleteModel3() {
    document.getElementById("delModel3").style.display = "block";
  }
  
  function closeModel3() {
    document.getElementById("delModel3").style.display = "none";
    document.getElementById("post3").style.display="none";   
  }
    
  function deleteModel2() {
    document.getElementById("delModel2").style.display = "block";
  }
  
  function closeModel2() {
    document.getElementById("delModel2").style.display = "none";
    document.getElementById("post2").style.display="none";   
  }
  
  
  function deleteModel1() {
    document.getElementById("delModel1").style.display = "block";
  }
  
  function closeModel1() {
    document.getElementById("delModel1").style.display = "none";
    document.getElementById("post1").style.display="none";   
  }

 

  window.onclick = function (event) {
    if (event.target == model) {
      model.style.display = "none";
    }
  }

  // var del = document.getElementsByClassName("postTrash");
  // var i;
  // var delModal = document.getElementById("Delete-Model")

  // for (i = 0; i < del.length; i++) {
  //   del[i].onclick = function(){
  //     delModal.style.display = "block";
  //   }
  // }