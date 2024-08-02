<script>
  import logo from './assets/images/logo-universal.png'
  import {Greet, LoggedIn} from '../wailsjs/go/main/App.js'
  import Gists from './Gists.svelte';
  import TokenInput from './TokenInput.svelte';
  let resultText = "Please enter your name below 👇"
  let name
  let loggedIn = false;
  let username = "";

  function greet() {
    Greet(name).then(result => resultText = result)
  }
  
  LoggedIn().then(result => {
    loggedIn = result;
  });
</script>

<!-- <main>
  <img alt="Wails logo" id="logo" src="{logo}">
  <div class="result" id="result">{resultText}</div>
  <div class="input-box" id="input">
    <input autocomplete="off" bind:value={name} class="input" id="name" type="text"/>
    <button class="btn" on:click={greet}>Greet</button>
  </div>
</main> -->

{#if username == ""}
<TokenInput bind:username /> 
{:else}
<Gists />
{/if}

