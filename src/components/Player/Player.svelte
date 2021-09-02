<script>
  import { editingEpisode } from "../../../stores/editor";
</script>

<audio controls src={$editingEpisode?.enclosure?.["@_url"]} />

<style>
  audio {
    width: 100%;
  }
</style>
