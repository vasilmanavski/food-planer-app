<script>
  import MainBody from './components/MainBody.svelte';

  const apiURL = "https://api.edamam.com/api/recipes/v2?type=public";
  const apiKey = "4cdaa1065747c8199fb12f63cba9224f";
  const apiId = "1b75121c";

  const ingr = 'rice chicken carrot';

  async function getIngredients () {
    const res = await fetch(`${apiURL}&app_id=${apiId}&app_key=${apiKey}&q=${ingr}`, {
      method: 'GET',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const json = await res.json()
    console.log(JSON.stringify(json))
  }
</script>

<div class="text-blue-700">Hello {name}</div>
<MainBody/>