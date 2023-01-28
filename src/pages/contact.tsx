import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Icon } from "@iconify/react";
import TopButton from "../components/top-button";
import SocialMedia from "../components/social-media";
import Button from "../components/button";
import BlogsImage from "../assets/images/blog-image";
import AddressImage from "../assets/images/address-image";
import PhoneImage from "../assets/images/phone-image";
import { Fade } from "react-awesome-reveal";
import "../assets/css/contact.css";
import { greeting, contactPageData } from "../portfolio";
import { Theme } from "../theme";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

const Contact = (props: {theme: Theme}) =>{
    const theme = props.theme;
    return (
        <div className="contact-main">
            <Header theme={theme} />
            <div className="basic-contact">
                <Fade direction="up" duration={1000} style={{marginTop: "30px", marginBottom:"30px"}}>
                    <div className="contact-heading-div">
                        <div className="contact-heading-img-div" style={{textAlign: "center"}}>
                            <img src={require(`../assets/images/${ContactData["profile_image_path"]}`)} style={{borderRadius: "50%", width: '400px'}} />
                        </div>
                        <div className="contact-heading-text-div">
                            <h1 className="contact-heading-text" style={{ color: theme.text }}>{ContactData["title"]}</h1>
                            <p className="contact-header-detail-text subTitle" style={{ color: theme.secondaryText }}>{ContactData["description"]}</p>
                            <SocialMedia theme={theme} />
                            <div className="resume-btn-div">
                                <Button text="See My Resume" newTab={true} href={greeting.resumeLink} theme={theme} />
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade direction="left" duration={1000} style={{marginTop: "20px"}}>
                    <div className="blog-heading-div">
                        <div className="blog-heading-text-div">
                            <h1 className="blog-heading-text" style={{ color: theme.text }}>{blogSection["title"]}</h1>
                            <p className="blog-header-detail-text subTitle" style={{ color: theme.secondaryText }}>{blogSection["subtitle"]}</p>
                            <div className="blogsite-btn-div">
                                <Button text="Visit My Blogsite" newTab={true} href={blogSection.link} theme={theme} />
                            </div>
                        </div>
                        <div className="blog-heading-img-div"><BlogsImage theme={theme} /></div>
                    </div>
                </Fade>
                <Fade direction="down" duration={1000} style={{paddingTop: "20px", marginBottom:"30px"}}>
                    <div className="address-heading-div">
                        <div className="contact-heading-img-div"><PhoneImage theme={theme} /></div>
                        <div className="address-heading-text-div">
                        	<Icon icon={"el:map-marker-alt"} color={theme.text} style={{  marginTop: "50px", fontSize: '70px'}}/>
                            <h1 className="address-heading-text" style={{ color: theme.text }}>{addressSection["title"]}</h1>
                            <p className="contact-header-detail-text subTitle" style={{ color: theme.secondaryText }}>{addressSection["subtitle"]}</p>
                            <div className="address-btn-div">
                                <Button text="Visit on Google Maps" newTab={true} href={addressSection.location_map_link} theme={theme}/>
                            </div>
                            <Icon icon={"fa6-solid:mobile-screen-button"} color={theme.text} style={{  marginTop: "50px", fontSize: '70px'}}/>
                            <h1 className="address-heading-text" style={{ color: theme.text }}>{phoneSection["title"]}</h1>
                            <p className="contact-header-detail-text subTitle" style={{ color: theme.secondaryText }}>{phoneSection["subtitle"]}</p>
                        </div>
                    </div>
                </Fade>
            </div>
            <Footer theme={props.theme} />
            <TopButton theme={props.theme} />
        </div>);
}

export default Contact;
