<script>
  import { slide } from "svelte/transition";

  import { rightPane } from "../../../stores/editor";
  $rightPane = "showNotes";
  let showList = false;
</script>

<h3 on:click={() => (showList = true)}>
  {#if $rightPane === "episodeMetadata"}
    Episode Metadata <span class="chevron" class:bottom={!showList} />
  {:else if $rightPane === "showNotes"}
    Show Notes <span class="chevron" class:bottom={!showList} />
  {:else if $rightPane === "person"}
    Person Tag <span class="chevron" class:bottom={!showList} />
  {:else if $rightPane === "chapters"}
    Chapters <span class="chevron" class:bottom={!showList} />
  {:else if $rightPane === "transcripts"}
    Transcripts <span class="chevron" class:bottom={!showList} />
  {:else if $rightPane === "value"}
    Value <span class="chevron" class:bottom={!showList} />
  {:else if $rightPane === "podcastMetadata"}
    Podcast Metadata <span class="chevron" class:bottom={!showList} />
  {/if}
</h3>

{#if showList}
  <div
    transition:slide={{ duration: 200 }}
    on:click={() => {
      showList = false;
    }}
  >
    <ul>
      <li
        class="left-button"
        class:active={$rightPane === "episodeMetadata"}
        on:click={() => ($rightPane = "episodeMetadata")}
      >
        Episode Metadata
      </li>

      <li
        class:active={$rightPane === "showNotes"}
        on:click={() => ($rightPane = "showNotes")}
      >
        ShowNotes
      </li>

      <li
        class:active={$rightPane === "person"}
        on:click={() => ($rightPane = "person")}
      >
        Person
      </li>

      <li
        class:active={$rightPane === "chapters"}
        on:click={() => {
          $rightPane = "chapters";
        }}
      >
        Chapters
      </li>

      <li
        class:active={$rightPane === "transcripts"}
        on:click={() => {
          $rightPane = "transcripts";
        }}
      >
        Transcripts
      </li>

      <li
        class:active={$rightPane === "value"}
        on:click={() => {
          $rightPane = "value";
        }}
      >
        Value
      </li>

      <li
        class:active={$rightPane === "podcastMetadata"}
        on:click={() => {
          $rightPane = "podcastMetadata";
        }}
      >
        Podcast Metadata
      </li>
    </ul>
  </div>
{/if}

<style>
  h3 {
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;
    height: 58px;
    line-height: 58px;
    position: relative;
  }

  div {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    display: flex;
    justify-content: center;
  }
  ul {
    padding: 0;
    margin: 0;
    border: 1px solid #eee;
    border-radius: 4px;
    background-color: white;
    margin-top: 58px;
    width: 200px;
    height: 270px;
    box-shadow: 0px 3px 10px 0px rgba(50, 50, 50, 0.5);
  }

  li {
    padding: 8px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    list-style: none;
  }
  li:last-of-type {
    border-bottom: none;
  }

  .chevron::before {
    border-style: solid;
    border-width: 0.25em 0.25em 0 0;
    content: "";
    display: inline-block;
    height: 0.6em;
    top: 27px;
    left: 0.15em;
    position: relative;
    transform: rotate(-45deg);
    vertical-align: top;
    width: 0.6em;
  }

  .chevron.bottom:before {
    top: 22px;
    transform: rotate(135deg);
  }
</style>
