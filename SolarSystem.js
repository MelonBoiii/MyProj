function SolarSystem(x, y)
{
	this.x = x;
	this.y = y;
	this.placed_a_planet = false
	this.spawn_a_new_planet_distance = 1000;

	this.planets_in_system = Math.floor(Math.random() * 11);
	this.planets_with_life = Math.floor(Math.random() * this.planets_in_system);

	this.system_has_life = Math.floor(Math.random() * 2);

	if (this.planets_in_system > 0 && this.system_has_life == 1)
		this.message = words_in_message1[Math.floor(Math.random() * words_in_message1.length)] +
			words_in_message2[Math.floor(Math.random() * words_in_message2.length)];
	else
		this.message = "There appears to be no message."	

	this.planet_names = [];

	for (var x = 0; x < this.planets_in_system; x++)
	{
		var generated_planet_name = planet_name_parts[Math.floor(Math.random() * planet_name_parts.length)] + 
			planet_name_parts[Math.floor(Math.random() * planet_name_parts.length)] + 
			planet_name_parts[Math.floor(Math.random() * planet_name_parts.length)] + 
			planet_name_parts[Math.floor(Math.random() * planet_name_parts.length)];

		this.planet_names.push(generated_planet_name);
	}

	var r = Math.floor(Math.random() * 9);
	var g = Math.floor(Math.random() * 9);
	var b = Math.floor(Math.random() * 9);

	this.color = "#" + r + g + b;

	this.size = Math.floor(Math.random() * 20) + 3;

	var num1 = Math.floor(Math.random() * name1.length);
	var num2 = Math.floor(Math.random() * name2.length);
	this.name = name1[num1] + " " + name2[num2];

	this.draw = function(ctx)
	{
		this.x_distance_from_mouse = mx - this.x;
		this.y_distance_from_mouse = my - this.y;
		this.distance_from_mouse = Math.abs(Math.floor((this.x_distance_from_mouse + this.y_distance_from_mouse) / 2)); 

		if (this.distance_from_mouse > this.spawn_a_new_planet_distance && this.placed_a_planet == false)
		{
			universe.push(new SolarSystem(this.x + this.x_distance_from_mouse + (Math.random() * 1000), this.y + this.y_distance_from_mouse + (Math.random() * 1000)));
			this.placed_a_planet = true;
		}

		this.x += moveX;
		this.y += moveY;

		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
		ctx.fillStyle = this.color;
		ctx.fill();

		if (hits(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2, mx, my, 1, 1))
		{
			ctx.fillStyle = "#fff";
			ctx.font = "20px Georgia";
			ctx.fillText(this.name, this.x, this.y);
			if (mouse_is_down)
				array_of_popups.push(new PopUp(this.name, this.planet_names, this.message));
		}
	}
}