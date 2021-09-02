<script>
  import { stripHtml } from "string-strip-html";

  import prettyDate from "../../../functions/prettyDate";

  import { editingEpisode, rssData } from "../../../stores/editor";

  export let episode;

  async function selectEpisode(episode) {
    //Cleanup Person
    if ($editingEpisode && $editingEpisode["podcast:person"]) {
      if (!$editingEpisode["podcast:person"][0]["#text"]) {
        delete $editingEpisode["podcast:person"];
      } else {
        $editingEpisode["podcast:person"] = $editingEpisode[
          "podcast:person"
        ].filter((v) => {
          if (v["#text"] === "") {
            return false;
          }
          if (!v["@_href"]) {
            delete v["@_href"];
          }
          if (!v["@_img"]) {
            delete v["@_img"];
          }
          if (!v["@_role"]) {
            delete v["@_role"];
          }
          return v;
        });
      }
    }

    //Cleanup Value
    if (
      $editingEpisode &&
      $editingEpisode["podcast:value"] &&
      $editingEpisode["podcast:value"]["podcast:valueRecipient"]
    ) {
      if (
        !$editingEpisode["podcast:value"]["podcast:valueRecipient"][0][
          "@_address"
        ] ||
        !$editingEpisode["podcast:value"]["podcast:valueRecipient"][0][
          "@_split"
        ]
      ) {
        delete $editingEpisode["podcast:value"];
      } else {
        $editingEpisode["podcast:value"]["podcast:valueRecipient"] =
          $editingEpisode["podcast:value"]["podcast:valueRecipient"].filter(
            (v) => {
              if (!v["@_name"]) {
                delete v["@_name"];
              }
              if (!v["@_customKey"]) {
                delete v["@_customKey"];
              }
              if (!v["@_customValue"]) {
                delete v["@_customValue"];
              }
              if (!v["@_fee"]) {
                delete v["@_fee"];
              }
              return v;
            }
          );
      }
    }
    $editingEpisode = episode;

    //Initialize Person
    $editingEpisode["podcast:person"] = $editingEpisode["podcast:person"]
      ? $editingEpisode?.["podcast:person"]
      : [
          {
            "#text": "",
            "@_href": "",
            "@_img": "",
            "@_role": "",
          },
        ];
    if (!Array.isArray($editingEpisode["podcast:person"])) {
      $editingEpisode["podcast:person"] = [$editingEpisode["podcast:person"]];
    }

    //Initialize Person
    $editingEpisode["podcast:value"] = $editingEpisode["podcast:value"]
      ? $editingEpisode?.["podcast:value"]
      : {
          "@_type": "lightning",
          "@_method": "keysend",
          "@_suggested": "0.00000005000",
          "podcast:valueRecipient": [
            {
              "@_name": "",
              "@_type": "node",
              "@_address": "",
              "@_customKey": "",
              "@_customValue": "",
              "@_split": "",
              "@_fee": "",
            },
          ],
        };

    window.tinymce.activeEditor.setContent($editingEpisode.description);
  }

  async function startEpisode(episode) {
    // if (
    //   $playingPodcast?.title === $selectedPodcast?.title &&
    //   $playingEpisode?.title === episode?.title
    // ) {
    //   if (!$playerIsPaused) {
    //     $player.pause();
    //   } else {
    //     $player.play();
    //   }
    // } else {
    //   $playingEpisode = {
    //     title: episode.title,
    //     enclosureUrl: episode.enclosure["@_url"],
    //   };
    //   console.log($playingEpisode);
    //   $playingPodcast = {
    //     title: $rssData.title,
    //     // enclosureUrl: $rssData['@_enclosureUrl'],
    //   };
    //   loadSrc();
    //   $player.play();
    //   $playerIsPaused = false;
    // }
  }

  function makeSnippet(string) {
    if (typeof string === "string") {
      let s = string.substring(0, 105);
      return `${s.substr(0, s.lastIndexOf(" "))} ...`;
    }
    return "";
  }
</script>

<div class="container" class:selected={episode === $editingEpisode}>
  <div on:click={selectEpisode.bind(this, episode)} class="description">
    <div class="head">
      <h1>{episode?.title}</h1>
      <div>
        {#if episode?.datePublished}
          <p>{prettyDate(episode?.datePublished)}</p>
        {/if}
      </div>
    </div>
    <div>
      <p>{stripHtml(makeSnippet(episode?.description)).result}</p>
    </div>
  </div>
</div>

<style>
  .container {
    height: 100%;
    margin: 0;
    padding: 0 8px;
    border-bottom: 1px solid #444;
    list-style: none;
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    position: relative;
    overflow: hidden;
  }

  .container:hover {
    color: #111;
  }

  .container.selected {
    color: #222;
    background-color: rgba(0, 0, 0, 0.05);
  }

  .description {
    width: 100%;
  }

  :global(p) {
    height: auto;
    padding: 0 0 1em 0.75em;
    margin: 0;
  }

  h1 {
    width: 100%;
    margin: 0.5em 0 0.125em 0;
    font-size: 1.17em;
    font-weight: bolder;
  }

  .head {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .head > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .head > div > p {
    font-size: 0.8em;
    margin: 0 1em;
  }

  .episode-button {
    background-color: transparent;
    border: none;
    padding: 0;
    width: 42px;
    margin: 0;
    color: var(--color-text);
    transform: scale(1);
    transition-duration: 0.2s;
  }

  .episode-button:hover {
    color: #111;
    transform: scale(1.2);
    transition-duration: 0.2s;
  }
</style>
