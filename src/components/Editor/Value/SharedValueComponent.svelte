<script>
  let blankRecipient = {
    '@_name': '',
    '@_type': 'node',
    '@_address': '',
    '@_customKey': '',
    '@_customValue': '',
    '@_split': '',
    '@_fee': '',
  };

  export let data = {};
  export let type;

  function clone(data) {
    return JSON.parse(JSON.stringify(data));
  }
</script>

<div class="persons-container">
  <p>Remember: Non-fee splits need to add up to 100.</p>
  {#if type === 'podcast'}
    <p>Podcast</p>
  {:else if type === 'episode'}
    <p>Episode</p>
  {/if}
  <div class="person-header">
    <button
      on:click={() => {
        data['podcast:valueRecipient'].push(clone(blankRecipient));
        data = data;
      }}
    >
      Add New Value Block
    </button>
  </div>
  <div class="value-blocks-container">
    {#if data && data['podcast:valueRecipient']}
      {#each data['podcast:valueRecipient'] as person, i}
        <div class="person-block">
          <div class="person-block-header">
            <h3
              style={`color: hsla(${352 - ((i + 1) % 4) * 90}, 100%, 33%, 1)`}
            >
              Value Block #{i + 1}:
            </h3>
            <button
              on:click={(e) => {
                data['podcast:valueRecipient'] = data[
                  'podcast:valueRecipient'
                ].splice(i, 1);
                data = data;
              }}
              style={`background-image: linear-gradient(
                to bottom,
                hsla(${352 - ((i + 1) % 4) * 90}, 100%, 46.7%, 1),
                hsla(${352 - ((i + 1) % 4) * 90}, 100%, 26.7%, 1)
              )`}
            >
              Delete This ValueBlock
            </button>
          </div>
          <label>
            <h4
              style={`color: hsla(${352 - ((i + 1) % 4) * 90}, 100%, 33%, 1)`}
            >
              Value Recipient Name
            </h4>
            <input
              type="text"
              bind:value={person['@_name']}
              placeholder="Choose a name so people can send Boostagrams"
            />
          </label>
          <label>
            <h4
              style={`color: hsla(${352 - ((i + 1) % 4) * 90}, 100%, 33%, 1)`}
            >
              Lightning Network Address
            </h4>
            <input
              type="text"
              bind:value={person['@_address']}
              placeholder="Lightning Network Address"
            />
          </label>
          <label>
            <h4
              style={`color: hsla(${352 - ((i + 1) % 4) * 90}, 100%, 33%, 1)`}
            >
              Custom Key
            </h4>
            <input
              type="text"
              bind:value={person['@_customKey']}
              placeholder="(optional) Leave blank unless required by your wallet"
            />
          </label>
          <label>
            <h4
              style={`color: hsla(${352 - ((i + 1) % 4) * 90}, 100%, 33%, 1)`}
            >
              Custom Value
            </h4>
            <input
              type="text"
              bind:value={person['@_customValue']}
              placeholder="(optional) Leave blank unless required by your wallet"
            />
          </label>
          <label>
            <h4
              style={`color: hsla(${352 - ((i + 1) % 4) * 90}, 100%, 33%, 1)`}
            >
              Split
            </h4>
            <p>i.e. 99 would receive 99% of the split</p>
            <input
              type="text"
              bind:value={person['@_split']}
              placeholder="whole numbers only"
            />
          </label>
          <div class="episode-explicit">
            <h4
              style={`color: hsla(${352 - ((i + 1) % 4) * 90}, 100%, 33%, 1)`}
            >
              Fee:
            </h4>
            <div class="explicit-label-container">
              <label>
                <input
                  type="radio"
                  bind:group={person['@_fee']}
                  value={false}
                />
                No
              </label>

              <label>
                <input type="radio" bind:group={person['@_fee']} value={true} />
                Yes
              </label>
            </div>
          </div>
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

  .value-blocks-container {
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

  label > p {
    text-align: left;
    margin: 0;
    padding: 0 0 0 8px;
    font-size: 0.9em;
    font-style: italics;
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

  .episode-explicit {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
  }

  .explicit-label-container {
    display: flex;
    padding-left: 8px;
  }
  .explicit-label-container > label {
    padding-right: 8px;
    margin-right: 12px;
    cursor: pointer;
    display: block;
    width: auto;
  }
</style>
