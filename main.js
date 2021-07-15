var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/gJBzY8ZW/coca.jpg", "https://i.postimg.cc/VNgsV3s5/aitama.jpg" , "https://i.postimg.cc/D0J2m0rb/mama.jpg"];
var names = ["Family Book","Jitendranath Phukan", "Ivanoni Phukan", "Monali Phukan", "Nayan Haxarika"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}