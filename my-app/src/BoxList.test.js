import React from "react";
import BoxList from "./BoxList";
import {render, fireEvent} from '@testing-library/react'


it("render the form", function() {
    render(<BoxList />)
})

it('matches the snapshot', function(){
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot()
})

it('adds a box', function(){
    const boxList = render(<BoxList />)

    addBox(boxList)
})