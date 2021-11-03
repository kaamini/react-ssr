/*
Required for the remoteEntry.js file of this micro frontend.  It allows for it's version of require js to load
bundles local to the remoteEntry file, despite the code being run within a consuming host application's context.
*/

(function(){
    var currentRemoteEntryPath = "http://localhost:3001/remoteEntry.js";
    var scriptElements = document.scripts
    var matchingScriptElement;

    for(var i = 0; i < scriptElements.length; i++)
    {
        if(scriptElements[i].src.indexOf(currentRemoteEntryPath) > -1)
        {
            matchingScriptElement = scriptElements[i];
            break;
        }
    }

    __webpack_public_path__ = matchingScriptElement.src + '/../';
})()