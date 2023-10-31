import React from "react";
import image2 from '../images/image-2.PNG';
function SecondSection() {
  return (
  <div className="container">
  <div className="section-banner-wrapper">
  <div className="section-banner-left-wrapper">
<h3>Time to get Productive</h3>
<p>React approaches changes with care. Every React commit is tested on business-critical surfaces with over a billion users.</p>
</div>
<div className="section-banner-right-wrapper">
<img src={image2} alt="Image" />


</div>
  </div>
  </div>
  );
}
export default SecondSection;