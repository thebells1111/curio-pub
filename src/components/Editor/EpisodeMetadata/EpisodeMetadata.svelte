<script>
  import Image from "./components/Image.svelte";
  import Title from "./components/Title.svelte";
  import PubDate from "./components/PubDate.svelte";
  import Enclosure from "./components/Enclosure.svelte";
  import GUID from "./components/GUID.svelte";
  import Explicit from "./components/Explicit.svelte";
  import Author from "./components/Author.svelte";
  import Keywords from "./components/Keywords.svelte";

  import { editingEpisode } from "../../../../stores/editor";
</script>

<div>
  {#if $editingEpisode}
    <Title />
    <Image />
    <Enclosure />
    <GUID />
    <PubDate />
    <Explicit />
    <Author />
    <Keywords />
  {/if}
</div>

<style>
  div {
    padding-right: 8px;
  }
</style>
