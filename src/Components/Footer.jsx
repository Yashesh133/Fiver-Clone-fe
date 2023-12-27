import React from "react";

function Footer() {
    return (
        <div className="flex justify-center text-gray-600 mt-10 mb-3">
            <div className="container">
                <div className="flex justify-center text-center">
                    <div className="flex gap-20">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg font-semibold">Categories</h2>
                            <span>Graphics & Design</span>
                            <span>Digital Marketing</span>
                            <span>Writing & Translation</span>
                            <span>Video & Animation</span>
                            <span>Music & Audio</span>
                            <span>Programming & Tech</span>
                            <span>Data</span>
                            <span>Business</span>
                            <span>Lifestyle</span>
                            <span>Photography</span>
                            <span>Sitemap</span>
                            <span>Sitemap</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg font-semibold">About</h2>
                            <span>Press & News</span>
                            <span>Partnerships</span>
                            <span>Privacy Policy</span>
                            <span>Terms of Service</span>
                            <span>Intellectual Property Claims</span>
                            <span>Investor Relations</span>
                            <span>Contact Sales</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg font-semibold">Support</h2>
                            <span>Help & Support</span>
                            <span>Trust & Safety</span>
                            <span>Selling on Liverr</span>
                            <span>Buying on Liverr</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg font-semibold">Community</h2>
                            <span>Customer Success Stories</span>
                            <span>Community hub</span>
                            <span>Forum</span>
                            <span>Events</span>
                            <span>Blog</span>
                            <span>Influencers</span>
                            <span>Affiliates</span>
                            <span>Podcast</span>
                            <span>Invite a Friend</span>
                            <span>Become a Seller</span>
                            <span>Community Standards</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg font-semibold">More From Fiverr</h2>
                            <span>Liverr Business</span>
                            <span>Liverr Pro</span>
                            <span>Liverr Logo Maker</span>
                            <span>Liverr Guides</span>
                            <span>Get Inspired</span>
                            <span>Liverr Select</span>
                            <span>ClearVoice</span>
                            <span>Liverr Workspace</span>
                            <span>Learn</span>
                            <span>Working Not Working</span>
                        </div>
                    </div>
                </div>
                <hr className="my-5 border-t border-gray-300" />
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-20">
                        <h2 className="text-lg font-semibold">fiverr</h2>
                        <span>© fiverr International Ltd. 2023</span>
                    </div>
                    <div className="flex gap-10 items-center">
                        <div className="flex gap-20">
                            <img src="/assets/twitter.png" alt="" className="w-6 h-6" />
                            <img src="/assets/facebook.png" alt="" className="w-6 h-6" />
                            <img src="/assets/linkedin.png" alt="" className="w-6 h-6" />
                            <img src="/assets/pinterest.png" alt="" className="w-6 h-6" />
                            <img src="/assets/instagram.png" alt="" className="w-6 h-6" />
                        </div>
                        <div className="flex items-center gap-10">
                            <img src="/assets/language.png" alt="" className="w-5 h-5" />
                            <span>English</span>
                        </div>
                        <div className="flex items-center gap-10">
                            <img src="/assets/coin.png" alt="" className="w-5 h-5" />
                            <span>USD</span>
                        </div>
                        <img src="/assets/accessibility.png" alt="" className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
