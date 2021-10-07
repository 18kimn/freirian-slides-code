import './style.css'
import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm'
import Highlight from 'reveal.js/plugin/highlight/highlight.esm'

let deck = new Reveal({
  plugins: [Markdown, Highlight],
})

deck.initialize({center: false})
