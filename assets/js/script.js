let cardArray = [
   
let grid = documnt.querySelector(".grid");
let countdown = document.querySelector(".countdown");
let go = document.querySelector(".go");
let 



//load the images and image cover
for(var i = 1; i <= noOfBoxGame; i++){
    boxes += "<div id='box-" + i + "' class='box-picture'><img src='game-images/" + (parseInt(boxIndexes[i-1]) + 1) + ".jpg'/></div>";
    boxCover += "<div id='box-cover-" + i + "' class='box-cover' data-id='" + (parseInt(boxIndexes[i-1]) + 1) + "'></div>";
}
boxCover = "<div class='box-cover-wrapper'>" + boxCover + "</div>";
$("#game-content").html(boxes + boxCover);

//add event to click the box cover image
$(".box-cover").off("click");
$(".box-cover").on("click", function(){
    if(noOfClick <= 1){
        clickCounter++;
        $("#no-of-clicks").html(clickCounter);
        
        noOfClick++;
        $(this).addClass('animated flipOutX'); 
        
        var clickCover = {
            ImageID: $(this).attr("data-id"),
            CoverID: $(this).attr("id").replace("box-cover-","")
        }
        clickImages.push(clickCover);
        
        if(noOfClick >= 2){
            //check if the revealed images are correct
            if(clickImages[0].ImageID == clickImages[1].ImageID){
                correctGuess++;
                $("#correct-guess").html(correctGuess);
                
                //reset the variables
                noOfClick = 0;
                clickImages = [];
                

