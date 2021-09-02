<script>
  import VirtualList from "svelte-tiny-virtual-list";
  import EpisodeListItem from "./EpisodeListItem.svelte";

  import { editingEpisodesList } from "../../../stores/editor";

  let listHeight = 500;
  let headerHeight = 80;
  let sectionHeight;
  let sectionWidth;
  let virtualList;
  let scrollToIndex = 0;
  $: if (sectionHeight && headerHeight) {
    listHeight = sectionHeight - headerHeight;
  }
</script>

<section bind:clientHeight={sectionHeight} bind:clientWidth={sectionWidth}>
  {#if $editingEpisodesList && $editingEpisodesList?.length}
    <div class="list-height">
      <VirtualList
        bind:this={virtualList}
        bind:height={listHeight}
        width="100%"
        {scrollToIndex}
        itemCount={$editingEpisodesList.length}
        itemSize={$editingEpisodesList.map((v) => {
          let charPerRow = Math.floor((sectionWidth - 86) / 10);
          let rows = Math.ceil(v.title.length / charPerRow) + 1;
          let titleHeight = 25 * rows;
          return titleHeight + 110;
        })}
        overscanCount={5}
      >
        <div slot="item" let:index let:style {style} class="row">
          <EpisodeListItem episode={$editingEpisodesList?.[index]} />
        </div>
      </VirtualList>
    </div>
  {/if}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  :global(.virtual-list-wrapper) {
    overflow-x: hidden !important;
  }
</style>
