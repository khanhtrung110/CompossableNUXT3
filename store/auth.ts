import { defineStore } from "pinia";

export const useHeader = defineStore("headerText", {
  state: () => ({
    title: "Title",
  }),
  actions: {
    changeTitleHeader(headerText: string) {
      this.title = headerText;
    },
  },
});
