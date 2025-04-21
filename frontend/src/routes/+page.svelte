<script lang="ts">
    export let data: {
      serverStatus: {
        message: string;
        status?: string;
        error?: boolean;
      };
    };
  </script>

<h1>Welcome to SvelteKit</h1>

<p>Backend status: {data.serverStatus.message}</p>