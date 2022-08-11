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
    tag: 'input type="button"',
    title: "<input type='button'>",
    description: "<input> elements of type button are rendered as simple push buttons, which can be programmed to control custom functionality anywhere on a webpage as required when assigned an event handler function (typically for the click event)."
  },
  {
    tag: 'input type="checkbox"',
    title: "<input type='checkbox'>",
    description: "<input> elements of type checkbox are rendered by default as boxes that are checked (ticked) when activated, like you might see in an official government paper form. The exact appearance depends upon the operating system configuration under which the browser is running. Generally this is a square but it may have rounded corners. A checkbox allows you to select single values for submission in a form (or not)."
  },
  {
    tag: 'input type="color"',
    title: "<input type='color'>",
    description: "<input> elements of type color provide a user interface element that lets a user specify a color, either by using a visual color picker interface or by entering the color into a text field in #rrggbb hexadecimal format. Only simple colors (without alpha channel) are allowed though CSS colors has more formats, e.g. color names, functional notations and a hexadecimal format with an alpha channel. The element's presentation may vary substantially from one browser and/or platform to another—it might be a simple textual input that automatically validates to ensure that the color information is entered in the proper format, or a platform-standard color picker, or some kind of custom color picker window."
  },
  {
    tag: 'input type="date"',
    title: "<input type='date'>",
    description: "<input> elements of type='date' create input fields that let the user enter a date, either with a textbox that validates the input or a special date picker interface. The resulting value includes the year, month, and day, but not the time. The time and datetime-local input types support time and date+time input."
  },
  {
    tag: 'input type="datetime-local"',
    title: "<input type='datetime-local'>",
    description: "<input> elements of type datetime-local create input controls that let the user easily enter both a date and a time, including the year, month, and day as well as the time in hours and minutes."
  },
  {
    tag: 'input type="email"',
    title: "<input type='email'>",
    description: "<input> elements of type email are used to let the user enter and edit an e-mail address, or, if the multiple attribute is specified, a list of e-mail addresses."
  },
  {
    tag: 'input type="file"',
    title: "<input type='file'>",
    description: '<input> elements with type="file" let the user choose one or more files from their device storage. Once chosen, the files can be uploaded to a server using form submission, or manipulated using JavaScript code and the File API.'
  },
  {
    tag: 'input type="hidden"',
    title: '<input type="hidden">',
    description: "<input> elements of type hidden let web developers include data that cannot be seen or modified by users when a form is submitted. For example, the ID of the content that is currently being ordered or edited, or a unique security token. Hidden inputs are completely invisible in the rendered page, and there is no way to make it visible in the page's content."
  },
  {
    tag: 'input type="image"',
    title: '<input type="image">',
    description: "<input> elements of type image are used to create graphical submit buttons, i.e. submit buttons that take the form of an image rather than text."
  },
  {
    tag: 'input type="month"',
    title: '<input type="month">',
    description: '<input> elements of type month create input fields that let the user enter a month and year allowing a month and year to be easily entered. The value is a string whose value is in the format "YYYY-MM", where YYYY is the four-digit year and MM is the month number.'
  },
  {
    tag: 'input type="number"',
    title: '<input type="number">',
    description: "<input> elements of type number are used to let the user enter a number. They include built-in validation to reject non-numerical entries. The browser may opt to provide stepper arrows to let the user increase and decrease the value using their mouse or by tapping with a fingertip."
  },
  {
    tag: 'input type="password"',
    title: '<input type="password">',
    description: '<input> elements of type password provide a way for the user to securely enter a password. The element is presented as a one-line plain text editor control in which the text is obscured so that it cannot be read, usually by replacing each character with a symbol such as the asterisk ("*") or a dot ("•"). This character will vary depending on the user agent and operating system.'
  },
  {
    tag: 'input type="radio"',
    title: '<input type="radio">',
    description: '<input> elements of type radio are generally used in radio groups—collections of radio buttons describing a set of related options. Only one radio button in a given group can be selected at the same time. Radio buttons are typically rendered as small circles, which are filled or highlighted when selected.'
  },
  {
    tag: 'input type="range"',
    title: '<input type="range">',
    description: "<input> elements of type range let the user specify a numeric value which must be no less than a given value, and no more than another given value. The precise value, however, is not considered important. This is typically represented using a slider or dial control rather than a text entry box like the number input type. Because this kind of widget is imprecise, it should only be used if the control's exact value isn't important."
  },
  {
    tag: 'input type="reset"',
    title: '<input type="reset">',
    description: "<input> elements of type reset are rendered as buttons, with a default click event handler that resets all of the inputs in the form to their initial values."
  },
  {
    tag: 'input type="search"',
    title: '<input type="search">',
    description: "<input> elements of type search are text fields designed for the user to enter search queries into. These are functionally identical to text inputs, but may be styled differently by the user agent."
  },
  {
    tag: 'input type="submit"',
    title: '<input type="submit">',
    description: "<input> elements of type submit are rendered as buttons. When the click event occurs (typically because the user clicked the button), the user agent attempts to submit the form to the server."
  },
  {
    tag: 'input type="tel"',
    title: '<input type="tel">',
    description: '<input> elements of type tel are used to let the user enter and edit a telephone number. Unlike <input type="email"> and <input type="url"> , the input value is not automatically validated to a particular format before the form can be submitted, because formats for telephone numbers vary so much around the world.'
  },
  {
    tag: 'input type="text"',
    title: '<input type="text">',
    description: "<input> elements of type text create basic single-line text fields."
  },
  {
    tag: 'input type="time"',
    title: '<input type="time">',
    description: "<input> elements of type time create input fields designed to let the user easily enter a time (hours and minutes, and optionally seconds). The control's user interface varies from browser to browser; see Browser compatibility for further details. In unsupported browsers, the control degrades gracefully to <input type='text'>."
  },
  {
    tag: 'input type="url"',
    title: '<input type="url">',
    description: "<input> elements of type url are used to let the user enter and edit a URL."
  },
  {
    tag: 'input type="week"',
    title: '<input type="week">',
    description: "<input> elements of type week create input fields allowing easy entry of a year plus the ISO 8601 week number during that year (i.e., week 1 to 52 or 53)."
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