# Afnan Kazi portfolio

Approved direction: retain the live Japanese temple and vermilion moon from Kage, and convert its content into Afnan's personal portfolio.

Audience: collaborators and employers evaluating development work. Success means visitors can identify Afnan's practice, inspect four real projects, reach their source repositories, and contact him.

Register: brand. Direction: cinematic night scene with editorial project documentation. The memorable element is Afnan's name rising through the garden in a live Three.js scene.

Palette commitment: restrained. Ink `oklch(13% .009 247)`, sage `oklch(92% .012 145)`, secondary text `oklch(78% .014 145)`, vermilion `oklch(61% .21 29)`. Existing renderer materials retain the authored palette. Red signals section boundaries and selected actions; it does not fill every surface.

Typography: local Onest, with Onest Semibold for the scene wordmark. Japanese is retained only as an atmospheric section marker. Large work titles and generous spacing carry hierarchy.

Motion lens: polish. Preserve the authored camera walk, name reveal, and leaves. Use quiet image scale and directional link feedback. Reduced motion disables ambient time progression and flattens entrance transitions. No additional animation libraries are necessary for the existing renderer.

Composition: scene-first opening; split about section; alternating project images and descriptions; a split experience timeline with a sticky introduction and dated role entries; an achievements mosaic using the original temple stills, followed by hackathon results and speaking records; the technology toolkit; large contact invitation. Project screenshots receive opaque dark frames for readability. The garden must not cover project text.

Achievements source: the user's supplied CEO role at ISTE VESIT, LaunchPad, AfterMath, Genesis, and Enigma results, 10+ national hackathon finalist appearances, and two speaking/mentoring records. Genesis is labelled 2nd Runner-up with 150+ teams; its conflicting "1st place" wording is omitted. Scenic panels use local `kage-approach.webp`, `kage-lantern-court.webp`, `kage-moonwater.webp`, and `sakura-branch.webp` from the original Kage asset bundle, as requested in the visual reference. These are atmosphere, not event photographs.

Transitions: keep About and Selected Work close together; do not repeat the technical-practice categories below About. Section scrims stay within their own bounds so adjacent dark overlays cannot accumulate. Reveal content just before it enters the viewport, avoiding empty screens while scrolling.

Toolkit: twelve large technology tiles, including Python, PostgreSQL, MongoDB, and n8n. Use crisp local Devicon SVGs, preserving their brand colors and adapting monochrome marks for the dark surface. Stagger the entrance, then use pointer-driven tilt and slight logo parallax; no continuous spinning or floating. Touch layouts use two columns, and reduced-motion preferences remove the transforms.

Content source: supplied `app/assets` images and the earlier portfolio's local `src/utils/index.js`, `About.jsx`, `Experience.jsx`, and `Contact.jsx`. Experience roles, dates, responsibilities, and performance figures come from `Experience.jsx`. The VESITRail application-flow screenshot comes from that portfolio's `public/vesit/image.png`. No invented employment, years of experience, awards, customer counts, or live deployment links.

Constraints: existing Next.js host and full-document renderer; 320px to 1920px; hidden scrollbar with native scrolling; keyboard navigation and native project dialogs; local images and fonts; retain the original Kage document as a separate reference.

Sound: the user-supplied rain soundtrack loops quietly at 18% volume after an initial user interaction. A fixed, keyboard-accessible Sound on/off button exposes playback state and saves the user's choice. Pause music in background tabs. Place the control above the hero footer and reserve space below the final footer so it does not obscure either.
