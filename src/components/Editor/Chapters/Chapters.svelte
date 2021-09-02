<script>
  import { editingEpisode, rssData, player } from "../../../../stores/editor";

  let blankChapters = {
    "@type": "application/json",
    "@_url": "",
  };

  let chapters;

  // $: console.log($editingEpisode?.['podcast:chapters']);
  // $: console.log(chaptersArray);

  $: if ($editingEpisode) {
    chapters = $editingEpisode["podcast:chapters"]
      ? $editingEpisode?.["podcast:chapters"]
      : blankChapters;
  }
  let editingChapters = [];

  function loadChapters() {
    if (chapters["@_url"]) {
      fetch("/api/httpsproxy.js?url=" + encodeURIComponent(chapters["@_url"]))
        .then((x) => {
          return x.json();
        })
        .then((y) => {
          editingChapters = y.chapters
            .concat(editingChapters)
            .sort(function (a, b) {
              return a.startTime - b.startTime;
            });

          console.log(editingChapters);
        });
    } else {
      editingChapters = editingChapters;
    }
  }

  function markChapter() {
    editingChapters.push({
      img: "",
      startTime: $player.currentTime(),
      title: "New Chapter",
      url: "",
    });
    editingChapters = editingChapters.sort(function (a, b) {
      return a.startTime - b.startTime;
    });
  }

  function convertTime(time) {
    try {
      let formatTime = new Date(time * 1000).toISOString().substr(11, 8);
      if (formatTime.charAt(0) === "0") {
        return formatTime.substring(1);
      }

      return formatTime;
    } catch {
      (err) => console.log(err);
    }
  }
</script>

{#if $rssData}
  <div>
    Chapters Link:
    <label>
      <h4>URL:</h4>
      <input type="text" bind:value={chapters["@_url"]} />
    </label>
  </div>
  <button on:click={loadChapters}>Load Chapters</button>
  <button on:click={markChapter}>Mark New Chapter</button>
{/if}

<ul>
  {#each editingChapters as chapter, i}
    <li>
      <p>{i + 1}.</p>
      <img src={chapter.img} />
      <div class="middle">
        {chapter.title}
        <!-- {chapter.url} -->
      </div>
      <div class="time">{convertTime(chapter.startTime)}</div>
    </li>
  {/each}
</ul>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 8px;
  }
  h5 {
    margin: 0;
    padding: 0;
  }
  label {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  input {
    flex-grow: 1;
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

  .time {
  }

  li > img {
    width: 100px;
  }
</style>
