<script>
  import Selector from "./Selector.svelte";
  import EpisodeMetadata from "./EpisodeMetadata/EpisodeMetadata.svelte";
  import Person from "./Person/Person.svelte";
  import Chapters from "./Chapters/Chapters.svelte";
  import Transcripts from "./Transcripts.svelte";
  import Value from "./Value/Value.svelte";
  import EditShowNotes from "./EditShowNotes.svelte";
  import PodcastMetadata from "./PodcastMetadata.svelte";
  import { getContext } from "svelte";
  // const { getRSSEditorFeed } = getContext("app");

  import {
    rightPane,
    showNotesPane,
    editingEpisode,
  } from "../../../stores/editor";

  $: if ($editingEpisode) {
    $rightPane = "episodeMetadata";
    // getRSSEditorFeed();
  }

  // $: console.log($rssData);
</script>

<div class="right-pane">
  <Selector />
  <div bind:this={$showNotesPane} class="notes">
    <div class:hide={$rightPane != "episodeMetadata"}>
      <EpisodeMetadata />
    </div>
    <div class:hide={$rightPane != "showNotes"}>
      <EditShowNotes />
    </div>
    <div class:hide={$rightPane != "person"}>
      <Person />
    </div>
    <div class:hide={$rightPane != "chapters"}>
      <Chapters />
    </div>
    <div class:hide={$rightPane != "transcripts"}>
      <Transcripts />
    </div>
    <div class:hide={$rightPane != "value"}>
      <Value />
    </div>
    <div class:hide={$rightPane != "podcastMetadata"}>
      <PodcastMetadata />
    </div>
  </div>
</div>

<style>
  .right-pane {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    width: 100%;
  }

  div {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  }
  .hide {
    display: none;
  }
</style>
