<script>
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing'; // Example easing function

	// You might fetch actual game/news data here later
	const featuredGames = [
		{
			id: 1,
			title: 'Project Chimera',
			genre: 'Sci-Fi RPG',
			image: '/images/placeholder-game1.jpg'
		},
		{ id: 2, title: 'Pixel Racers', genre: 'Retro Arcade', image: '/images/placeholder-game2.jpg' },
		{
			id: 3,
			title: 'Forest Guardians',
			genre: 'Action Adventure',
			image: '/images/placeholder-game3.jpg'
		}
	];

	const newsItems = [
		{
			id: 1,
			title: 'Studio Expansion Announced!',
			date: '2024-07-15',
			excerpt: "We're growing our team and moving to a new office space..."
		},
		{
			id: 2,
			title: 'Project Chimera Reaches Alpha Milestone',
			date: '2024-06-28',
			excerpt: 'Exciting progress on our flagship title...'
		},
		{
			id: 3,
			title: 'Showcasing at Indie Dev Con',
			date: '2024-05-10',
			excerpt: 'Come meet us and play our latest demos next month...'
		}
	];

	// Simple visibility flag for entry animations (more robust solution would use Intersection Observer)
	let heroVisible = false;
	let aboutVisible = false;
	let gamesVisible = false;
	let newsVisible = false;
	let ctaVisible = false;

	// Simulate elements becoming visible after mount (replace with Intersection Observer later)
	import { onMount } from 'svelte';
	onMount(() => {
		setTimeout(() => (heroVisible = true), 100); // Small delay
		// In a real app, you'd trigger these based on scroll position
		setTimeout(() => (aboutVisible = true), 300);
		setTimeout(() => (gamesVisible = true), 500);
		setTimeout(() => (newsVisible = true), 700);
		setTimeout(() => (ctaVisible = true), 900);
	});
</script>

<svelte:head>
	<title>Your Game Studio - Crafting Worlds</title>
	<meta
		name="description"
		content="Welcome to [Your Game Studio Name] - We create unforgettable gaming experiences."
	/>
</svelte:head>

