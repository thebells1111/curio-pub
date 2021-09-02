<script>
  import {
    blankPerson,
    rssData,
    selectedPersonGroups,
    selectedPersonRoles,
  } from "../../../../stores/editor";
  import { groups, roles } from "../../../../stores/podcastPerson";

  export let data = [];
  export let type;

  $: console.log($selectedPersonGroups);
  $: console.log($selectedPersonRoles);
</script>

<div class="persons-container">
  {#if type === "podcast"}
    <p>
      These are for people that are consistent for every podcast, i.e. hosts
    </p>
  {:else if type === "episode"}
    <p>These are for people that are in the episode only, i.e. guests</p>
  {/if}
  <div class="person-header">
    <button
      on:click={() => {
        data.push({ ...blankPerson });
        data = data;
      }}
    >
      Add New Person
    </button>
  </div>
  <div class="person-blocks-container">
    {#if data}
      {#each data as person, i}
        <div class="person-block">
          <div class="person-block-header">
            <h3
              style={`color: hsla(${352 - ((i + 1) % 4) * 90}, 100%, 33%, 1)`}
            >
              Person #{i + 1}:
            </h3>
            <button
              on:click={(e) => {
                data.splice(i, 1);
                data = data;
                console.log(data);
              }}
              style={`background-image: linear-gradient(
                to bottom,
                hsla(${352 - ((i + 1) % 4) * 90}, 100%, 46.7%, 1),
                hsla(${352 - ((i + 1) % 4) * 90}, 100%, 26.7%, 1)
              )`}
            >
              Delete This Person
            </button>
          </div>
          <label>
            <h4
              style={`color: hsla(${352 - ((i + 1) % 4) * 90}, 100%, 33%, 1)`}
            >
              Person
            </h4>
            <input type="text" bind:value={person["#text"]} />
          </label>
          <label>
            <h4
              style={`color: hsla(${352 - ((i + 1) % 4) * 90}, 100%, 33%, 1)`}
            >
              Role
            </h4>
            <!-- svelte-ignore a11y-no-onchange -->
            <select
              bind:value={$selectedPersonGroups[i]}
              on:change={() => (person["@_group"] = $selectedPersonGroups[i])}
            >
              {#each groups as group}
                <option value={group}>
                  {group}
                </option>
              {/each}
            </select>
          </label>
          <label>
            <h4
              style={`color: hsla(${352 - ((i + 1) % 4) * 90}, 100%, 33%, 1)`}
            >
              Role
            </h4>
            <!-- svelte-ignore a11y-no-onchange -->
            <select
              bind:value={$selectedPersonRoles[i]}
              on:change={() => (person["@_role"] = $selectedPersonRoles[i])}
            >
              {#each roles[$selectedPersonGroups[i]] || [] as role}
                <option value={role}>
                  {role}
                </option>
              {/each}
            </select>
          </label>
          <label>
            <h4
              style={`color: hsla(${352 - ((i + 1) % 4) * 90}, 100%, 33%, 1)`}
            >
              Image Link
            </h4>
            <input type="text" bind:value={person["@_img"]} />
          </label>
          <label>
            <h4
              style={`color: hsla(${352 - ((i + 1) % 4) * 90}, 100%, 33%, 1)`}
            >
              Website
            </h4>
            <input type="text" bind:value={person["@_href"]} />
          </label>
        </div>
      {/each}
    {/if}
  </div>
</div>

<style>
  .persons-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    width: 50%;
    height: 100%;
  }
  .person-blocks-container {
    overflow: auto;
  }
  .person-block {
    margin-bottom: 16px 0;
  }
  p {
    text-align: center;
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
    background-image: linear-gradient(
      to bottom,
      hsla(352, 100%, 43.7%, 1),
      hsla(352, 100%, 26.7%, 1)
    );
    box-shadow: inset 0 1px hsla(0, 0%, 42.7%, 1), 0 2px 2px rgba(0, 0, 0, 0.33);
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
