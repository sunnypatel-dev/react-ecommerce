import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Descriptioin</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An eCommerce website is an online destination where buyers shop for
          goods and sellers offer products and services. It’s the hub of
          information about a company and what they sell. On an eCommerce
          website, you’ll find product listings, eCommerce blog content, company
          history, and contact information.
        </p>
        <p>
          An eCommerce website is an online destination where buyers shop for
          goods and sellers offer products and services. It’s the hub of
          information about a company and what they sell.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
