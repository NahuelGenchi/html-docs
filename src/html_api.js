const elements = [
  {
    tag: "a",
    title: "<a>: The Anchor element",
    description: "The <a> HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address."
  },
  {
    tag: "abbr",
    title: "<abbr>: The Abbreviation element",
    description: "The <abbr> HTML element represents an abbreviation or acronym; the optional title attribute can provide an expansion or description for the abbreviation. If present, title must contain this full description and nothing else."
  },
  {
    tag: "address",
    title: "<address>: The Contact Address element",
    description: "The <address> HTML element indicates that the enclosed HTML provides contact information for a person or people, or for an organization."
  },
  {
    tag: "area",
    title: "<area>: The Image Map Area element",
    description: "The <area> HTML element defines an area inside an image map that has predefined clickable areas. An image map allows geometric areas on an image to be associated with hypertext link."
  },
  {
    tag: "article",
    title: "<article>: The Article Contents element",
    description: "The <article> HTML element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content."
  },
  {
    tag: "aside",
    title: "<aside>: The Aside element",
    description: "The <aside> HTML element represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes."
  },
  {
    tag: "audio",
    title: "<audio>: The Embed Audio element",
    description: "The <audio> HTML element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream."
  },
  {
    tag: "b",
    title: "<b>: The Bring Attention To element",
    description: "The <b> HTML element is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance. This was formerly known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use <b> for styling text; instead, you should use the CSS font-weight property to create boldface text, or the <strong> element to indicate that text is of special importance."
  },
  {
    tag: "base",
    title: "<base>: The Document Base URL element",
    description: "The <base> HTML element specifies the base URL to use for all relative URLs in a document. There can be only one <base> element in a document."
  },
  {
    tag: "bdi",
    title: "<bdi>: The Bidirectional Isolate element",
    description: "The <bdi> HTML element tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know the directionality of the text being inserted."
  },
  {
    tag: "bdo",
    title: "<bdo>: The Bidirectional Text Override element",
    description: "The <bdo> HTML element overrides the current directionality of text, so that the text within is rendered in a different direction."
  },
  {
    tag: "blockquote",
    title: "<blockquote>: The Block Quotation element",
    description: "The <blockquote> HTML element indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element."
  },
  {
    tag: "body",
    title: "<body>: The Document Body element",
    description: "The <body> HTML element represents the content of an HTML document. There can be only one <body> element in a document."
  },
  {
    tag: "br",
    title: "<br>: The Line Break element",
    description: "The <br> HTML element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant."
  },
  {
    tag: "button",
    title: "<button>: The Button element",
    description: "The <button> HTML element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it then performs a programmable action, such as submitting a form or opening a dialog."
  },
  {
    tag: "canvas",
    title: "<canvas>: The Graphics Canvas element",
    description: "Use the <canvas> with either the canvas scripting API or the WebGL API to draw graphics and animations."
  },
  {
    tag: "caption",
    title: "<caption>: The Table Caption element",
    description: "The <caption> HTML element specifies the caption (or title) of a table."
  },
  {
    tag: "cite",
    title: "<cite>: The Citation element",
    description: "The <cite> HTML element is used to describe a reference to a cited creative work, and must include the title of that work. The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata."
  },
  {
    tag: "code",
    title: "<code>: The Inline Code element",
    description: "The <code> HTML element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using the user agent's default monospace font."
  },
  {
    tag: "col",
    title: "<col>: The Table Column element",
    description: "The <col> HTML element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element."
  },
  {
    tag: "colgroup",
    title: "<colgroup>: The Table Column Group element",
    description: "The <colgroup> HTML element defines a group of columns within a table."
  },
  {
    tag: "data",
    title: "<data>: The Data element",
    description: "The <data> HTML element links a given piece of content with a machine-readable translation. If the content is time- or date-related, the <time> element must be used."
  },
  {
    tag: "datalist",
    title: "<datalist>: The HTML Data List element",
    description: "The <datalist> HTML element contains a set of <option> elements that represent the permissible or recommended options available to choose from within other controls."
  },
  {
    tag: "dd",
    title: "<dd>: The Description Details element",
    description: "The <dd> HTML element provides the description, definition, or value for the preceding term (<dt>) in a description list (<dl>)."
  },
  {
    tag: "del",
    title: "<del>: The Deleted Text element",
    description: "The <del> HTML element represents a range of text that has been deleted from a document. This can be used when rendering 'track changes' or source code diff information, for example. The <ins> element can be used for the opposite purpose: to indicate text that has been added to the document."
  },
  {
    tag: "details",
    title: "<details>: The Details disclosure element",
    description: "The <details> HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an 'open' state. A summary or label must be provided using the <summary> element."
  },
  {
    tag: "dfn",
    title: "<dfn>: The Definition element",
    description: "The <dfn> HTML element is used to indicate the term being defined within the context of a definition phrase or sentence. The <p> element, the <dt>/<dd> pairing, or the <section> element which is the nearest ancestor of the <dfn> is considered to be the definition of the term."
  },
  {
    tag: "dialog",
    title: "<dialog>: The Dialog element",
    description: "The <dialog> HTML element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow."
  },
  {
    tag: "div",
    title: "<div>: The Content Division element",
    description: "The <div> HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g. styling is directly applied to it, or some kind of layout model like Flexbox is applied to its parent element)."
  },
  {
    tag: "dl",
    title: "<dl>: The Description List element",
    description: "The <dl> HTML element represents a description list. The element encloses a list of groups of terms (specified using the <dt> element) and descriptions (provided by <dd> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs)."
  },
  {
    tag: "dt",
    title: "<dt>: The Description Term element",
    description: "The <dt> HTML element specifies a term in a description or definition list, and as such must be used inside a <dl> element. It is usually followed by a <dd> element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next <dd> element. The subsequent <dd> (Description Details) element provides the definition or other related text associated with the term specified using <dt>."
  },
  {
    tag: "em",
    title: "<em>: The Emphasis element",
    description: "The <em> HTML element marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis."
  },
  {
    tag: "embed",
    title: "<embed>: The Embed External Content element",
    description: "The <embed> HTML element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in."
  },
  {
    tag: "fieldset",
    title: "<fieldset>: The Field Set element",
    description: "The <fieldset> HTML element is used to group several controls as well as labels (<label>) within a web form"
  },
  {
    tag: "figcaption",
    title: "<figcaption>: The Figure Caption element",
    description: "The <figcaption> HTML element represents a caption or legend describing the rest of the contents of its parent <figure> element."
  },
  {
    tag: "figure",
    title: "<figure>: The Figure with Optional Caption element",
    description: "The <figure> HTML element represents self-contained content, potentially with an optional caption, which is specified using the <figcaption> element. The figure, its caption, and its contents are referenced as a single unit."
  },
  {
    tag: "footer",
    title: "<footer>",
    description: "The <footer> HTML element represents a footer for its nearest ancestor sectioning content or sectioning root element. A <footer> typically contains information about the author of the section, copyright data or links to related documents."
  },
  {
    tag: "form",
    title: "<form>: The Form element",
    description: "The <form> HTML element represents a document section containing interactive controls for submitting information."
  },
  {
    tag: "h1",
    title: "<h1>–<h6>: The HTML Section Heading elements",
    description: "The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest."
  },
  {
    tag: "h2",
    title: "<h1>–<h6>: The HTML Section Heading elements",
    description: "The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest."
  },
  {
    tag: "h3",
    title: "<h1>–<h6>: The HTML Section Heading elements",
    description: "The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest."
  },
  {
    tag: "h4",
    title: "<h1>–<h6>: The HTML Section Heading elements",
    description: "The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest."
  },
  {
    tag: "h5",
    title: "<h1>–<h6>: The HTML Section Heading elements",
    description: "The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest."
  },
  {
    tag: "h6",
    title: "<h1>–<h6>: The HTML Section Heading elements",
    description: "The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest."
  },
  {
    tag: "head",
    title: "<head>: The Document Metadata (Header) element",
    description: "The <head> HTML element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets."
  },
  {
    tag: "header",
    title: "<header>",
    description: "The <header> HTML element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements."
  },
  {
    tag: "hgroup",
    title: "<hgroup>",
    description: "The <hgroup> HTML element represents a multi-level heading for a section of a document. It groups a set of <h1>–<h6> elements."
  },
  {
    tag: "hr",
    title: "<hr>: The Thematic Break (Horizontal Rule) element",
    description: "The <hr> HTML element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section."
  },
  {
    tag: "html",
    title: "<html>: The HTML Document / Root element",
    description: "The <html> HTML element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element."
  },
  {
    tag: "i",
    title: "<i>: The Idiomatic Text element",
    description: "The <i> HTML element represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others. Historically, these have been presented using italicized type, which is the original source of the <i> naming of this element."
  },
  {
    tag: "igrame",
    title: "<iframe>: The Inline Frame element",
    description: "The <iframe> HTML element represents a nested browsing context, embedding another HTML page into the current one."
  },
  {
    tag: "img",
    title: "<img>: The Image Embed element",
    description: "The <img> HTML element embeds an image into the document."
  },
  {
    tag: "input",
    title: "<input>: The Input (Form Input) element",
    description: "The <input> HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The <input> element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes."
  },
  {
    tag: "input type='button'",
    title: "<input type='button'>",
    description: "<input> elements of type button are rendered as simple push buttons, which can be programmed to control custom functionality anywhere on a webpage as required when assigned an event handler function (typically for the click event)."
  }
];

