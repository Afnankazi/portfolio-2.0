# Afnan Kazi portfolio

Approved direction: retain the live Japanese temple and vermilion moon from Kage, and convert its content into Afnan's personal portfolio.

Audience: collaborators and employers evaluating development work. Success means visitors can identify Afnan's practice, inspect four real projects, reach their source repositories, and contact him.

Register: brand. Direction: cinematic night scene with editorial project documentation. The memorable element is Afnan's name rising through the garden in a live Three.js scene.

Palette commitment: restrained. Ink `oklch(13% .009 247)`, sage `oklch(92% .012 145)`, secondary text `oklch(78% .014 145)`, vermilion `oklch(61% .21 29)`. Existing renderer materials retain the authored palette. Red signals section boundaries and selected actions; it does not fill every surface.

Typography: local Onest, with Onest Semibold for the scene wordmark. Japanese is retained only as an atmospheric section marker. Large work titles and generous spacing carry hierarchy.

Motion lens: polish. Preserve the authored camera walk, name reveal, and leaves. Use quiet image scale and directional link feedback. Reduced motion disables ambient time progression and flattens entrance transitions. No additional animation libraries are necessary for the existing renderer.

Composition: scene-first opening; split about section; alternating project images and descriptions; a split experience timeline with a sticky introduction and dated role entries; ruled technical practice; large contact invitation. Project screenshots receive opaque dark frames for readability. The garden must not cover project text.

Transitions: keep About and Selected Work close together; do not repeat the technical-practice categories below About. Section scrims stay within their own bounds so adjacent dark overlays cannot accumulate. Reveal content just before it enters the viewport, avoiding empty screens while scrolling.

Toolkit: nine large technology tiles, including Python. Use crisp local Devicon SVGs, preserving their brand colors and adapting monochrome marks for the dark surface. Stagger the entrance, then use pointer-driven tilt and slight logo parallax; no continuous spinning or floating. Touch layouts use two columns, and reduced-motion preferences remove the transforms.

Content source: supplied `app/assets` images and the earlier portfolio's local `src/utils/index.js`, `About.jsx`, `Experience.jsx`, and `Contact.jsx`. Experience roles, dates, responsibilities, and performance figures come from `Experience.jsx`. The VESITRail application-flow screenshot comes from that portfolio's `public/vesit/image.png`. No invented employment, years of experience, awards, customer counts, or live deployment links.

Constraints: existing Next.js host and full-document renderer; 320px to 1920px; hidden scrollbar with native scrolling; keyboard navigation and native project dialogs; local images and fonts; retain the original Kage document as a separate reference.
