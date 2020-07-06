//Testing the volume button
describe("When volume icon is clicked", function() {
    it("should turn off sound, hide the icon and how mute icon", function() {
        expect($("#volume")).toHaveClass("hide-button");
        expect($("#mute")).not.toHaveClass("hide-button");
        expect($("audio")).toHaveProp("muted");
    });


/*
    it("Should show volume icon", function() {
        expect($("#volume")).not.toHaveClass("hide-button");
    });
    it("Should hide the mute button", function() {
        expect($("#mute")).toHaveClass("hide-button");
    });
    it("Should have sound", function() {
        expect($("audio")).not.toHaveProp("muted");
    });  */
});




  /*  var spyEvent = spyOnEvent('#volume', 'click')
    $('#volume').click()

    it("Should hide the volume icon", function() {
        expect(spyEvent).toHaveBeenTriggered('.hide-button')
    });*/


  /*  //Testing the volume button
describe("When start button is clicked", function() {
    it("Should hide the button", function() {
        newGame();
        expect($("#start")).toHaveClass("hide-button");
    });
});*/