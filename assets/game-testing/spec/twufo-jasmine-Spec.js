//Testing the volume button
describe("When volume button is clicked", function() {
    beforeEach(function() {
        setFixtures(`
            <div id="volume"></div>
            <div id="mute"></div>);            
            <audio></audio>`);
    });
    
    it("should hide volume, show mute button and mute sound", function() {
        volumeOff();
        expect($("#volume")).toHaveClass("hide-button");
        expect($("#mute")).not.toHaveClass("hide-button");
        expect($("audio")).toHaveProp("muted", true);
    });
});

//Testing the mute button
describe("When mute button is clicked", function() {
    beforeEach(function() {
        setFixtures(`
            <div id="volume"></div>
            <div id="mute"></div>);            
            <audio></audio>`);
    });    

    it("should hide mute, show volume button and add sound", function() {
        volumeOn();
        expect($("#volume")).not.toHaveClass("hide-button");
        expect($("#mute")).toHaveClass("hide-button");
        expect($("audio")).toHaveProp("muted", false);
    });
});

//Testing the start button
describe("When start button is clicked", function() {
    beforeEach(function() {
        setFixtures(`
            <div id="start"></div>`);
    });    

    it("should hide start button and reset all values", function() {
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
    beforeEach(function() {
        setFixtures(`
            <div id="continue"></div>`);
    });

    it("should hide continue button and reset values", function() {
        cont();
        expect($('#continue')).toHaveClass("hide-button");
        expect($('#continue')).toHaveProp("click", off);
        expect(game.playerSequence.length).toEqual(0);
        expect(game.runningSequence.length).toEqual(0);               
    });
});

//Testing the retry button
describe("When retry button is clicked", function() {
    beforeEach(function() {
        setFixtures(`
            <div id="retry"></div>);
            <div id="start"></div>);
            <div id="level"></div>`);            
    });

    it("should hide continue button and reset values", function() {
        retry();
        expect($('#retry')).toHaveClass("hide-button");
        expect($('#start')).not.toHaveClass("hide-button");  
        expect($('#level')).toContainText("Level 0");                     
    });
});