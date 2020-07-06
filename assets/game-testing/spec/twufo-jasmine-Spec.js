//Testing the volume button
describe("Volume button", function() {
    it("should change the icon and sound", function() {
        expect($("#volume")).toHaveClass("hide-button")
    });
});