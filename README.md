# React Simple Data Fetching Lab

## Learning Goals

- Use the `useEffect` hook to fetch data from an API and set state

## Deliverables

This lab includes the `App` component that `index.js` is looking for. The `App` component:

- Uses the `useEffect` hook to send a `fetch` request to
  `https://dog.ceo/api/breeds/image/random`, a free API that returns a random
  image of a dog.
- Displays a `<p>` tag with the text of "Loading..." when the component is first
  rendered.
- After receiving a response from the API, shows the dog image in an `<img>` tag,
  with the `alt` attribute set to "A Random Dog".

## Resources

- [React `fetch` with `useEffect` Example][react ajax]

[react ajax]: https://reactjs.org/docs/faq-ajax.html#example-using-ajax-results-to-set-local-state
