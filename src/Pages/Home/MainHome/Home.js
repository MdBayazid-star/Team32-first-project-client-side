import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeBlogs from "../HomeBlogs/HomeBlogs";
import HomeProjects from "../HomePojects/HomeProjects";
import HomeProgress from "../HomeProgress/HomeProgress";
import HomeServices from "../HomeServices/HomeServices";
import HomeTeamMembers from "../HomeTeamMember/HomeTeamMembers";
import HomeWeDo from "../HomeWeDo/HomeWeDo";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeBanner />
      <HomeAbout />
      <HomeServices />
      <HomeWeDo />
      <HomeProjects />
      <HomeProgress />
      <HomeTeamMembers />
      <HomeBlogs />
      <Footer />
    </div>
  );
};

export default Home;
