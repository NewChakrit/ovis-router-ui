<template>
  <div class="row">
    <h1>{{ row }},{{ col }}</h1>
    <div>Row = <input type="number" v-model.lazy.number="row" min="10" max="10" /></div>
    <div>Col = <input type="number" v-model.lazy.number="col" /></div>

    <div>
      <div>Logo</div>
    </div>
    <div class="flex" v-for="c in col">
      <div v-for="r in row">
        <button>{{ (c - 1) * row + r }}</button>
      </div>
    </div>
    <button>button2</button>
    <div>preview</div>
    <div>controls</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      row: 3,
      col: 7,
    };
  },
};
</script>
