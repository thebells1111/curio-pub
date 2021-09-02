<script>
  import { editingEpisode } from "../../../../../stores/editor";

  $: if ($editingEpisode && !$editingEpisode["itunes:image"]) {
    $editingEpisode["itunes:image"] = { "@_href": undefined };
  }
</script>

<div class="episode-image">
  <label>
    <h3>Episode Image URL:</h3>
    <input type="text" bind:value={$editingEpisode["itunes:image"]["@_href"]} />
  </label>
  <img
    src={$editingEpisode?.["itunes:image"]?.["@_href"]}
    style="height: 75px; width: 75px"
  />
</div>

<style>
  .episode-image {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  h3 {
    margin: 0;
    padding: 0;
    color: hsla(352, 100%, 33%, 1);
  }
  label {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  img {
    margin: 0 0 0 8px;
  }
  input {
    flex-grow: 1;
    padding: 8px;
  }

  button {
    background-color: #333;
    margin: 0;
    color: #eee;
    padding: 0;
    height: 36px;
    min-width: 70px;
    width: 70px;
    margin-left: 8px;
    color: #f0f0f0;
    text-shadow: 0 1px #c0c0c0;
    background: #333;
    border: 1px solid;
    border-color: #cfcfcf #a7a7a7 #8e8f8f;
    border-radius: 50px;
    outline: 0;
    background-image: linear-gradient(to bottom, rgb(68, 68, 68), #000);
    box-shadow: inset 0 1px rgb(109, 109, 109), 0 2px 2px rgba(0, 0, 0, 0.33);
    text-shadow: 1px 4px 6px rgb(82, 82, 82), 0 0 0 #000,
      1px 4px 6px rgb(82, 82, 82);
  }

  button:hover {
    background-color: black;
    color: white;
  }

  button:active {
    background-color: #333;
    color: #eee;
  }
</style>
