<script>
  import TinyMCE from "./TinyMCE.svelte";

  import { editingEpisode } from "../../../stores/editor";

  let persons = [];

  $: if ($editingEpisode) {
    persons = [];
    let p = false;
    if ($editingEpisode.podcastPerson) {
      p = true;
      if ($editingEpisode.podcastPerson.length) {
        persons = $editingEpisode.podcastPerson;
      } else {
        persons = [$editingEpisode.podcastPerson];
      }
    }

    if (p) {
      let temp = [];
      if ($editingEpisode.person) {
        if ($editingEpisode.person.length) {
          temp = $editingEpisode.person;
        } else {
          temp = [$editingEpisode.person];
        }

        for (let p of persons) {
          if (temp.findIndex(({ img }) => img === p.img) === -1) {
            temp.push(p);
          }
        }
        persons = [...temp];
      }
    } else {
      if ($editingEpisode.person) {
        if ($editingEpisode.person.length) {
          persons = $editingEpisode.person;
        } else {
          persons = [$editingEpisode.person];
        }
      }
    }
  }
</script>

<section>
  <div class="show-notes">
    {#if $editingEpisode}
      <TinyMCE />
    {/if}
  </div>
</section>

<style>
  section {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  head {
    display: flex;
  }

  .show-notes {
    overflow: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .person-img {
    width: 64px;
    height: 64px;
    border-radius: 5px;
  }

  .description {
    white-space: pre-line;
    word-wrap: break-word;
  }

  h3 {
    min-height: 42px;
    margin: 0;
    text-align: center;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 0;
    width: 42px;
    margin: 0;
  }

  :global(.shownotes-load-episode-button:hover > svg) {
    color: #111;
    transform: scale(1.2);
    transition-duration: 0.2s;
  }

  .grow-wrap {
    /* easy way to plop the elements on top of each other and have them both sized based on the tallest one's height */
    display: grid;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    margin: 0;
    padding: 0;
    color: #676778;
    flex-grow: 1;
  }
  .grow-wrap::after {
    /* Note the weird space! Needed to preventy jumpy behavior */
    content: attr(data-replicated-value) " ";

    /* This is how textarea text behaves */
    white-space: pre-wrap;

    /* Hidden from view, clicks, and screen readers */
    visibility: hidden;
  }
  .grow-wrap > textarea {
    /* You could leave this, but after a user resizes, then it ruins the auto sizing */
    resize: none;

    /* Firefox shows scrollbar on growth, you can hide like this. */
    overflow: hidden;
  }
  .grow-wrap > textarea,
  .grow-wrap::after {
    /* Identical styling required!! */
    border: none;
    font: inherit;

    /* Place on top of each other */
    grid-area: 1 / 1 / 2 / 2;
    color: #676778;
    padding: 0;
    margin: 0;
    border: 1px solid #ddd;
  }
</style>
