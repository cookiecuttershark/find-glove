import React from "react";

const About = () => {
  return (
    <>
      <h2>Why find gloves</h2>
      <p>
        Ever felt the pain of loosing one glove? I lost one of my favorite
        gloves on a ski trip in 2015 and felt helpless to do anything about it.{" "}
      </p>
      <p>
        This is site is designed to help people with part of a set of gloves
        find someone who can use them.
      </p>
      <h3>Family history</h3>
      <p>
        The family's obsession with the injustice of missing hand warmers is
        long. My great grandfather claimed that someone stole his mitten, and
        the family never did find it.{" "}
      </p>
      <p>
        If you have information about a mitten stolen in the early 1990s, please
        contact me here:
      </p>
      <a href="/contact">Contact</a>
      <h3>Sustainability</h3>
      <p>
        Far too many perfectly good gloves and mittens get thrown away every
        year because people don't have the right number for their needs.{" "}
      </p>
      <h3>Accessibility</h3>
      <p>
        For people who only have one hand, your one glove may be all they need,
        when normally they would need to buy a pair. Alternatively, if you only
        have one hand, you may have an extra glove laying around that can help a
        person with two hands and one mitten find their pair.{" "}
      </p>
      <p>Ready to post a glove?</p>{" "}
      <button type="button" class="button">
        Upload
      </button>
    </>
  );
};

export default About;
