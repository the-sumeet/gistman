<script>
  import { each } from "svelte/internal";
  import Toolbar from "./components/Toolbar.svelte";
  import { GetGistFile, GetGists, GetUser } from "../wailsjs/go/main/App";
  import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
  import { javascript } from "@codemirror/lang-javascript";
  import { onMount } from "svelte/internal";
  import ace from "ace-builds/src-noconflict/ace"; // Import Ace from node_modules
  import "ace-builds/src-noconflict/mode-javascript"; // Import the mode you need
  import "ace-builds/src-noconflict/theme-monokai"; // Import the theme you want

  let gists = [];
  let user;
  let selectedGist;
  let selectedGistFile;
  let editor;

  onMount(() => {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/dracula");
    editor.session.setMode("ace/mode/javascript");
  });

  function getGists() {
    GetGists().then((result) => {
      if (result.error != "") {
        console.log(result.error);
      } else {
        gists = result.data;
      }
    });
  }

  GetUser().then((result) => {
    if (result.error != "") {
      console.log(result.error);
    } else {
      console.log(result.data);
      user = result.data;
    }
  });

  function selectGistFile(gistId, gistFile) {
    GetGistFile(gistId).then((result) => {
      if (result.error != "") {
        console.log(result.error);
      } else {
        selectedGist = result.data;
        selectedGistFile = selectedGist.files[gistFile];
        console.log(selectedGistFile);
        updateEditor();
      }
    });
  }

  function updateEditor() {
    console.log(selectedGistFile);
    console.log(editor);
    if (!selectedGistFile || !editor) {
      return;
    }
    editor.setValue(selectedGistFile.content);
  }
</script>

<!-- <main>
  <img alt="Wails logo" id="logo" src="{logo}">
  <div class="result" id="result">{resultText}</div>
  <div class="input-box" id="input">
    <input autocomplete="off" bind:value={name} class="input" id="name" type="text"/>
    <button class="btn" on:click={greet}>Greet</button>
  </div>
</main> -->

<div class="flex rounded-none">
  <div
    class="flex w-64 h-screen flex-col justify-between bg-lightDark text-light"
  >
    <div class="px-4 py-6">
      <!-- Refresh Button -->
      <button class="p-2 bg-dark rounded" on:click={getGists}>Refresh</button>

      <!-- Gist List -->
      <ul class="mt-2 space-y-1">
        {#each gists as gist}
          <li class="">
            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                class="truncate flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-dark"
              >
                <span class="text-md font-bold font-medium truncate"
                  >{Object.keys(gist.files)[0]}</span
                >

                <span
                  class="shrink-0 transition duration-300 group-open:-rotate-180"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <!-- Files -->
              <ul class="mt-2 space-y-1 px-4">
                {#each Object.entries(gist.files) as [filename, file]}
                  <li>
                    <a
                      href="#"
                      class="truncate text-left block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-dark"
                      on:click={() => selectGistFile(gist.id, filename)}
                    >
                      {filename}
                    </a>
                  </li>
                {/each}
              </ul>
            </details>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Sidebar footer -->
    {#if user}
      <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          <img
            alt=""
            src={user.avatar_url}
            class="size-10 rounded-full object-cover"
          />

          {#if user}
            <div>
              <p class="text-xs">
                <strong class="block text-base font-medium">{user.login}</strong
                >

                <!-- <span>{user}</span> -->
              </p>
            </div>
          {/if}
        </a>
      </div>
    {/if}
  </div>

  <!-- Right Side -->
  <div class="flex flex-col h-screen w-full">
    <!-- Editor Header -->
    {#if selectedGistFile}
      <div class="flex flex-col p-2">
        <span class="font-bold p-1">{selectedGistFile.filename}</span>

        <!-- Toolbar -->
        <Toolbar />
      </div>
    {/if}

    <!-- Editor -->
    <div class="text-base h-full w-full" id="editor"></div>
  </div>
</div>
