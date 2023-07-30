import "./AboutUs.css";
import React from "react";

function AbutUs() {
    return (
       <div className="about-us">
      <div className="AbutUs" id="div1">
        <img className="blackFamilyPic" src="picture/blackFamaliBg.jpg "/>
      
      </div>
      <div className="AbutUs "id="div2">
       <h1>our story</h1>
       <p>It takes a village to raise a child. We’re helping families bring their Village to life. 
       Bambino is a next generation babysitting app that leverages the power of location, social 
       connections and personalized recommendations to create trusted relationships between 
       families and sitters</p>
       <div className="curve"></div>
      </div>
      <div className="AbutUs" id="div3">
       <h1>our promise</h1>
       <p>Were on a mission to make life easier for parents everywhere. We believe that families thrive when theyre given access to the support they need  whenever, wherever, and however they need it.</p>
      </div>
      <div className="curve"></div>
      <div className="AbutUs" id="div4">
       <h1>A note from our founder</h1>
       <p>Today’s families often live in neighborhoods, next to other families.
         Households with young adults and teenagers living next to homes with small
          children. Moms side-by-side with other moms. The problem is, people are
           staying indoors more and more, and they rarely get to know their neighbors.
         This became abundantly clear to me one night when I needed a babysitter, 
         and I couldn’t find one. I figured there must be a bunch of them right in 
         my neighborhood, but I didn’t know who they were or how to get to them
         . So I created an app for that.
         Bambino is a community for parents and babysitters to connect.
       A place where they can find each other through common connections
      and chat. Where parents can review sitters once they’ve sat for them, 
      and where sitters can see their connection to parents before they sit for them.
       We’ve created thriving, virtual communities all across the country.
     With Bambino, we’ve modernized the way parents find, book and pay friend-recommended,
   community-tested babysitters right in their own neighborhood. And by allowing parents to
    reach those otherwise unreachable sitters, we’ve given responsible teenagers and young
     adults a productive way to use their spare time and contribute to their community…all
      while restoring flexibility back into the lives of the people who deserve it the most
       – parents.

-Sean Greene, Founder and CEO of Bambino</p>
      </div>
      <div className="curve"></div>

      </div>
    );
  };
  
  export default AbutUs;