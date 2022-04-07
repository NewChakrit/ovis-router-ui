<template>
  <div class="flex items-center logo h-[120px] w-full">
    <!-- Logo -->

    <div>
      <div class="ml-6 mx-42">
        <h2 class="font-medium text-white">
          Smart Videohub <span class="text-slate-400 font-thin">20 X 20</span>
        </h2>
      </div>
    </div>

    <!-- button 1 -->

    <div
      class="h-full flex flex-col justify-center flex-wrap w-[340px] shrink mr-[20px]"
    >
      <div
        class="flex justify-center"
        v-for="item in config.inputLadels"
        :key="item"
      >
        <button
          :class="{ 'bg-red-900': `${item - 1}` === activeNum }"
          class="shadow-gray-900 bg-button w-9 my-2px mx-4px rounded-md border-gray-500 border-1 text-[10px] h-[30px]"
          @click="onButtonClick(item.id)"
        >
          {{ item.id }}
        </button>
      </div>
    </div>

    <!-- button 2 -->

    <div
      class="flex mr-8 flex-col flex-wrap shrink h-full w-[100px] items-center justify-center"
    >
      <button
        v-for="item in modeList"
        class="w-9 my-2px mx-4px rounded-md border-gray-500 border-1 text-[10px] h-[30px]"
        :class="{ 'bg-amber-300': item.id === mode }"
        @click="onModeClick(item.id)"
        :key="item"
      >
        {{ item.text }}
      </button>
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
        Whitemagic<span class="text-slate-400">design</span>
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
    return {
      modeList: [
        { id: "src", text: "SRC" },
        { id: "dst", text: "DEST" },
        { id: "cle", text: "CLR" },
        { id: "menu", text: "MENU" },
        { id: "video", text: "VIDEO" },
        { id: "take", text: "TAKE" },
      ],

      config: {
        inputLadels: [
          { 0: "Input 1", id: "1" },
          { 1: "Input 2", id: "2" },
          { 2: "Input 3", id: "3" },
          { 3: "Input 4", id: "4" },
          { 4: "Input 5", id: "5" },
          { 5: "Input 6", id: "6" },
          { 6: "Input 7", id: "7" },
          { 7: "Input 8", id: "8" },
          { 8: "Input 9", id: "9" },
          { 9: "Input 10", id: "10" },
          { 10: "Input 11", id: "11" },
          { 11: "Input 12", id: "12" },
          { 12: "Input 13", id: "13" },
          { 13: "Input 14", id: "14" },
          { 14: "Input 15", id: "15" },
          { 15: "Input 16", id: "16" },
          { 16: "Input 17", id: "17" },
          { 17: "Input 18", id: "18" },
          { 18: "Input 19", id: "19" },
          { 19: "Input 20", id: "20" },
          {},
        ],
        outputLadels: {
          0: "Output 1",
          1: "Output 2",
          2: "Output 3",
          3: "Output 4",
          4: "Output 5",
          5: "Output 6",
          6: "Output 7",
          7: "Output 8",
          8: "Output 9",
          9: "Output 10",
          10: "Output 11",
          11: "Output 12",
          12: "Output 13",
          13: "Output 14",
          14: "Output 15",
          15: "Output 16",
          16: "Output 17",
          17: "Output 18",
          18: "Output 19",
          19: "Output 20",
        },
        videoOutputRouting: {
          0: "0",
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7",
          8: "8",
          9: "9",
          10: "10",
          11: "11",
          12: "12",
          13: "13",
          14: "14",
          15: "15",
          16: "16",
          17: "17",
          18: "18",
          19: "19",
        },
      },

      mode: "",

      dst: "0",

      src: "0",
    };
  },
  methods: {
    //
    onButtonClick() {},
    onModeClick(id) {
      if (id === "src") {
        if (this.mode !== "src") {
          this.mode = "src";
        } else {
          this.mode = "";
        }
      } else if (id === "dst") {
        if (this.mode !== "dst") {
          this.mode = "dst";
        } else {
          this.mode = "";
        }
      } else {
        this.mode = "";
      }
    },
  },
  computed: {
    activeNum() {
      if (this.mode === "dst") {
        return this.dst;
      } else if (this.mode === "src") {
        return this.config.videoOutputRouting[this.dst];
      } else {
        return "";
      }
    },
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
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(255, 255, 255, 1) 71%,
    rgba(171, 186, 206, 1) 100%,
    rgba(146, 161, 176, 1) 100%
  );
  box-shadow: 1px -2px 143px 11px rgba(255, 255, 255, 0.77);
  -webkit-box-shadow: 1px -2px 143px 11px rgba(255, 255, 255, 0.77);
  -moz-box-shadow: 1px -2px 143px 11px rgba(255, 255, 255, 0.77);
}
</style>

// onClickBtn // เช็ค this.dst ก่อน ถ้าไม่ใช่ไม่ต้องทำอะไร // เช็ค this.src
