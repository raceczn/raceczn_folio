import { useEffect, useState } from "react";
import useAnimateWhenViewed from "../../src/hooks/useAnimateWhenViewed";
import { motion } from "framer-motion";
import { sectionVariants } from "../../src/utils/animationVariants";
import SectionHeading from "../SectionHeading";
import dynamic from "next/dynamic";
import Image from "next/image";

// Lazy loading FeaturedItem for performance
const FeaturedItem = dynamic(() => import("../FeaturedItem"), {
  loading: () => <p>Loading...</p>,
});

export default function FeaturedSection() {
  const [ref, controls] = useAnimateWhenViewed(-250);

  // Static project data
  const projects = [
    {
      sys: { id: "1" },
      fields: {
        title: "Anime Hunt",
        subtitle: "Explore Anime with Jikan API Integration",
        body: "A web app for anime fans to explore anime series, featuring real-time data from the Jikan API. It offers a responsive, easy-to-navigate design with smooth animations for an enjoyable browsing experience on any device.",
        tools: ["Typescript", "Next.js", "React.js", "Tailwind", "Jikan API"],
        github: "https://github.com/raceczn/anime_hunt",
        website: "https://anime-hunt-race.vercel.app/",
        image: {
          fields: {
            file: {
              src: "/images/projects/Anime_hunt.png",  // Ensure this is in the public folder
              details: {
                image: {
                  width: 500,
                  height: 300,
                },
              },
            },
          },
        },
        featured: true,
      },
    },
    { 
      sys: { id: "2" },
      fields: {
        title: "Fighero",
        subtitle: "Interactive Web for Fighero Built with Framer",
        body: "Interactive eCommerce concept for collectible toy figures, built on Framer. It features a responsive design, smooth navigation, and engaging visuals to create an intuitive and enjoyable user experience.",
        tools: ["Framer", "Figma", "React.js"],
        github: "https://framer.com/projects/Fighero--tIZKXAbem35WV0doWDzo-7ce7j",
        website: "https://figheroo.framer.website/",
        image: {
          fields: {
            file: {
              src: "/images/projects/Fighero.png",
              details: {
                image: {
                  width: 500,
                  height: 300,
                },
              },
            },
          },
        },
        featured: true,
      },
    },
    { 
      sys: { id: "3" },
      fields: {
        title: "Gochisou Bimi",
        subtitle: "Mobile Application for Inventory Management",
        body: "Developed for Gochisou Bimi to easily manage and track inventory. It allows users to check stock levels, update products, check history and generate reports, all from their mobile device, making inventory management faster and simpler.",
        tools: ["Dart", "Flutter", "JavaScript", "Node.js", "MongoDB"],
        github: "https://github.com/RON2814/again_inventory_project",
        // website: "//page not found", 
        image: {
          fields: {
            file: {
              src: "/images/projects/Gochisou_Bimi.png",  // Ensure this is in the public folder
              details: {
                image: {
                  width: 500,
                  height: 300,
                },
              },
            },
          },
        },
        featured: true,
      },
    },
  ];

  return (
    <motion.section
      className="featured"
      id="Featured"
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <SectionHeading
        className="selected_featured"
        title="Featured Projects"
        subtitle="Selected Projects"
      />
      {projects
        .filter((project) => project.fields?.featured)
        .map((featuredProject) => (
          <article key={featuredProject.sys.id} className="featured-item">
            <FeaturedItem featuredProject={featuredProject} />
          </article>
        ))}
    </motion.section>
  );
}
