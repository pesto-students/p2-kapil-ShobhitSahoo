What is the main functionality of browser?
A browser mainly allows user to search and display the desired information in such a way that any user is able to access and understand the information. A browser's primary function is to render the HTML code and make it human readable content.

High Level components of browser
The UI
It basically consists of the address bar, bookmark menu, reload, forward & backward options.
The Browser Engine
It's basically like the bridge between UI and rendering engine. According to the inputs, it requests data and manipulates the rendering engine.
The Rendering Engine
As the name suggests, it's responsible for rendering the requested the web page. It interprets the data and generates the layout which is displayed in the UI.
Networking
Requesting and responding to the query is done via common internet protocols such as TCP, IP, HTTP etc. Here all the security aspects of the page are also handled.
JavaScript Interpreter
It's responsible for interpreting the JavaScript code and executing the commands. It's mainly responsible for handling the DOM manipulation and for handling the events. 
UI Backend
It's responsible generating and building the UI for the end user.
Data Storage
It's responsible for storing the data in the browser. It's also responsible for handling the cookies, handling the local storage, handling the session storage etc. 

Parsers and it's uses
Parsers are used to parse the HTML code and generate the DOM tree. The HTML parser is used to parse the HTML code and build the DOM tree. Then the CSS parser is implemented as a package of JAVA class, that inputs the CSS source code and build another DOM tree called CSSOM. These both trees are then passed to the rendering engine. 

Script Processors


Tree Construction
The DOM captures the structure of the HTML document and the CSSOM captures the styles of the CSS document. Both these trees are combined into a render tree. This is then used to compute the layout of each visible element in the UI.

Order of script processing


Layout and Painting
The layout and painting is done by the rendering engine. The rendering engine is responsible for generating the layout and painting the elements. Browser layouts the elements by positioning each element on the screen from the DOM. The rendering engine also paints the elements pixel by pixel on the screen to get the visual representation. 