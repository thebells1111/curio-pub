<script>
  import { editingEpisode } from "../../../../../stores/editor";
</script>

<div class="episode-guid">
  <label>
    <h3>Episode GUID:</h3>
    <input type="text" bind:value={$editingEpisode.guid["#text"]} />
  </label>
  <div class="permalink">
    <h4>isPermaLink:</h4>
    <div class="permalink-label-container">
      <label class="permalink-radio">
        <input
          type="radio"
          bind:group={$editingEpisode.guid["@_isPermaLink"]}
          value={"false"}
        />
        No
      </label>

      <label class="permalink-radio">
        <input
          type="radio"
          bind:group={$editingEpisode.guid["@_isPermaLink"]}
          value={"true"}
        />
        Yes
      </label>
    </div>
  </div>
</div>

<style>
  .episode-guid {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
  }
  h3,
  h4 {
    margin: 0;
    padding: 0;
    color: hsla(352, 100%, 33%, 1);
  }

  input[type="text"] {
    width: 100%;
    padding: 8px;
  }
  .permalink {
    padding-left: 8px;
  }
  .permalink-label-container {
    display: flex;
    padding-left: 8px;
  }
  .permalink-label-container > label {
    padding-right: 8px;
    margin-right: 12px;
    cursor: pointer;
  }
</style>
