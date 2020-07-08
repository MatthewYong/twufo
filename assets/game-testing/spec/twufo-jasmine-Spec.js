//Testing the volume button
describe("When volume button is clicked", function() {
    it("should hide volume, show mute button and mute sound", function() {
        setFixtures(`
            <div id="volume"></div>
            <div id="mute"></div>);            
            <audio></audio>`);
        volumeOff();
        expect($("#volume")).toHaveClass("hide-button");
        expect($("#mute")).not.toHaveClass("hide-button");
        expect($("audio")).toHaveProp("muted", true);
    });
});

//Testing the mute button
describe("When mute button is clicked", function() {
    it("should hide mute, show volume button and add sound", function() {
        setFixtures(`
            <div id="volume"></div>
            <div id="mute"></div>);            
            <audio></audio>`);
        volumeOn();
        expect($("#volume")).not.toHaveClass("hide-button");
        expect($("#mute")).toHaveClass("hide-button");
        expect($("audio")).toHaveProp("muted", false);
    });
});



