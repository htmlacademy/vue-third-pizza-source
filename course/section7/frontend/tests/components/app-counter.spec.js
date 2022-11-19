import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import AppCounter from "@/common/components/AppCounter.vue";

describe("Test app counter", () => {
  it("Should emit input event", async () => {
    const wrapper = mount(AppCounter, {
      props: {
        value: 1,
        max: 2,
      },
    });

    wrapper.get(".counter__button--plus").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().input[0]).toEqual([2]);
  });

  it("Should not emit input event", async () => {
    const wrapper = mount(AppCounter, {
      props: {
        value: 2,
        max: 2,
      },
    });

    wrapper.get(".counter__button--plus").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().input).toBeFalsy();
  });
});
