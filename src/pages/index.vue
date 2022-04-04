<template>
  <div class="flex items-center logo h-[120px] w-full">
    <!-- Logo -->

    <div>
      <div class="ml-6 mr-42">
        <h2 class="font-medium text-white">
          Smart Videohub <span class="text-slate-400 font-thin">20 X 20</span>
        </h2>
      </div>
    </div>

    <!-- button 1 -->

    <div class="flex mr-4">
      <div v-for="c in col1">
        <div class="flex justify-center" v-for="r in row">
          <button
            class="shadow-gray-900 bg-button w-9 my-2px mx-4px rounded-md border-gray-800 border-2 text-xs h-[30px]"
          >
            {{ c }}
          </button>
        </div>
      </div>
    </div>

    <!-- button 2 -->

    <div class="flex mr-8">
      <div v-for="c in col2">
        <div v-for="r in row">
          <button
            class="bg-button w-9 my-2px mx-4px rounded-md border-gray-800 border-2 text-xs h-[30px]"
          >
            {{ c }}
          </button>
        </div>
      </div>
    </div>

    <!-- preview -->
    <div class="mr-8">
      <img
        class="w-[95px] rounded-md"
        src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d"
        alt=""
      />
    </div>

    <!--  -->
    <div class="mr-8">
      <img
        class="w-[70px] h-[70px]"
        src="https://res.cloudinary.com/do58tgs2e/image/upload/v1649087440/Screenshot_2022-04-04_084228_ccexpress_fxfgyy.png"
        alt=""
      />
    </div>

    <div class="mr-2">
      <h2 class="text-slate-300">
        Blackmagic<span class="text-slate-400">design</span>
      </h2>
    </div>

    <div class="flex-col justify-center">
      <div class="border-amber-500 border-3 w-5 h-5 my-px rounded-md"></div>
      <div class="border-amber-500 border-3 w-5 h-5 my-px rounded-md"></div>
      <div class="border-amber-500 border-3 w-5 h-5 my-px rounded-md"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    for (let i; i < 22; i++) {
      i += 1;
    }
    return {
      row: 3,
      col1: 7,
      col2: 2,
    };
  },
};
</script>

<style>
.logo {
  background: linear-gradient(
    0deg,
    rgba(24, 45, 61, 1) 0%,
    rgba(39, 61, 77, 1) 32%,
    rgba(95, 104, 111, 1) 59%,
    rgba(202, 203, 203, 1) 97%
  );
}
.bg-button {
  background: radial-gradient(
    circle,
    rgba(101, 129, 153, 1) 24%,
    rgba(136, 143, 149, 1) 71%,
    rgba(202, 203, 203, 1) 100%
  );
}

.bg-button:hover {
  background: white;
  box-shadow: 1px -2px 143px 11px rgba(255, 255, 255, 0.77);
  -webkit-box-shadow: 1px -2px 143px 11px rgba(255, 255, 255, 0.77);
  -moz-box-shadow: 1px -2px 143px 11px rgba(255, 255, 255, 0.77);
}
</style>
