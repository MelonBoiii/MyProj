function PopUp(title, text, message)
{
	this.title = title;
	this.text = text;
	this.message = message;

	this.x = 50;
	this.y = 50;

	this.current_time = 0;
	this.should_draw = true;

	this.draw = function(ctx)
	{
		if (this.should_draw)
		{
			ctx.fillStyle = "#111";
			ctx.fillRect(this.x, this.y, canvas.width - 100, canvas.height - 100);
			ctx.fillStyle = "#f00";
			ctx.fillRect(50, 50, 100, 50);

			if (hits(this.x, this.y, 100, 50, mx, my, 1, 1) && mouse_is_down)
			{
				this.should_draw = false;
			}

			ctx.fillStyle = "#fff";
			ctx.font = "40px Georgia";
			ctx.fillText(this.title, 150, 150);

			ctx.font = "20px Georgia";
			ctx.fillText(this.message, 150, 170);

			ctx.font = "20px Georgia";
			ctx.fillText("Planets: ", 250, 230);

			for (var i = 0; i < text.length; i++)
			{
				ctx.fillText(text[i], 250, (i * 20) + 260);

				ctx.beginPath();
				ctx.arc((i * 30) + 60, canvas.height - 60, 13, 0, 2 * Math.PI, false);
				ctx.fillStyle = "#fff";
				ctx.fill();
			}
		}
	}
}