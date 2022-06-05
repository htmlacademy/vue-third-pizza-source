import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import { AppHeader } from "..";

describe("AppHeader", () => {
  it("renders properly", () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.text()).toContain(
      ["0 ₽", "Василий Ложкин", "Выйти"].join("")
    );
  });
});
