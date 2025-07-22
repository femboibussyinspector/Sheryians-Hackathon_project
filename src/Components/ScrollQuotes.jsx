import React from "react";
import FlipCard from "./Flipcard";

import image1 from "./Image1.jpg";
import image2 from "./Image2.jpg";
import image3 from "./Image3.jpg";
import image4 from "./Image4.jpg";
import image5 from "./Image5.jpg";
import image6 from "./Image6.jpg";

const facts = [
  { image: image1, fact: "During the brutal Badwater 135 ultramarathon, Goggins broke the bones in both feet just 70 miles (112 kms) in. He taped his shattered ankles and ran the remaining 65 miles (104 kms) — finishing the race." },
  { image: image2, fact: "He completed Hell Week three times in one year. And became the only person in the world to do this" },
  { image: image3, fact: "David lost over 100 pounds in 3 months to qualify for Navy SEALs." },
  { image: image4, fact: "He ran the Moab 240 — 240 miles non-stop across Utah, i.e 386 kilometers!" },
  { image: image5, fact: "David holds the Guinness World Record for most pull-ups in 24 hours i.e 7,801 pullups, however it was broken by Oh Yohan from South Korea " },
  { image: image6, fact: "Before becoming a Navy SEAL, Goggins was spraying for cockroaches at night and sleeping only 2 hours a day while training" }
];

const ScrollQuotes = () => {
  return (
    <div className="bg-black text-white">
      <h2 className="text-center text-yellow-400 font-bold text-3xl pt-10">
        David Goggins Facts
      </h2>
      <div className="flex flex-wrap justify-center gap-60 p-20 font-mono border-b border-yellow-500">
        {facts.map((f, i) => (
          <FlipCard key={i} image={f.image} fact={f.fact} />
        ))}
      </div>
    </div>
  );
};

export default ScrollQuotes;
