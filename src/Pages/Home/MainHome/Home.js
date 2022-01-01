import React from "react";
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
      <h2>This is main Home.</h2>
      <HomeBanner />
      <HomeAbout />
      <HomeServices />
      <HomeWeDo />
      <HomeProjects />
      <HomeProgress />
      <HomeTeamMembers />
      <HomeBlogs />
    </div>
  );
};

export default Home;
