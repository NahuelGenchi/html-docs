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
  }
];

const attributes = [
  {
    tag: "accept",
    elements: [
      "<form>",
      "<input>"
    ],
    description: "List of types the server accepts, typically a file type."
  }
]

export const htmlData = {
  icon: "logo-html5",
  title: "html",
  subItems: [
    {
      title: "elements",
      content: elements
    }
  ]
};