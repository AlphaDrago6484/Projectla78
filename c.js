var images = 
["https://i.gifer.com/4PML.gif",
"https://media4.giphy.com/media/HfFccPJv7a9k4/giphy.gif",
"https://i.pinimg.com/originals/fa/54/56/fa545685b3e4e843094723e4c4525579.gif",
 "https://media1.giphy.com/media/ji6zzUZwNIuLS/giphy.gif",
 "https://raw.githubusercontent.com/sumitc91/sumitc91.github.io/master/Gifs/hd_e48de8de-3124-40d0-b48a-734bd610f255_seriously.gif",
 "https://i.gifer.com/MagZ.gif", 
 "https://thumbs.gfycat.com/ForthrightGentleFruitbat-size_restricted.gif", 
 "https://media0.giphy.com/media/H1BL60uzo4XQEajNoF/giphy.gif"];

 var names = 
 ["Family Book",
"Rian Bhagat(Youngest Son)",
 "Shyam and Ishan Bhagat(Twin Older Brothers", 
 "Diva(Youngest and Only Daughter)", 
 "Ketan Bhagat(Father)", 
 "Aanchal Dhir - Pia Bhagat(Mother)", 
 "Colonel P.P Bhagat(Grandfather)", 
 "Rekha Bhagat(Grandmother"];

 var i = 0;
 function update(){
     i++;
     var numbers_of_family_members_in_array = 7
     if(i > numbers_of_family_members_in_array)
     {
         i = 0;
     }
     var updatedImage = images[i];
     var updatedName = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName
 }