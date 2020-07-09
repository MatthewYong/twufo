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

//Testing the start button
describe("When start button is clicked", function() {
    it("should hide start button and reset all values", function() {
        setFixtures(`
            <div id="start"></div>`);
        newGame();
        expect($("#start")).toHaveClass("hide-button");
        expect(game.computerSequence.length).toEqual(0);
        expect(game.playerSequence.length).toEqual(0);
        expect(game.runningSequence.length).toEqual(0);
        expect(game.level).toEqual(1);
    });
});



//Testing the continue button
describe("When continue button is clicked", function() {
    it("should hide continue button and continue game", function() {
            setFixtures(`<div id="continue"></div>`);
            cont();
            expect($('#continue')).toHaveClass("hide-button");   
    });
});

