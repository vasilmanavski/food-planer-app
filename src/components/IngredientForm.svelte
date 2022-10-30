<script>
  import { ingredient } from '../store';
</script>

<form style="width: 50%; margin: 2% auto 0;">
  <div class="grid gap-6 ">
    <div>
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enter ingredient</label>
      <input bind:value={$ingredient} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingredient" required>
    </div>
  </div>
</form>