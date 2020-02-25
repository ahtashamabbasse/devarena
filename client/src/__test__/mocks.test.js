function sum(x, y) {

    return x + y
}


describe("Mock Tests", () => {


    test("2 + 3 should return 5", () => {
        const sum = jest.fn((x, y) => x + y)
        expect(sum(2, 3)).toBe(5)
        expect(sum).toHaveBeenCalled()
        expect(sum).toHaveBeenCalledTimes(1)
        expect(sum).toHaveBeenCalledWith(2, 3)
    })


});