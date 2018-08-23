import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import PostCard, { sum } from "./index";

describe("testing PostCard", () => {
  const wrapper = shallow(<PostCard />);

  it("sums two numbers", () => {
    expect(sum(3, 5)).toEqual(8);
  });

  it("renders properly", () => {
    expect(wrapper.length).toEqual(1);
  }); //it === test

  it("renders a snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
