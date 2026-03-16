const $dialog = document.querySelector("dialog");
const $form = document.querySelector("form");
const $close = document.querySelector("#close");
const $logmood = document.querySelector("#logmood");
const $section2 = document.querySelector(".section2");
const $lastmoods = document.querySelector(".lastmoods");
const $h2 = document.querySelector("#h2");
const $svg = document.querySelector("#svg");
const $inputsDiv = document.querySelectorAll(".inputs-element");
const $inputs = document.querySelectorAll("input");
let mood = "";
let table = [];

$form.addEventListener("submit", (e) => {
	e.preventDefault();
	$dialog.close();
	const data = new FormData($form);
	const radios = data.get("radios");
	mood = radios;
	$section2.classList.add("flex");
	newDiv();
});
$close.addEventListener("click", () => {
	$dialog.close();
});
$logmood.addEventListener("click", () => {
	$dialog.showModal();
});

function newDiv() {
	const $newDivs = document.querySelectorAll(".moodelement");
	if ($newDivs.length < 7) {
	} else {
		$newDivs[6].remove();
	}
	const $newDiv = document.createElement("div");
	$newDiv.classList.add("moodelement");
	if (mood == "Verry Happy") {
		$newDiv.classList.add("verryH");
		$svg.setAttribute("src", "assets/verryhappy.svg");
	}
	if (mood == "Happy") {
		$newDiv.classList.add("happy");
		$svg.setAttribute("src", "assets/happy.svg");
	}
	if (mood == "Neutral") {
		$newDiv.classList.add("neutral");
		$svg.setAttribute("src", "assets/neutral.svg");
	}
	if (mood == "Sad") {
		$newDiv.classList.add("sad");
		$svg.setAttribute("src", "assets/sad.svg");
	}
	if (mood == "Verry Sad") {
		$newDiv.classList.add("verryS");
		$svg.setAttribute("src", "assets/verrysad.svg");
	}
	$newDiv.textContent = mood;
	$lastmoods.prepend($newDiv);
	$h2.textContent = mood;
}

for (let i = 0; i < $inputs.length; i++) {
	$inputs[i].addEventListener("change", () => {
		for (let j = 0; j < $inputsDiv.length; j++) {
			$inputsDiv[j].classList.remove("border");
		}
		$inputsDiv[i].classList.add("border");
	});
}