const attributes = [
  {
    tag: "accept",
    isGlobal: false,
    elements: [
      "<form>",
      "<input>"
    ],
    description: "List of types the server accepts, typically a file type."
  },
  {
    tag: "accept-charset",
    isGlobal: false,
    elements: [
      "<form>"
    ],
    description: "List of supported charsets."
  },
  {
    tag: "accesskey",
    isGlobal: true,
    elements: [
      ""
    ],
    description: "The accesskey global attribute provides a hint for generating a keyboard shortcut for the current element. The attribute value must consist of a single printable character (which includes accented and other characters that can be generated by the keyboard)."
  },
  {
    tag: "action",
    isGlobal: false,
    elements: [
      "<form>"
    ],
    description: "The URI of a program that processes the information submitted via the form."
  },
  {
    tag: "align",
    isGlobal: false,
    elements: [
      "<applet>",
      "<caption>",
      "<col>",
      "<colgroup>",
      "<hr>",
      "<iframe>",
      "<img>",
      "<table>",
      "<tbody>",
      "<td>",
      "<tfoot>",
      "<th>",
      "<thead>",
      "<tr>"
    ],
    description: "Specifies the horizontal alignment of the element."
  },
  {
    tag: "allow",
    isGlobal: false,
    elements: [
      "<iframe>"
    ],
    description: "Specifies a feature-policy for the iframe."
  },
  {
    tag: "alt",
    isGlobal: false,
    elements: [
      "<applet>",
      "<area>",
      "<img>",
      "<input>"
    ],
    description: "Alternative text in case an image can't be displayed."
  },
  {
    tag: "async",
    isGlobal: false,
    elements: [
      "<script>"
    ],
    description: "Executes the script asynchronously."
  },
  {
    tag: "autocapitalize",
    isGlobal: true,
    elements: [
      ""
    ],
    description: "The autocapitalize global attribute is an enumerated attribute that controls whether and how text input is automatically capitalized as it is entered/edited by the user."
  },
  {
    tag: "autocomplete",
    isGlobal: false,
    elements: [
      "<form>",
      "<input>",
      "<select>",
      "<textarea>"
    ],
    description: "Indicates whether controls in this form can by default have their values automatically completed by the browser."
  },
  {
    tag: "autofocus",
    isGlobal: false,
    elements: [
      "<button>",
      "<input>",
      "<keygen>",
      "<select>",
      "<textarea>"
    ],
    description: "The element should be automatically focused after the page loaded."
  },
  {
    tag: "autofocus",
    isGlobal: true,
    elements: [
      ""
    ],
    description: "The autofocus global attribute is a Boolean attribute indicating that an element should be focused on page load, or when the <dialog> that it is part of is displayed."
  },
  {
    tag: "autoplay",
    isGlobal: false,
    elements: [
      "<audio>",
      "<video>"
    ],
    description: "The audio or video should play as soon as possible."
  },
  {
    tag: "background",
    isGlobal: false,
    elements: [
      "<body>",
      "<table>",
      "<td>",
      "<th>"
    ],
    description: "Specifies the URL of an image file."
  },
  {
    tag: "bgcolor",
    isGlobal: false,
    elements: [
      "<body>",
      "<col>",
      "<colgroup>",
      "<marquee>",
      "<table>",
      "<tbody>",
      "<tfoot>",
      "<td>",
      "<th>",
      "<tr>"
    ],
    description: "Background color of the element."
  },
  {
    tag: "border",
    isGlobal: false,
    elements: [
      "<img>",
      "<object>",
      "<table>"
    ],
    description: "The border width."
  },
  {
    tag: "buffered",
    isGlobal: false,
    elements: [
      "<audio>",
      "<video>"
    ],
    description: "Contains the time range of already buffered media."
  },
  {
    tag: "capture",
    isGlobal: false,
    elements: [
      "<input>"
    ],
    description: "From the Media Capture specification, specifies a new file can be captured."
  },
  {
    tag: "challenge",
    isGlobal: false,
    elements: [
      "<keygen>"
    ],
    description: "A challenge string that is submitted along with the public key."
  },
  {
    tag: "charset",
    isGlobal: false,
    elements: [
      "<meta>",
      "<script>"
    ],
    description: "Declares the character encoding of the page or script."
  },
  {
    tag: "checked",
    isGlobal: false,
    elements: [
      "<command>",
      "<input>"
    ],
    description: "Indicates whether the element should be checked on page load."
  },
  {
    tag: "cite",
    isGlobal: false,
    elements: [
      "<blockquote>",
      "<del>",
      "<ins>",
      "<q>"
    ],
    description: "Contains a URI which points to the source of the quote or change."
  }
]

export const htmlData = {
  icon: "logo-html5",
  title: "html",
  subItems: [
    {
      title: "elements",
      content: elements
    },
    {
      title: "attributes",
      content: attributes
    }
  ]
};