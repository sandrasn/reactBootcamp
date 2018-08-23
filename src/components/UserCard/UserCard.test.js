import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import UserCard from "./index";

describe("Testing UserCard", () => {
  const wrapper = shallow(<UserCard />);

  it("renders properly", () => {
    expect(wrapper.length).toEqual(1);
  }); //it === test

  it("renders a snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
