<script>
    export let title = "";
    export let msg = "";


</script>

<div role="alert" class="rounded border-s-4 border-red-500 bg-red-50 p-4">
    {#if title != ""}
    <strong class="text-left block font-medium text-red-800">{title}</strong>
    {/if}
    
    <!-- If title add mt-2 -->
    <p class="text-left text-sm text-red-700 mt-0">{msg}</p>
  </div>
  
