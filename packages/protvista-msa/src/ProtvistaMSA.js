import ProtvistaZoomable from "protvista-zoomable";
import ReactMSAViewer from "react-msa-viewer";
import React from "react";
import ReactDOM from "react-dom";
import { select } from "d3";

class ProtvistaMSA extends ProtvistaZoomable {
  static get observedAttributes() {
    return ProtvistaZoomable.observedAttributes.concat([
      "labelwidth",
      "colorscheme",
      "calculateConservation",
    ]);
  }

  set data(_data) {
    this._data = _data;
    this.refresh();
    window.requestAnimationFrame(() => {
      this.svg = select(this).select("div");
    });
  }

  // eslint-disable-next-line class-methods-use-this
  get margin() {
    return {
      top: 10,
      right: 0,
      bottom: 10,
      left: this._labelwidth || 10,
    };
  }
  getColorMap() {
    return this.el.getColorMap();
  }

  refresh() {
    const options = {
      sequences: this._data,
      height: this._height,
      width: this.width - (this._labelwidth || 0),
      tileHeight: 20,
      tileWidth: Math.max(1, this.getSingleBaseWidth()),
      colorScheme: this._colorscheme || "clustal",
      layout: "nightingale",
      sequenceOverflow: "scroll",
      sequenceOverflowX: "overflow",
      sequenceDisableDragging: true,
    };
    if (this.hasAttribute("calculate-conservation")) {
      options.calculateConservation = true;
    }
    if (this._labelwidth) {
      options.labelStyle = {
        width: this._labelwidth - 5,
        "text-align": "end",
        "padding-right": 5,
        overflow: "hidden",
      };
    }
    ReactDOM.render(
      <ReactMSAViewer {...options} ref={(ref) => (this.el = ref)} />,
      this
    );
    window.requestAnimationFrame(() => {
      if (this.el) {
        this.el.updatePositionByResidue({ aaPos: this._displaystart });
        if (1 > this.getSingleBaseWidth()) {
          this.dispatchEvent(
            // Dispatches the event so the manager can propagate this changes to other  components
            new CustomEvent("change", {
              detail: {
                displaystart: this._displaystart,
                displayend: this._displaystart + this.xScale.range()[1],
              },
              bubbles: true,
              cancelable: true,
            })
          );
        }
        // if (
        //   this.trackHighlighter &&
        //   this.trackHighlighter.region &&
        //   this.trackHighlighter.region.regionString
        // ) {
        //   const {
        //     start: from,
        //     end: to
        //   } = this.trackHighlighter.region.segments[0];
        //   this.el.highlightRegion({
        //     sequences: {
        //       from: 1,
        //       to: this._data.length
        //     },
        //     residues: {
        //       from,
        //       to
        //     }
        //   });
        // }
      }
    });
  }
}

export default ProtvistaMSA;
