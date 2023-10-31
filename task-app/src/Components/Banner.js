import React from "react";
import image1 from '../images/image-1.PNG';
function Banner() {
  return (
    <div className="banner-wrapper">
  <div className="container">

  <div className="banner-left-wrapper">
<h1>
SALE
</h1>
<p>React approaches changes with care. Every React commit is tested on business-critical surfaces with over a billion users.</p>
<button>Read More</button>
</div>
<div className="banner-right-wrapper">
<img src={image1} alt="Image" />
</div>
</div>

  </div>
  );
}
export default Banner;