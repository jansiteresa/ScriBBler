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