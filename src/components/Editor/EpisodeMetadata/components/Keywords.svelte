<script>
  import { editingEpisode } from "../../../../../stores/editor";
</script>

<div class="episode-keywords">
  <label>
    <h3>Keywords:</h3>
    <input type="text" bind:value={$editingEpisode["itunes:keywords"]} />
  </label>
</div>

<style>
  .episode-keywords {
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
