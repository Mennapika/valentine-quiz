// Heart animation
function createHeart() {
	const heart = document.createElement('div');
	heart.className = 'heart';
	heart.style.left = Math.random() * window.innerWidth + 'px';
	heart.innerHTML = '❤️';
	document.body.appendChild(heart);
	setTimeout(() => heart.remove(), 4000);
}
setInterval(createHeart, 300);

// Confetti
function createConfetti() {
	for(let i=0; i<100; i++){
		const confetti = document.createElement('div');
		confetti.className = 'confetti';
		confetti.style.left = Math.random() * window.innerWidth + 'px';
		confetti.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 70%)`;
		confetti.style.animationDuration = 2 + Math.random()*3 + 's';
		document.body.appendChild(confetti);
		setTimeout(() => confetti.remove(), 5000);
	}
}

// Quiz logic
function checkAnswers() {
	const answers = ["roses", "titanic", "chocolate cake", "your smile"]; // Customize
	const userAnswers = [
		document.getElementById("q1").value.toLowerCase().trim(),
		document.getElementById("q2").value.toLowerCase().trim(),
		document.getElementById("q3").value.toLowerCase().trim(),
		document.getElementById("q4").value.toLowerCase().trim()
	];

	let score = 0;
	for(let i=0; i<answers.length; i++){
		if(userAnswers[i] === answers[i]) score++;
	}

	const resultDiv = document.getElementById("result");
	const surprise = document.getElementById("surprise");
	const sound = document.getElementById("valentineSound");

	if(score === answers.length){
		resultDiv.innerHTML = "🎉 Perfect! You passed! Will you be my Valentine? 💖";
		surprise.style.display = "block"; // show GIF
		createConfetti(); // trigger confetti
		sound.play(); // play sound
	} else {
		resultDiv.innerHTML = "🎉 Perfect! You passed! Will you be my Valentine? 💖";
		surprise.style.display = "block"; // show GIF
		createConfetti(); // trigger confetti
		sound.play(); // play sound
	}
    saveAsPDF(document.getElementById("q1").value, document.getElementById("q2").value, document.getElementById("q3").value, document.getElementById("q4").value);
}

