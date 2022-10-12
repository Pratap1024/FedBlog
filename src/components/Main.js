import React from "react";
import Sidebar from "./Sidebar";
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';

const Main = () => {
    return (

    <div>

  <div className="article">
     <table className="tab">
      <h1><u>Inline style sheets</u></h1>
      <tr><h2 align="left">Introduction:</h2></tr>
      <tr><li>Inline styles of DOM elements are often placed in the <b>style="property:value"</b> 
          attribute of the target element.</li>
          <li>But in React, things are quite different when it comes to styling inline.</li></tr>
      <tr><h2 align="left">Styling Components in React</h2>
      <li>the regular way of styling React components using the <b>className</b> attribute coupled with an external stylesheet as follows:</li></tr><br/>
      <tr><img src={image1} alt="image1"/></tr>
      <h2 align="left">Inline Styles</h2>
      <tr><li>To use inline styles in React, use the <b>style</b> attribute, which accepts a Javascript object 
          with camelCased properties. Example:</li><br/>
          <img src={image2} alt="image2"/>
         <p align="left">Notice that the value of padding does not have a unit as React appends a 'px' suffix to some numeric inline style properties. 
            In cases where you need to use other units, such as <b>'em' or 'rem',</b> specify the unit with the value explicitly as a string. 
            Applying that to the padding property should result in padding: '1.5em'. 
            In addition, these styles are not vendor-prefixed automatically, so you have to add vendor prefixes manually.</p>
          </tr>  
          <tr><h2 align="left">Improving Readability</h2></tr>
          <tr><p align="left">The readability of MyComponent reduces dramatically if styles become a lot and everything gets clunky. 
              Since styles are mere objects, they can be extracted out of the component as shown below.</p>
              <img src={image3} alt="image3"/>
              </tr>

          <tr><h2 align="left">Building a Card Component</h2></tr>
          <tr><p>Let's build the user card component.</p>
          <img src={image4} alt="image3" width="100%"/>
          </tr>

          <tr><h2 align="left">Rule of Thumb</h2>
          <p> Inline styling as a primary means of styling projects and recommends the use of the <b>className</b> attribute instead.</p>
          <p><b>Note:</b>using the <b>style</b> attribute as the primary means of styling elements is generally not recommended. 
            In most cases, <b>className</b> should be used to reference classes defined in an external CSS stylesheet. 
            style is most often used in React apps to add dynamically computed styles at render time.</p>
          </tr>
          <tr><h2 align="left">Conclusion</h2>
          <p>This is about "Inline styling in React..."</p>
          </tr>



      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
     </table>


   </div>
    <Sidebar />
    </div>
    )
};

export default Main;