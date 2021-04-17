(() => {
	console.log('fired');


	const sigils = document.querySelectorAll('.sigilContainer'),
		  banner = document.querySelector('#houseImages');

	// functions go here
	function animateBanner(event) {
		let multiplier = this.dataset.offset,
			offset = 600;


		banner.style.right = `${multiplier * offset}px`;


		
	}


	sigils.forEach(sigil => sigil.addEventListener('click', animateBanner));
})();
