
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>     _       __        _  ____        __     _         __  
    | |     / /____ _ (_)/ __/__  __ / /    (_)____   / /__
    | | /| / // __ \`// // /_ / / / // /    / // __ \\ / //_/
    | |/ |/ // /_/ // // __// /_/ // /___ / // / / // ,<   
    |__/|__/ \\__,_//_//_/   \\__,_//_____//_//_/ /_//_/|_|  </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
