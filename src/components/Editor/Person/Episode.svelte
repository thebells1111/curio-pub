<script>
  import { editingEpisode } from "../../../stores/editor";

  let blankPerson = {
    "#text": "",
    "@_href": "",
    "@_img": "",
    "@_role": "",
  };

  export let personArray;
</script>

<div class="persons-container">
  <p>These are for people that are in the episode only, i.e. guests</p>
  <div class="person-header">
    <button
      on:click={() => {
        personArray.push({ ...blankPerson });
        $editingEpisode["podcast:person"] = personArray;
      }}
    >
      Add New Person
    </button>
  </div>

  {#each personArray as person, i}
    <div class="person-block">
      <div class="person-block-header">
        <h3>Person #{i + 1}:</h3>
        <button
          on:click={(e) => {
            personArray.splice(i, 1);
            $editingEpisode["podcast:person"] = personArray;
          }}
        >
          Delete This Person
        </button>
      </div>
      <label>
        <h4>Person</h4>
        <input type="text" bind:value={person["#text"]} />
      </label>
      <label>
        <h4>Role</h4>
        <input type="text" bind:value={person["@_role"]} />
      </label>
      <label>
        <h4>Image Link</h4>
        <input type="text" bind:value={person["@_img"]} />
      </label>
      <label>
        <h4>Website</h4>
        <input type="text" bind:value={person["@_href"]} />
      </label>
    </div>
  {/each}
</div>

<style>
  .persons-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    width: 50%;
  }
  .person-block {
    margin-bottom: 16px 0;
  }
  h4 {
    margin: 0;
    padding: 0;
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

  button {
    background-color: #333;
    margin: 0;
    color: #eee;
    padding: 2px 8px;
    margin: 0 8px;
    color: #f0f0f0;
    text-shadow: 0 1px #c0c0c0;
    background: #333;
    border: 1px solid;
    border-color: #cfcfcf #a7a7a7 #8e8f8f;
    border-radius: 50px;
    outline: 0;
    background-image: linear-gradient(to bottom, rgb(68, 68, 68), #000);
    box-shadow: inset 0 1px rgb(109, 109, 109), 0 2px 2px rgba(0, 0, 0, 0.33);
    text-shadow: 1px 4px 6px rgb(82, 82, 82), 0 0 0 #000,
      1px 4px 6px rgb(82, 82, 82);
  }

  .person-header {
    width: 100%;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .person-header > button {
    padding: 4px 16px;
  }

  .person-block-header {
    margin: 8px;
    display: flex;
    align-items: center;
  }
  .person-block-header > button {
    font-size: 0.9em;
  }
</style>
