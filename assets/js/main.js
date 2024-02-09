import '../css/main.scss';

document.addEventListener( 'DOMContentLoaded', () => {
	const tabsLoaded = {};
	const tabLinks = document.querySelectorAll( '.cutome-nav-tab a' );

	tabLinks.forEach( ( tabLink ) => {
		tabLink.addEventListener( 'click', ( e ) => {
			e.preventDefault();

			if ( ! tabLink.classList.contains( 'active' ) ) {
				document.querySelectorAll( '.cutome-nav-tab a.nav-link' ).forEach( ( link ) => {
					link.classList.remove( 'active' );
				} );

				tabLink.classList.add( 'active' );
				const tab = tabLink.getAttribute( 'href' ).substring( 1 );
				console.log( tab, tabsLoaded );
				document.getElementById( 'title' ).textContent = tabLink.textContent.trim();
			}
		} );
	} );
} );
