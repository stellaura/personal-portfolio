<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the portfolio as one section-based page at `/`; anchor navigation matches the supplied single-page reference.
- Define reference colors and glass effects in `src/styles.css` as semantic tokens so the source design remains consistent across sections.
- Prebundle Radix Slot and its composed refs at startup with React to avoid late dependency optimization invalidating the preview's React dispatcher.
