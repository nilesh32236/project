import '../css/main.scss';

document.addEventListener( 'DOMContentLoaded', () => {
	const tabsLoaded = {};
	const tabLinks = document.querySelectorAll( '.cutome-nav-tab a' );
	const tabContent = document.querySelectorAll( '.tab-content .tab-pane' );

	const pathName = window.location.pathname.substring( 0, window.location.pathname.lastIndexOf( '/' ) );

	const updateURL = ( tabId ) => {
		const newPath = `${ window.location.origin }${ pathName }/${ tabId }`;
		window.history.replaceState( { path: newPath }, '', newPath );
	};

	const setActiveTab = ( tabId ) => {
		tabLinks.forEach( ( link ) => {
			link.classList.remove( 'active' );
		} );

		const activeLink = document.querySelector( `.cutome-nav-tab a[href="#${ tabId }"]` );

		if ( activeLink ) {
			activeLink.classList.add( 'active' );
		}

		document.getElementById( 'title' ).textContent = activeLink.textContent.trim();

		tabContent.forEach( ( content ) => {
			content.classList.remove( 'show' );
			setTimeout( () => {
				content.classList.remove( 'active' );
			}, 250 );
		} );

		document.getElementById( tabId ).classList.add( 'show' );

		setTimeout( () => {
			document.getElementById( tabId ).classList.add( 'active' );
		}, 250 );

		updateURL( tabId );
	};

	tabLinks.forEach( ( tabLink ) => {
		tabLink.addEventListener( 'click', ( e ) => {
			e.preventDefault();

			if ( ! tabLink.classList.contains( 'active' ) ) {
				const tabId = tabLink.getAttribute( 'href' ).substring( 1 );
				setActiveTab( tabId );

				if ( ! tabsLoaded[ tabId ] ) {
					tabsLoaded[ tabId ] = true;
				}
			}
		} );
	} );

	let tabIdFromURL = window.location.pathname.substring( window.location.pathname.lastIndexOf( '/' ) + 1 ).trim();

	if ( 'home.php' === tabIdFromURL ) {
		tabIdFromURL = 'dashboard';
	}
	setActiveTab( tabIdFromURL );
} );
