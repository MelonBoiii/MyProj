var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var moveX = 0;
var moveY = 0;
var x_coordinate = 0;
var y_coordinate = 0;
var mouse_is_down = false;

var array_of_popups = []


var name1 = [
 	"Chedaunia",
 	"Vechuecarro",
 	"Occomia",
 	"Chugypso",
	"Lebos",
	"Uatov",
 	"Lloxistea",
 	"Nialiv",
 	"Grypso",
 	"Cetreclite",
	"Neccieyama",
	"Kecriuq",
	"Elvurn",
	"Yuclite",
	"Hoizuno",
	"Sonobos",
	"Cerophus",
	"Sion XP7",
	"Gromia Q5Y0",
 	"Nebreliv",
 	"Grade"
];
var name2 = [
	"Nebreliv",
	"Gellaclite",
	"Gollarvis",
	"Mestrurn",
	"Thoatania",
	"Xunia",
	"Cakivis",
	"Llerurus",
	"Llinda SD6M",
	"Gnolla PLJX",
	"U7B3",
	"D3A1",
	"B3U1",
	"E2D1",
	"W3G3",
	"D2Q34",
	"32RFD",
	"DWE2"

];

var planet_name_parts = [
	"NA",
	"LA",
	"ON",
	"KU",
	"PHO",
	"XU",
	"NI",
	"PHI",
	"SI",
	"SA",
	"SHI",
	"CHI",
	"SHO",
	"CHO",
	"VI",
	"IV",
	"NIA",
	"VIA",
	"SIA",
	"LIA",
	"LI"
];

var words_in_message1 = [
	"We just love ",
	"We absolutely cannot stand ",
	"It may sound wierd, but we love ",
	"Communism and ",
	"We just want ",
	"Uh huh, ",
	"Please give us ",
	"Get us ",
	"Come with ",
	"Do not bring ",
	"Don't come with ",
	"A planet with ",
	"WE LOVE LOVE LOVE ",
	"We are building ",
	"Please... ",
	"Yes... ",
	"No... ",
	"-------- ",
	"Yup ",
	"If only we had "
]; 

var words_in_message2 = [
	"Uh huh.",
	"Yup.",
	"-------.",
	"cheeseburger.",
	"biscuits.",
	"wi-fi.",
	"hotdogs.",
	"tacos.",
	"followers.",
	"racism.",
	"slavery.",
	"jokes.",
	"big explosions.",
	"explosions.",
	"death.",
	"genocide.",
	"communism.",
	"slaves.",
	"a dictator.",
	"a president.",
	"babies.",
	"women.",
	"men.",
	"children.",
	"the new generation.",
	"teenagers.",
	"fried chicken.",
	"an army."
];

var universe = [];
for (var x = 0; x < 20; x++)
{
	universe.push(new SolarSystem(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)));
}

var mx = 0;
var my = 0;


setInterval(update, 1000/60);

function update()
{
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	for (var x = 0; x < universe.length; x++)
	{
		universe[x].draw(ctx);
	}

	if (mx >= canvas.width - 50)
	{
		moveX = -10;
		x_coordinate += moveX;
	}
	if (mx <= 50)
	{
		moveX = 10;
		x_coordinate += moveX;
	}
	if (mx >= 55 && mx <= canvas.width - 55)
	{
		moveX = 0;
	}
	if (my >= canvas.height - 50)
	{
		moveY = -10;
		y_coordinate += moveY;
	}
	if (my <= 50)
	{
		moveY = 10;
		y_coordinate += moveY;
	}
	if (my >= 55 && my <= canvas.height - 55)
	{
		moveY = 0;
	}

	ctx.fillStyle = "#fff";
	ctx.font = "20px Georgia";
	ctx.fillText(x_coordinate + ", " + y_coordinate, 10, 20);

	for (var x = 0; x < array_of_popups.length; x++)
	{
		array_of_popups[x].draw(ctx);
	}


	ctx.fillRect(mx, my, 5, 5);
}

(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        mx = event.pageX;
        my = event.pageY;


        // Use event.pageX / event.pageY here
    }
})();

function hits(x1, y1, w1, h1, x2, y2, w2, h2)
{
	if (x1 < x2 + w2 &&
	    x1 + w1 > x2 &&
	    y1 < y2 + h2 &&
	    y1 + h1 > y2)
		return true;
	else
		return false;
}

window.addEventListener('mousedown', e => {
	mouse_is_down = true;
});

window.addEventListener('mouseup', e => {
	mouse_is_down = false;
});