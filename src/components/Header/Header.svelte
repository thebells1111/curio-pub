<script>
  import * as parser from "fast-xml-parser";
  import * as he from "he";

  import {
    rssData,
    editingEpisode,
    editingPodcast,
    editingEpisodesList,
    xmlJson,
  } from "../../../stores/editor";

  let url = "http://mp3s.nashownotes.com/pc20rss.xml";

  const parserOptions = {
    attributeNamePrefix: "@_",
    //attrNodeName: false,
    //textNodeName : "#text",
    ignoreAttributes: false,
    ignoreNameSpace: false,
    attrValueProcessor: (val, attrName) => he.decode(val), //default is a=>a
    tagValueProcessor: (val, tagName) => he.decode(val), //default is a=>a
  };

  async function loadRSS() {
    const res = await fetch(url);
    const data = await res.text();
    $xmlJson = parser.parse(data, parserOptions);
    $rssData = $xmlJson.rss.channel;
    $editingPodcast = $rssData;
    $editingEpisodesList = $rssData.item;
    $editingEpisode = $editingEpisodesList[0];
    console.log($editingEpisode);
    // .then(response => response.json())
    // .then(data => console.log(data));
  }
</script>

<div>
  <input type="url" bind:value={url} />
  <button on:click={loadRSS}>Load RSS Feed</button>
</div>

<style>
  div {
    background: #333;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  input {
    margin: 0 2px;
    width: 33%;
  }
</style>
