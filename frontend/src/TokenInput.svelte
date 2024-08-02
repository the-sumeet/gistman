<script>
  export let username = "";
  
  import { LogIn } from "../wailsjs/go/main/App.js";
  import WarningAlert from "./components/WarningAlert.svelte";
  
  let tokenInput = "";
  let error = "";
  let loading = false;

  async function setToken() {
    loading = true;
    LogIn(tokenInput).then((result) => {
      if (result.error != "") {
        error = result.error;
      } else {
        username = result.data;
      }
    });
  }
</script>

<!--
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
-->

<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-lg text-center">
    <h1 class="text-2xl font-bold sm:text-3xl">GitHub Token</h1>

    <p class="mt-4 text-gray-500">
      Token should have permission to access Gists
    </p>
  </div>

  <form action="#" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
    <div>
      <label for="tokenInput" class="sr-only">Token</label>
      <div class="relative">
        <input
          id="tokenInput"
          type="password"
          class="w-full text-black rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter Token"
          bind:value={tokenInput}
        />
      </div>
    </div>

    <div class="flex items-center justify-between">
      <!-- <p class="text-sm text-gray-500">
        
        <a class="underline" href="external https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens">Create Token</a>
      </p> -->

      <button
        type="submit"
        class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        on:click={setToken}
      >
      {#if loading}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="animate-spin bi bi-hourglass" viewBox="0 0 16 16">
        <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5m2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2z"/>
      </svg> 
      {:else}
      Set Token
      {/if}
      </button>
    </div>

    {#if error != ""}
    <WarningAlert msg={error}/>
    {/if}
    
  </form>
</div>
