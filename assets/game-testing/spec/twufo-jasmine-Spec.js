//Testing the volume button
describe("When volume button is clicked", function() {
    it("should hide volume, show mute button and mute sound", function() {
        setFixtures(
            '<div id="volume"></div>',
            '<div id="mute"></div>',
            '<div></div>');
        volumeOff();
        expect($("#volume")).toHaveClass("hide-button");
        expect($("#mute")).not.toHaveClass("hide-button");
        expect($("audio")).toHaveProp("muted");
    });
});



