import React, { useState, useEffect, useRef } from "react";
import ProtvistaMSA from "protvista-msa";
import ProtvistaNavigation from "protvista-navigation";
import ProtvistaManager from "protvista-manager";
import loadWebComponent from "../utils/load-web-component";
import Readme from "./Readme";
import readmeContent from "../../../packages/protvista-msa/README.md";
import Console from "./Console";
const AllowedColorschemes = [
  "buried_index",
  "clustal",
  "clustal2",
  "cinema",
  "helix_propensity",
  "hydro",
  "lesk",
  "mae",
  "nucleotide",
  "purine_pyrimidine",
  "strand_propensity",
  "taylor",
  "turn_propensity",
  "zappo",
  "conservation",
];

const alphabet = "ACDEFGHIKLMNPQRSTVWY-";
const getRandomBase = () =>
  alphabet[Math.floor(Math.random() * alphabet.length)];

let currentColor = null;
const ProtvistaMSAWrapper = () => {
  const [ColorScheme, setColorScheme] = useState("clustal");
  const msaTrack = useRef(null);
  const [logs, setLogs] = useState("");
  const addLog = (log) => setLogs(`${logs}\n${log}`);
  const sequence =
    "MAMYDDEFDTKASDLTFSPWVEVENWKDVTTRLRAIKFALQADRDKIPGVLSDLKTNCPYSAFKRFPDKSLYSVLSKEAVIAVAQIQSASGFKRRADEKNAVSGLVSVTPTQISQSASSSAATPVGLATVKPPRESDSAFQEDTFSYAKFDDASTAFHKALAYLEGLSLRPTYRRKFEKDMNVKWGGSGSAPSGAPAGGSSGSAPPTSGSSGSGAAPTPPPNP";
  useEffect(() => {
    const seqs = [];
    for (let i = 0; i < 400; i++) {
      const mutationPos = Math.round(Math.random() * (sequence.length - 1));
      seqs.push({
        name: `seq_${i}`,
        sequence: `${sequence.substring(
          0,
          mutationPos
        )}${getRandomBase()}${sequence.substring(mutationPos + 1)}`,
      });
    }
    msaTrack.current.data = seqs;
    msaTrack.current.addEventListener("conservationProgress", (e) =>
      addLog(`[conservationProgress]: ${e.detail.progress * 100}%`)
    );
    msaTrack.current.addEventListener("drawCompleted", () => {
      const { name, map } = msaTrack.current.getColorMap();
      if (name !== currentColor) {
        addLog(
          `[colors-${name}]:\n${Object.entries(map)
            .map(([base, color]) => `\t${base}: ${color}`)
            .join("\n")}`
        );
        currentColor = name;
      }
    });
  }, []);

  loadWebComponent("protvista-msa", ProtvistaMSA);
  loadWebComponent("protvista-navigation", ProtvistaNavigation);
  loadWebComponent("protvista-manager", ProtvistaManager);

  const handleColorChange = (event) => {
    setColorScheme(event.target.value);
    addLog(`[setColorScheme]: ${event.target.value}`);
  };
  const labelWidth = 100;

  return (
    <>
      <h1>protvista-msa</h1>
      <select
        value={ColorScheme}
        onChange={handleColorChange}
        onBlur={handleColorChange}
      >
        {AllowedColorschemes.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
      <protvista-manager
        attributes="length displaystart displayend highlight"
        displaystart="1"
        displayend="50"
        id="example"
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: labelWidth,
              flexShrink: 0,
            }}
          />
          <protvista-navigation
            length={sequence.length}
            displaystart="1"
            displayend="50"
          />
        </div>
        <protvista-msa
          id="msa-track"
          ref={msaTrack}
          length={sequence.length}
          height="200"
          displaystart="1"
          displayend="50"
          use-ctrl-to-zoom
          labelWidth={labelWidth}
          colorscheme={ColorScheme}
          calculate-conservation
        />
      </protvista-manager>
      <Console>{logs}</Console>
      <Readme content={readmeContent} />
    </>
  );
};

export default ProtvistaMSAWrapper;
