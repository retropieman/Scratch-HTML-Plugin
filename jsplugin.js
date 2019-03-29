function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.lhtml = function(lhtmli) {
    var ltarget = document.getElementById("scratch");
    ltarget.innerHTML = lhtmli;

       
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', 'HTML %s', 'lhtml', '<p>Wow. Much hack. </p>'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Scratch HTML', descriptor, ext);
})({});
