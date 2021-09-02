<script>
  import { editingEpisode } from "../../../../../stores/editor";
</script>

<div class="episode-author">
  <label>
    <h3>Author:</h3>
    <input type="text" bind:value={$editingEpisode.author} />
  </label>
</div>

<style>
  .episode-author {
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
