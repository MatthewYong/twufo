//Testing the volume button
describe("When volume icon is visible", function() {
    it("Should have show volume icon and have sound", function() {
        expect($("#volume")).not.toHaveClass("hide-button");
    });
});