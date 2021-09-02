<script>
  import { getContext, onMount } from "svelte";

  import {
    editingEpisode,
    editingEpisodesList,
    rightPane,
  } from "../../../stores/editor";
  let editorChangeHandlerId;
  let tinyReady = false;

  // $: console.log($editingEpisode);
  // $: if ($editingEpisode && tinyReady) {
  //   window.tinymce.activeEditor.setContent($editingEpisode.description);
  // }

  function tinymceloaded() {
    $rightPane = "episodeMetadata";
    //set up the tinymceloaded variable as a function here
    tinyReady = true;
    window.tinymce.init({
      selector: "#tiny-editor-description",
      plugins: "link image code media charmap emoticons anchor codesample",
      menubar: "",
      toolbar:
        "undo redo | formatselect | fontsizeselect | charmap emoticons | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | image media link anchor codesample",
      toolbar_sticky: true,
      toolbar_mode: "wrap",
      // toolbar_mode: 'floating',
      branding: false,
      resize: false,
      statusbar: false,
      height: "100%",
      setup: function (editor) {
        editor.on("Paste Change input Undo Redo", function () {
          console.log("change");
          clearTimeout(editorChangeHandlerId);
          editorChangeHandlerId = setTimeout(function () {
            $editingEpisode.description = tinymce.activeEditor.getContent();
            $editingEpisode = $editingEpisode;
            $editingEpisodesList = $editingEpisodesList;
          }, 100);
        });
      },
    });
    window.tinymce.activeEditor.setContent($editingEpisode.description);
  }
  // onMount(tinymceloaded);
</script>

<svelte:head>
  <script src="/tinymce/tinymce.min.js" on:load={tinymceloaded}></script>
</svelte:head>

<textarea id="tiny-editor-description" />

<style>
  textarea {
    height: 100%;
  }
</style>
