var md = new Remarkable('full', {
  html: false, // Enable HTML tags in source
  xhtmlOut: false, // Use '/' to close single tags (<br />)
  breaks: false, // Convert '\n' in paragraphs into <br>
  langPrefix: 'language-', // CSS language prefix for fenced blocks
  linkify: true, // autoconvert URL-like texts to links
  typographer: true, // Enable smartypants and other sweet transforms

  // Highlighter function. Should return escaped HTML,
  // or '' if input not changed
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      }
      catch (__) {}
    }

    try {
      return hljs.highlightAuto(str).value;
    }
    catch (__) {}

    return ''; // use external default escaping
  }
});

var purposeURL =
  "https://api.github.com/repos/Utah-Node-Ninjas/unn-content/contents/purpose.md"
$.get(purposeURL).fail(function(e) {
  console.log(e, null)
}).done(function(data) {
  var markdown = Base64.decode(data.content);
  var purposeContent = md.render(markdown);
  $('#purpose-content').html(purposeContent);

})

var presentationURL =
  "https://api.github.com/repos/Utah-Node-Ninjas/unn-content/contents/presentation-topics.md"
$.get(presentationURL).fail(function(e) {
  console.log(e, null)
}).done(function(data) {
  var markdown = Base64.decode(data.content);
  var presentationContent = md.render(markdown);
  $('#presentation-content').html(presentationContent);
})

var locationURL =
  "https://api.github.com/repos/Utah-Node-Ninjas/unn-content/contents/location.md"
$.get(locationURL).fail(function(e) {
  console.log(e, null)
}).done(function(data) {
  var markdown = Base64.decode(data.content);
  var locationContent = md.render(markdown);
  $('#location-content').html(locationContent);
})