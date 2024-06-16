import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import helloworld from "../Components/helloworld.vue";

describe("helloworld", () => {
	it("component renders Hello world properly", () => {
		const wrapper = mount(helloworld);
		expect(wrapper.text()).toContain("Hello world");
	});
});
