var paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
                ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
                dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
                ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
                diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \
                hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

console.log(paragraph);
console.log(paragraph);

// blank chars after the 5th line in the paragraph cause an err;
// also, leading blank chars are interpreted as part of the text

// from the solution,
// "The purpose of the backslash is to escape the newline character at the end of the line.
// However, the extra whitespace prevents this from happening, causing a SyntaxError to be raised."
