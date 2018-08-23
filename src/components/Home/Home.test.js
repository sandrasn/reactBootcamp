import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Home from "./index";

describe("home", () => {
  const props = {
    validateToken: jest.fn(),
    loginReducer: {
      isLogged: true
    }
  };
  const wrapper = shallow(<Home {...props} />);

  it("renders properly", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("Changes state after calling handleOpenModal", () => {
    expect(wrapper.state().isModalOpen).toEqual(false);
    wrapper.instance().handleOpenModal();
    expect(wrapper.state().isModalOpen).toEqual(true);
  });

  it("Changes state after calling handleCloseModal", () => {
    expect(wrapper.state().isModalOpen).toEqual(true);
    wrapper.instance().handleCloseModal();
    expect(wrapper.state().isModalOpen).toEqual(false);
  });
});
