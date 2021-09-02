<script>
  import { editingEpisode, rssData } from "../../../stores/editor";

  let blankTranscripts = [
    {
      "@type": "application/json",
      "@_url": "",
    },
  ];

  let transcriptsArray;

  // $: console.log($editingEpisode?.['podcast:transcripts']);
  // $: console.log(transcriptsArray);

  $: if ($editingEpisode) {
    transcriptsArray = $editingEpisode["podcast:transcript"]
      ? $editingEpisode?.["podcast:transcript"]
      : blankTranscripts;
    if (!Array.isArray(transcriptsArray)) {
      transcriptsArray = [transcriptsArray];
    }
  }
</script>

{#if $rssData}
  <div>
    transcripts Link:
    {#each transcriptsArray as transcript}
      <label>
        <h4>URL:</h4>
        <input type="text" bind:value={transcript["@_url"]} />
      </label>
      <label>
        <h4>Type:</h4>
        <input type="text" bind:value={transcript["@_type"]} />
      </label>
    {/each}
  </div>
{/if}

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 8px;
  }
  h4 {
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
</style>
