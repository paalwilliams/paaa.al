<script lang="ts">
    import "/node_modules/reveal.js/dist/reveal.css"
    import "/node_modules/reveal.js/dist/theme/black.css"
    import Reveal from 'reveal.js'
    import Markdown from 'reveal.js/plugin/markdown/markdown';

    import {page} from '$app/stores';
    import {browser} from '$app/environment'
    import {onMount} from 'svelte'
    import type { PageServerData } from './$types';

    if(browser) {

        const deck = new Reveal({
            plugins: [Markdown],
            
        })
        
        deck.initialize();
    }

    export let data: PageServerData

    onMount(() => {
        console.log(data)
    })

</script>

<div>

    <section data-markdown>
        <textarea data-template>
          ## Slide 1
          A paragraph with some text and a [link](https://hakim.se).
          ---
          ## Slide 2
          ---
          ## Slide 3
        </textarea>
      </section>
</div>

