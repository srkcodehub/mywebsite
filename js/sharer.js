function facebook(){
	share("https://www.facebook.com/sharer/sharer.php?u=");
}

function twitter(){
	share("https://twitter.com/home?status="+encodeURIComponent(t) + " ");
}

function googlePlus(){
	share("https://plus.google.com/share?url=");
}
function whatsup(){
	share("https://api.whatsapp.com/send?text=");
}

u=location.href;
t=document.title;

function share(link)
{
	var height = 600, width = 600;
    var leftPosition, topPosition;
    //Allow for borders.
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    //Allow for title and status bars.
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    window.open(link+encodeURIComponent(u),'sharer', windowFeatures);
    return false;
}