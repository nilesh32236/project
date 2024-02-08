$(() => {

	const tabsLoaded = {};
	$('.cutome-nav-tab a').on('click', (e) => {
		e.preventDefault();
		$('.cutome-nav-tab a.nav-link').removeClass('active');
		$(e.currentTarget).tab('show');
		let tab = $(e.currentTarget).addClass('active').attr('href').substring(1);

		$('#title').text($(e.currentTarget).text().trim());
	});
});