<!-- 1. Hero Section -->
{#if heroVisible}
	<section class="hero" transition:fly={{ y: 50, duration: 800, easing: cubicOut }}>
		<div class="hero-overlay"></div>
		<div class="container hero-content">
			<h1 in:fly={{ y: 30, duration: 600, delay: 200, easing: cubicOut }}>
				Crafting <span class="highlight-yellow">Worlds</span>, Igniting
				<span class="highlight-pink">Imagination</span>.
			</h1>
			<p in:fly={{ y: 20, duration: 600, delay: 400, easing: cubicOut }}>
				We are [Your Game Studio Name], passionate developers dedicated to creating unforgettable
				gaming experiences.
			</p>
			<div in:fly={{ y: 20, duration: 600, delay: 600, easing: cubicOut }}>
				<a href="/games" class="btn btn-accent btn-large">Explore Our Games</a>
				<a href="/contact" class="btn btn-secondary btn-large" style="margin-left: var(--space-sm);"
					>Get In Touch</a
				>
			</div>
		</div>
	</section>
{/if}

<!-- 2. About Us Snippet -->
{#if aboutVisible}
	<section id="about" class="about-section" transition:fade={{ duration: 800, delay: 200 }}>
		<div class="container">
			<h2>Who We Are</h2>
			<div class="about-content">
				<p>
					Founded by a team of veteran developers and artists, [Your Game Studio Name] lives at the
					intersection of technology and creativity. We believe in the power of games to tell
					stories, connect people, and inspire wonder. Our mission is simple: build games we love to
					play, with quality and fun at their core.
				</p>
				<a href="/about" class="btn btn-secondary">Learn More About Us</a>
			</div>
		</div>
	</section>
{/if}

<!-- 3. Featured Games Section -->
{#if gamesVisible}
	<section
		id="featured-games"
		class="featured-games"
		transition:fade={{ duration: 800, delay: 200 }}
	>
		<div class="container">
			<h2>Featured Projects</h2>
			<div class="games-grid">
				{#each featuredGames as game, i}
					<div
						class="game-card"
						in:fly={{ y: 50, duration: 600, delay: i * 150, easing: cubicOut }}
					>
						<div class="game-card-image" style="background-image: url('{game.image}')">
							<!-- Placeholder aspect ratio box -->
							<div style="padding-top: 56.25%;"></div>
						</div>
						<div class="game-card-content">
							<h3>{game.title}</h3>
							<p class="game-genre">{game.genre}</p>
							<a href="/games/{game.id}" class="btn btn-small">View Details</a>
						</div>
					</div>
				{/each}
			</div>
			<div class="see-all-link">
				<a href="/games" class="btn">See All Games</a>
			</div>
		</div>
	</section>
{/if}

<!-- 4. Latest News Section -->
{#if newsVisible}
	<section id="latest-news" class="latest-news" transition:fade={{ duration: 800, delay: 200 }}>
		<div class="container">
			<h2>Latest Updates</h2>
			<div class="news-list">
				{#each newsItems as item, i}
					<article
						class="news-item"
						in:fly={{ y: 30, duration: 500, delay: i * 100, easing: cubicOut }}
					>
						<span class="news-date">{item.date}</span>
						<h3><a href="/news/{item.id}">{item.title}</a></h3>
						<p>{item.excerpt}</p>
						<a href="/news/{item.id}" class="read-more">Read More →</a>
					</article>
				{/each}
			</div>
			<div class="see-all-link">
				<a href="/news" class="btn btn-secondary">More News</a>
			</div>
		</div>
	</section>
{/if}

<!-- 5. Call to Action Section -->
{#if ctaVisible}
	<section id="cta" class="cta-section" transition:fade={{ duration: 800, delay: 200 }}>
		<div class="container cta-content">
			<h2>Ready to Collaborate?</h2>
			<p>
				Whether you're looking for a development partner, have a question, or just want to say
				hello, we'd love to hear from you.
			</p>
			<a href="/contact" class="btn btn-accent btn-large">Let's Talk!</a>
		</div>
	</section>
{/if}

<style>
	/* --- Hero Section --- */
	.hero {
		min-height: 70vh; /* Adjust as needed */
		max-height: 800px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		position: relative;
		background:
			linear-gradient(rgba(42, 47, 54, 0.7), rgba(42, 47, 54, 0.9)),
			url('/images/placeholder-hero-bg.jpg') no-repeat center center/cover; /* Add a placeholder bg */
		background-color: var(--color-dark-bg); /* Fallback */
		color: var(--color-text-light);
		padding: var(--space-xl) 0;
		margin-top: -1px; /* Avoid tiny gap with header potentially */
	}

	.hero-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		/* Optional subtle gradient or noise pattern */
		/* background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3)); */
		z-index: 1;
	}

	.hero-content {
		position: relative;
		z-index: 2;
	}

	.hero h1 {
		font-size: clamp(var(--font-size-2xl), 6vw, var(--font-size-3xl)); /* Responsive font size */
		font-weight: 700;
		margin-bottom: var(--space-sm);
		color: var(--color-text-light);
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
	}

	.hero p {
		font-size: var(--font-size-lg);
		margin-bottom: var(--space-lg);
		max-width: 650px;
		margin-left: auto;
		margin-right: auto;
		color: var(--color-light-accent);
		text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
	}

	.highlight-yellow {
		color: var(--color-yellow-accent);
	}
	.highlight-pink {
		color: var(--color-pink-accent);
	}

	.btn-large {
		padding: var(--space-sm) var(--space-lg);
		font-size: var(--font-size-lg);
	}

	/* --- About Section --- */
	.about-section {
		background-color: var(--color-blue-darkest); /* Subtle background change */
	}
	.about-content {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}
	.about-content p {
		font-size: var(--font-size-lg);
		color: var(--color-light-accent);
		margin-bottom: var(--space-lg);
	}

	/* --- Featured Games --- */
	.featured-games {
		background-color: var(--color-dark-bg); /* Back to default */
	}

	.games-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--space-lg);
		margin-bottom: var(--space-xl);
	}

	.game-card {
		background-color: var(--color-blue-darker);
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
		transition:
			transform var(--transition-speed) ease,
			box-shadow var(--transition-speed) ease;
		display: flex;
		flex-direction: column;
	}

	.game-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
	}

	.game-card-image {
		background-color: var(--color-blue-deep); /* Placeholder color */
		background-size: cover;
		background-position: center;
		/* Use an aspect ratio div inside or set a fixed height */
		position: relative;
	}

	.game-card-content {
		padding: var(--space-md);
		flex-grow: 1; /* Ensure content area fills space if card heights differ */
		display: flex;
		flex-direction: column;
		justify-content: space-between; /* Push button to bottom */
	}

	.game-card-content h3 {
		margin-bottom: var(--space-xs);
		color: var(--color-text-light);
		font-size: var(--font-size-lg);
	}

	.game-genre {
		color: var(--color-blue-primary);
		font-size: var(--font-size-sm);
		margin-bottom: var(--space-md);
	}

	.btn-small {
		padding: var(--space-xs) var(--space-sm);
		font-size: var(--font-size-sm);
		align-self: flex-start; /* Align button to the left */
	}

	.see-all-link {
		text-align: center;
		margin-top: var(--space-lg);
	}

	/* --- Latest News --- */
	.latest-news {
		background-color: var(--color-blue-darkest);
	}
	.news-list {
		max-width: 800px;
		margin: 0 auto var(--space-xl) auto;
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}
	.news-item {
		border-bottom: 1px solid var(--color-blue-deep);
		padding-bottom: var(--space-lg);
	}
	.news-item:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}

	.news-date {
		display: block;
		color: var(--color-blue-primary);
		font-size: var(--font-size-sm);
		margin-bottom: var(--space-xs);
	}
	.news-item h3 {
		margin-bottom: var(--space-xs);
		font-size: var(--font-size-lg);
	}
	.news-item h3 a {
		color: var(--color-text-light);
	}
	.news-item h3 a:hover {
		color: var(--color-yellow-accent);
	}

	.news-item p {
		color: var(--color-light-accent);
		margin-bottom: var(--space-sm);
	}
	.read-more {
		font-weight: 600;
		color: var(--color-yellow-accent);
	}
	.read-more:hover {
		text-decoration: underline;
	}

	/* --- CTA Section --- */
	.cta-section {
		background-color: var(--color-blue-secondary); /* Different background */
		background: linear-gradient(to right, var(--color-blue-secondary), var(--color-blue-deep));
		text-align: center;
		color: var(--color-text-light);
	}
	.cta-content h2 {
		color: var(--color-text-light);
	}
	.cta-content p {
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: var(--space-lg);
		font-size: var(--font-size-lg);
	}

	/* --- Responsive Adjustments --- */
	@media (max-width: 768px) {
		.hero {
			min-height: 60vh;
		}
		.hero h1 {
			font-size: clamp(var(--font-size-xl), 8vw, var(--font-size-2xl));
		}
		.hero p {
			font-size: var(--font-size-base);
		}

		.btn-large {
			padding: var(--space-sm) var(--space-md);
			font-size: var(--font-size-base);
		}

		.games-grid {
			grid-template-columns: 1fr; /* Stack cards on mobile */
		}

		section {
			padding: var(--space-xl) 0; /* Reduce padding slightly on mobile */
		}
	}
</style>
