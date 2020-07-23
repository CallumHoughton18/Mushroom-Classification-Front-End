const mockObserve = jest.fn();

const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
    observe: mockObserve,
    unobserve: jest.fn(),
    disconnect: jest.fn()
});
