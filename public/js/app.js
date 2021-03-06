class App {
	constructor() {
		this.date = document.querySelectorAll(".dateformat");

		this.categories = document.querySelectorAll("#dashboard .category");
		this.days = document.querySelectorAll("#week .day");
		this.lists = document.querySelectorAll("#list .list");

		this.dateFormat();
		this.display();
	}

	dateFormat() {
		// Change les dates en format textuel
		if (this.date !== null) {
			this.date.forEach(function (date) {
				let dateSplit = date.textContent.split(' ');
				let day = dateSplit[0];
				let dayNumber = dateSplit[1];
				let month = dateSplit[2];

				switch (day) {
					case '0': day = "Dimanche"; break;
					case '1': day = "Lundi"; break;
					case '2': day = "Mardi"; break;
					case '3': day = "Mercredi"; break;
					case '4': day = "Jeudi"; break;
					case '5': day = "Vendredi"; break;
					case '6': day = "Samedi"; break;
				}

				switch (month) {
					case '1': month = "Janvier"; break;
					case '2': month = "Février"; break;
					case '3': month = "Mars"; break;
					case '4': month = "Avril"; break;
					case '5': month = "Mai"; break;
					case '6': month = "Juin"; break;
					case '7': month = "Jullet"; break;
					case '8': month = "Août"; break;
					case '9': month = "Septembre"; break;
					case '10': month = "Octobre"; break;
					case '11': month = "Novembre"; break;
					case '12': month = "Décembre"; break;
				}

				date.textContent = day + " " + dayNumber + " " + month;
			});
		}
	}

	display() {
		// Affiche et cache les catégories du dashboard au clic
		if (this.categories !== null) {
			this.categories.forEach(function (category) {
				let title = category.querySelector("h2");
				let content = category.querySelector(".display_content");
				let arrowUp = category.querySelector(".fa-caret-up");
				let arrowDown = category.querySelector(".fa-caret-down");

				title.addEventListener('click', function() {
					if(content !== null) {
						if(content.classList.contains("invisible")) {
							content.classList.remove("invisible");
							content.animate([
								{ transform: "translateY(-3%)", opacity: 0.4 },
								{ transform: "translateY(0)", opacity: 1 }
								], {
									duration: 200,
									fill: "forwards"
								}
							);
						}
						else {
							setTimeout(function() { content.classList.add("invisible"); }, 200);
							content.animate([
								{ transform: "translateY(0)", opacity: 1 },
								{ transform: "translateY(-3%)", opacity: 0.4 }
								], {
									duration: 200,
									fill: "forwards"
								}
							);
						}
					}
					if(arrowUp !== null) {
						arrowUp.classList.toggle("invisible");
					}
					if(arrowDown !== null) {
						arrowDown.classList.toggle("invisible");
					}
				}.bind(this));
			}.bind(this));
		}

		// Affiche et cache les jours de la semaine au clic
		if (this.days !== null) {
			this.days.forEach(function (day) {
				let title = day.querySelector("h2");
				let content = day.querySelector(".display_content");
				let arrowUp = day.querySelector(".fa-caret-up");
				let arrowDown = day.querySelector(".fa-caret-down");

				title.addEventListener('click', function() {
					if(content !== null) {
						if(content.classList.contains("invisible")) {
							content.classList.remove("invisible");
							content.animate([
								{ transform: "translateY(-3%)", opacity: 0.4 },
								{ transform: "translateY(0)", opacity: 1 }
								], {
									duration: 200,
									fill: "forwards"
								}
							);
						}
						else {
							setTimeout(function() { content.classList.add("invisible"); }, 200);
							content.animate([
								{ transform: "translateY(0)", opacity: 1 },
								{ transform: "translateY(-3%)", opacity: 0.4 }
								], {
									duration: 200,
									fill: "forwards"
								}
							);
						}
					}
					if(arrowUp !== null) {
						arrowUp.classList.toggle("invisible");
					}
					if(arrowDown !== null) {
						arrowDown.classList.toggle("invisible");
					}
				}.bind(this));
			}.bind(this));
		}

		// Affiche et cache les listes au clic
		if (this.lists !== null) {
			this.lists.forEach(function (list) {
				let title = list.querySelector("h2");
				let content = list.querySelector(".display_content");
				let arrowUp = list.querySelector(".fa-caret-up");
				let arrowDown = list.querySelector(".fa-caret-down");

				title.addEventListener('click', function() {
					if(content !== null) {
						if(content.classList.contains("invisible")) {
							content.classList.remove("invisible");
							content.animate([
								{ transform: "translateY(-3%)", opacity: 0.4 },
								{ transform: "translateY(0)", opacity: 1 }
								], {
									duration: 200,
									fill: "forwards"
								}
							);
						}
						else {
							setTimeout(function() { content.classList.add("invisible"); }, 200);
							content.animate([
								{ transform: "translateY(0)", opacity: 1 },
								{ transform: "translateY(-3%)", opacity: 0.4 }
								], {
									duration: 200,
									fill: "forwards"
								}
							);
						}
					}
					if(arrowUp !== null) {
						arrowUp.classList.toggle("invisible");
					}
					if(arrowDown !== null) {
						arrowDown.classList.toggle("invisible");
					}
				}.bind(this));
			}.bind(this));
		}
	}
}

let app = new App;