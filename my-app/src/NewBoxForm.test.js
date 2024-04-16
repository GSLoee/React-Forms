import React from "react";
import {render, fireEvent} from '@testing-library/react'
import NewBoxForm from "./NewBoxForm";

it("render the form", function() {
    render(<NewBoxForm />)
})

it('matches the snapshot', function(){
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot()
})