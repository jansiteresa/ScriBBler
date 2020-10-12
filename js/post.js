let likes = 0 ;
var likeButtonElem = document.getElementById("LikePress");


function incLikes()
{   likes = likes + 1 ;
        likeButtonElem.innerHTML='<i class="fa fa-thumbs-up" aria-hidden="true"></i> &nbsp;'+ "Liked";
    
    let ContentChange = document.getElementById('like-number-update') ;   
   if(likes === 1)
   {
       ContentChange.innerHTML = `${likes} person likes this` ;
   }
   else
   {
    ContentChange.innerHTML =`${likes} people like this!` ;
   }
}

function AddComment()
{
    document.getElementById("addedComments").style.display="block";
	var text=document.getElementById("textArea").value;
	document.getElementById("addedComments").innerHTML+=text;
}

var toggle = true;
var saveEditBtnElem = document.getElementById("editSave");

function EditSaveClicked() {
    if (toggle) {
        saveEditBtnElem.innerHTML = `Save <i class="fa fa-floppy-o" aria-hidden="true"></i>`;
        toggle = false;
      } else {
        saveEditBtnElem.innerHTML = `Edit <i class="fa fa-pencil-square-o" aria-hidden="true"></i>`;
        toggle = true;
      }

}