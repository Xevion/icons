# icons

The `react-icons` demo page is great, providing a fast search and a decent view into
each of the various icon providers it includes.

But it could be better.

This project intends to
- Use Next.js for an optimized React static-site generator
- Utilize Vercel for builds & fast hosting
- Use hooks to regenerate & update React-Icons to the latest version constantly
- Use OpenAI's GPT-3 to suggest keywords

## Builds

This project requires a complicated build flow in order to work perfectly.
- The latest React-Icons must be pulled at build time.
- The Cloudflare KV API & OpenAI APIs are contacted to acquire keyword suggestions for the various icons in the pack.
- All changes fetched from the APIs must be updated in Algolia.

## Filter by subset quickly

## Display Order
Currently, React Icons displays icons in a set ordered manner - each icon is filtered inside the set, and the sets render in the same order each time.
Not only does this seem inefficient and strange, but it doesn't offer any ability to order by keyword matching.

## Icon List 
The total icon list of all of these thousands of icons needs to be made available for searching at build time before we
begin a migration to build time export & Algolia.

## Element Flash & Animation
If possible, I'd like to animate the appearance, disappearance & shifting of the various Icons smoothly.
The major issue with React Icons currently is that searching creates a flash of content.

## Most Popular Icons Display

At build time, we can fetch the most popular used icons

## Icon Popularity Analytics

Icon popularity can be measured by searches & interactions through the Algolia API.
- When an icon is hovered over for more than ~1.5 seconds.
- When an icon is clicked (to copy), a strong interaction is measured.

## Pages

- `/` The index will show a list of all of the supported icon sets, the number of icons currently available, and an
icon or image display the logo of the given set. Hopefully, each of the sets has a logo of itself.
- `/[id]` Statically generated, each of the sets will have it's own page using just the identifier. They will be statically pulled from the icon manifests
and have another search bar, but it only searches just the given icon set. A button will be shown to move the search from the given
icon set to the global set.
- `/settings` Any settings I come up with will be on this page. This site is static and will

## Algolia Search

At build time, we'll generate a list of all the current icons and output it into a JSON file.
We'll then query