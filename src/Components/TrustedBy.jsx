import React from "react";

const TrustedBy = () => {
    return (
        <div className="trustedBy bg-[#fafafa] h-[100px] flex justify-center">
            <div className="container flex justify-center items-center gap-5 font-medium">
                <span>Trusted by:</span>
                <img className="h-12 object-cover" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png" alt="" />
                <img className="h-12 object-cover" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png" alt="" />
                <img className="h-12 object-cover" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png" alt="" />
                <img className="h-12 object-cover" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png" alt="" />
                <img className="h-12 object-cover" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png" alt="" />
            </div>
        </div>
    );
};

export default TrustedBy;