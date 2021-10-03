<script>
	import convertTime from '$lib/functions/convertTime';
	import { browser } from '$app/env';

	import { player } from '$/stores';

	import { editingEpisode, rssData } from '$/editor';
	import ChapterImage from './ChapterImage.svelte';

	let blankChapters = {
		'@type': 'application/json',
		'@_url': ''
	};

	let chapters;

	// $: console.log($editingEpisode?.['podcast:chapters']);
	// $: console.log(chaptersArray);

	$: if ($editingEpisode) {
		chapters = $editingEpisode['podcast:chapters']
			? $editingEpisode?.['podcast:chapters']
			: blankChapters;
	}
	let editingChapters = [];

	function getUniqueListBy(arr, key) {
		return [...new Map(arr.map((item) => [item[key], item])).values()];
	}

	function loadChapters() {
		if (chapters['@_url']) {
			fetch(`/api/httpsproxy?url=` + encodeURIComponent(chapters['@_url']))
				.then((x) => {
					return x.json();
				})
				.then((y) => {
					editingChapters = getUniqueListBy(y.chapters.concat(editingChapters), 'startTime').sort(
						function (a, b) {
							return a.startTime - b.startTime;
						}
					);

					console.log(editingChapters);
				});
		} else {
			editingChapters = editingChapters;
		}
	}

	function markChapter() {
		editingChapters = editingChapters = getUniqueListBy(
			editingChapters.concat({
				title: 'New Chapter',
				url: '',
				img: '',
				startTime: $player.currentTime()
			}),
			'startTime'
		).sort(function (a, b) {
			return a.startTime - b.startTime;
		});
		console.log(editingChapters);
	}
	$: if (browser && chapters) {
		loadChapters();
	}
</script>

{#if $rssData}
	<header>
		<div>
			<h4>Chapters File URL:</h4>
			<button on:click={loadChapters}> Load Chapters </button>
		</div>

		<input type="text" bind:value={chapters['@_url']} />
	</header>

	<button on:click={markChapter}>Mark New Chapter</button>
{/if}

<ul>
	{#each editingChapters as chapter, i}
		<li>
			<p>{i + 1}.</p>
			<ChapterImage {chapter} />
			<div class="middle">
				<label>Title: <input bind:value={chapter.title} /></label>
				<label>URL: <input bind:value={chapter.url} /></label>

				<!-- {chapter.url} -->
			</div>
			<div class="time">{convertTime(chapter.startTime)}</div>
		</li>
	{/each}
</ul>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		margin-bottom: 8px;
	}

	header > div {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: flex-end;
	}
	h4 {
		margin: 0;
		padding: 0;
	}

	input {
		width: 100%;
		padding: 8px;
	}
	ul {
		width: calc(100% - 16px);
	}

	li {
		width: 100%;
		margin: 0 8px 8px 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		position: relative;
	}

	li > p {
		padding: 0 8px 0 0;
		align-self: flex-start;
	}

	.middle {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 0 8px;
	}

	.middle > label {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
	}
	.middle > label > input {
		position: relative;
		top: 4px;
		padding: 4px;
		margin-left: 8px;
	}
	.time {
	}
</style>
