import React from 'react';

const AboutPage = () => {
  return (
    <div>
        {/* Title Text */}
        <div>
          <h1 className="font-bold">
            Why people love ChatCHW
          </h1>
        </div>

        {/* Paragraph Text */}
        <div>
          <p>
            At ChatCHW, we measure our success by the <br />
            positive outcomes achieved by CHWs and the <br />
            communities they serve. By equipping CHWs with <br />
            the resources and support they need, we aim to: <br />
          </p>
        </div>

        {/* Bullet points */}
        <div>
          <ul className="list-outside">
            <li>Improve healthcare access and quality in underserved communities</li>
            <li>Reduce health disparities and imrpove health equity</li>
            <li>Enchance the overall well-being and health outcomes of individuals and families</li>
            <li>Strengthen community resilience and self-sufficiency</li>
          </ul>
        </div>

        {/* Boxes */}


    </div>
    
  )
}

export default AboutPage;