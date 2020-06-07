import React, { useEffect } from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import useMounted from "./useMounted.js";

jest.useFakeTimers();

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

test("returns proper value after mount and unmount", () => {

    function TestComponent({ callback }) {
        const isMounted = useMounted();

        useEffect(() => {
            if (isMounted.current) {
                callback();

                setTimeout(() => {
                    if (isMounted.current) {
                        callback();
                    };
                }, 10000)
            }
        });

        return null;
    }

    const mockCallback = jest.fn();

    act(() => {
        render(<TestComponent callback={mockCallback} />, container);
    });

    expect(mockCallback.mock.calls.length).toBe(1);

    unmountComponentAtNode(container);
    container.remove()
    container = null;

    jest.advanceTimersByTime(11000);

    expect(mockCallback.mock.calls.length).toBe(1);
});

