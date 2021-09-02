<script>
  import { editingEpisode } from "../../../../../stores/editor";
</script>

<div class="episode-enclosure">
  <label>
    <h3>Enclosure URL:</h3>
    <input type="text" bind:value={$editingEpisode.enclosure["@_url"]} />
  </label>
</div>

<style>
  .episode-enclosure {
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
  input {
    flex-grow: 1;
    padding: 8px;
  }
</style>
