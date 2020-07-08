//Testing the volume button
describe("When volume is clicked", function() {
    it("should hide the button", function() {
        setFixtures('<div id="volume"></div>');
        volume();
        expect($("#volume")).toHaveClass("hide-button");
    });
});



