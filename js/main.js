(() => {
	console.log('fired');


	const sigils = document.querySelector('#navList'),
		  banner = document.querySelector('#houseImages');

	// functions go here
	function animateBanner(event) {
		if (event.target.className.includes('sigilContainer')) {
		let multiplier = event.target.dataset.offset,
			offset = 600;


		banner.style.right = `${multiplier * offset}px`;

	}
		
	}

	//sigils.forEach(sigil => sigil.addEventListener('click', animateBanner));
	sigils.addEventListener('click', animateBanner);
})();
