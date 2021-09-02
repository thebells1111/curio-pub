<script>
  import Split from "split-grid";
  import Header from "../Header/Header.svelte";
  import Footer from "../Footer/Footer.svelte";
  import Player from "../Player/Player.svelte";
  import Episodes from "../Episodes/Episodes.svelte";
  import Editor from "../Editor/Editor.svelte";

  let splitInstance;

  function splitPane() {
    function split() {
      splitInstance = Split({
        columnGutters: [
          {
            track: 1,
            element: document.querySelector(".episode-list-gutter"),
          },
        ],
        columnMinSizes: { 0: 200, 2: 200 },
      });
    }
    split();

    return {
      update() {
        splitInstance.destroy();
        split();
      },
    };
  }
</script>

<div class="grid-container" use:splitPane>
  <div class="header"><Header /></div>
  <div class="episode-list"><Episodes /></div>
  <div class="vertical gutter episode-list-gutter"><div /></div>
  <div class="right-pane"><Editor /></div>

  <div class="player"><Player /></div>
  <div class="footer"><Footer /></div>
</div>

<style>
  div {
    overflow: auto;
  }

  .grid-container {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 8px 2fr;
    grid-template-rows: 42px 1fr 42px 42px;
    gap: 0px 0px;
    grid-template-areas:
      "header header header"
      "episode-list episode-list-gutter right-pane"
      "player player player"
      "footer footer footer";
  }

  .header {
    grid-area: header;
  }

  .episode-list {
    grid-area: episode-list;
    overflow: hidden;
  }

  .episode-list-gutter {
    grid-area: episode-list-gutter;
  }

  .right-pane {
    grid-area: right-pane;
  }

  .player {
    grid-area: player;
  }

  .footer {
    grid-area: footer;
  }

  .vertical {
    cursor: ew-resize;
    position: relative;
  }

  .vertical div {
    width: 1px;
    height: 100%;
    background-color: #eee;
  }

  .vertical:hover div {
    width: 1px;
    height: 100%;
    background-color: #000;
  }
</style>
