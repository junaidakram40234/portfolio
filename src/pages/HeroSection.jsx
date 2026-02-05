import React from "react";
import BeamGridBackground from "../components/lightswind/beam-grid-background";
import StaggeredMenu from "../components/StaggeredMenu.jsx";
import Logo from "../assets/logo/logo.svg";
import { CometCard } from "../components/ui/comet-card.jsx";
import Profile from "../assets/images/profile.png"
import CircularText from "../components/CircularText.jsx";

const HeroSection = () => {
    const menuItems = [
      { label: "Home", ariaLabel: "Go to home page", link: "/" },
      { label: "About", ariaLabel: "Learn about us", link: "/about" },
      { label: "Services", ariaLabel: "View our services", link: "/services" },
      { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
    ];

    const socialItems = [
      { label: "Twitter", link: "https://twitter.com" },
      { label: "GitHub", link: "https://github.com" },
      { label: "LinkedIn", link: "https://linkedin.com" },
    ];
    return (
      <div className="h-screen w-full overflow-hidden">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={["#229db0", "#000000"]}
          logoUrl={Logo}
          accentColor="#229db0"
          onMenuOpen={() => console.log("Menu opened")}
          onMenuClose={() => console.log("Menu closed")}
          className={"text-white"}
        />
        <BeamGridBackground
          gridSize={40}
          gridColor="#d1d5db"
          darkGridColor="#1f2937"
          beamColor="#229db0"
          darkBeamColor="rgba(0,255,255,0.8)"
          beamCount={8}
          extraBeamCount={3}
          beamThickness={3}
          beamGlow
          showFade={false}
          glowIntensity={50}
          idleSpeed={1.15}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24 flex items-center justify-center ">
          <CometCard>
            <div className="absolute -top-20 -left-20 z-1">
              <CircularText
                text="EVERY*PIXEL*HAS*A*PURPOSE*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />
            </div>

            <button
              type="button"
              className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#229db0] p-2 saturate-0 md:my-20 md:p-4"
              aria-label="View invite F7RA"
              style={{
                transformStyle: "preserve-3d",
                transform: "none",
                opacity: 1,
              }}
            >
              <div className="mx-2 flex-1">
                <div className="relative  mt-2 aspect-[3/4] w-full">
                  <img
                    loading="lazy"
                    className="absolute  inset-0 h-full w-full rounded-[16px] bg-[#229db0] object-cover contrast-75"
                    alt="Invite background"
                    src={Profile}
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                      opacity: 1,
                    }}
                  />
                </div>
              </div>
              <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                <div className="text-xs">Zohaib Akram</div>
                <div className="text-xs text-gray-300 opacity-50">
                  UX/UI designer
                </div>
              </div>
            </button>
          </CometCard>
        </div>
      </div>
    );
};

export default HeroSection;
