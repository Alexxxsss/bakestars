<script>
	import '../app.css'; // Import global styles
	import { navigating } from '$app/stores'; // For potential loading indicators

	// Reactive variable for mobile menu state
	let isMobileMenuOpen = false;

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
	}
</script>

<div class="site-wrapper">
	<header class="main-header" class:scrolled={$navigating}>
		<div class="container header-container">
			<a href="/" class="logo-placeholder" on:click={closeMobileMenu}>
				<!-- Your Logo Will Go Here -->
				<span>GameStudio[<span class="logo-accent">LOGO</span>]</span>
			</a>

			<!-- Mobile Menu Toggle -->
			<button
				class="mobile-menu-toggle"
				on:click={toggleMobileMenu}
				aria-label="Toggle Menu"
				aria-expanded={isMobileMenuOpen}
			>
				{#if isMobileMenuOpen}
					<!-- Close Icon (X) -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"
						></line></svg
					>
				{:else}
					<!-- Hamburger Icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"
						></line><line x1="3" y1="18" x2="21" y2="18"></line></svg
					>
				{/if}
			</button>

			<nav class="main-nav" class:open={isMobileMenuOpen}>
				<ul>
					<li><a href="/" on:click={closeMobileMenu}>Home</a></li>
					<li><a href="/games" on:click={closeMobileMenu}>Games</a></li>
					<li><a href="/about" on:click={closeMobileMenu}>About</a></li>
					<li><a href="/news" on:click={closeMobileMenu}>News</a></li>
					<li><a href="/contact" class="nav-contact-btn" on:click={closeMobileMenu}>Contact</a></li>
				</ul>
			</nav>
		</div>
	</header>

	<main>
		<!-- Page content goes here -->
		<slot />
	</main>

	<footer class="main-footer">
		<div class="container">
			<p>© {new Date().getFullYear()} Your Game Studio Name. All rights reserved.</p>
			<!-- Add social media links or other footer content here -->
		</div>
	</footer>
</div>

<style>
	.site-wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.main-header {
		background-color: var(--color-dark-bg);
		padding: var(--space-sm) 0;
		position: sticky;
		top: 0;
		z-index: 1000;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
		transition: background-color var(--transition-speed) ease;
	}

	/* Optional: Slightly change bg on scroll/navigation */
	.main-header.scrolled {
		/* background-color: var(--color-blue-darkest); */
	}

	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo-placeholder {
		font-size: var(--font-size-lg);
		font-weight: 700;
		color: var(--color-text-light);
		text-decoration: none;
	}
	.logo-placeholder:hover {
		color: var(--color-text-light); /* Prevent default link hover */
	}

	.logo-accent {
		color: var(--color-yellow-accent);
		font-weight: 700;
	}

	.main-nav ul {
		list-style: none;
		display: flex;
		gap: var(--space-md);
		align-items: center;
	}

	.main-nav a {
		color: var(--color-text-light);
		font-weight: 400;
		padding: var(--space-xs) 0;
		position: relative;
		text-decoration: none;
	}

	.main-nav a::after {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: var(--color-yellow-accent);
		transition: width var(--transition-speed) ease;
	}

	.main-nav a:hover::after,
	.main-nav a:focus::after {
		width: 100%;
	}

	.main-nav a:hover,
	.main-nav a:focus {
		color: var(--color-text-light); /* Keep text color same on hover, let underline be indicator */
	}

	/* Special style for contact button */
	.nav-contact-btn {
		background-color: var(--color-blue-primary);
		color: var(--color-text-dark);
		padding: var(--space-xs) var(--space-sm) !important; /* Override padding */
		border-radius: 4px;
		font-weight: 600;
		transition:
			background-color var(--transition-speed) ease,
			color var(--transition-speed) ease;
	}
	.nav-contact-btn::after {
		display: none; /* Hide underline for button */
	}

	.nav-contact-btn:hover,
	.nav-contact-btn:focus {
		background-color: var(--color-yellow-accent);
		color: var(--color-text-dark);
	}

	.mobile-menu-toggle {
		display: none; /* Hidden by default */
		background: none;
		border: none;
		color: var(--color-text-light);
		cursor: pointer;
		padding: var(--space-xs);
	}

	main {
		flex: 1; /* Takes up remaining vertical space */
	}

	.main-footer {
		background-color: var(--color-blue-darkest);
		padding: var(--space-lg) 0;
		text-align: center;
		margin-top: var(--space-xl); /* Space above footer */
		color: var(--color-text-muted);
		font-size: var(--font-size-sm);
	}

	/* --- Responsive --- */
	@media (max-width: 768px) {
		.mobile-menu-toggle {
			display: block; /* Show hamburger */
			z-index: 1100; /* Ensure it's above the nav */
		}

		.main-nav {
			display: none; /* Hide desktop nav */
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh; /* Full screen */
			background-color: rgba(42, 47, 54, 0.98); /* Slightly transparent dark bg */
			backdrop-filter: blur(5px);
			padding-top: 80px; /* Space for header */
			z-index: 1050; /* Below toggle button but above content */
			overflow-y: auto;
		}

		.main-nav.open {
			display: block; /* Show mobile nav when open */
		}

		.main-nav ul {
			flex-direction: column;
			align-items: center;
			gap: var(--space-lg); /* More spacing for touch */
			padding: var(--space-xl) 0;
		}

		.main-nav a {
			font-size: var(--font-size-xl); /* Larger text for mobile menu */
		}

		.nav-contact-btn {
			padding: var(--space-sm) var(--space-lg) !important;
		}
	}
</style>
