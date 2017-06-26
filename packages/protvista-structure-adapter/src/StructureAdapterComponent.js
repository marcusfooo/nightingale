/*jslint node: true */
"use strict";

import {StructureDataParser} from './StructureDataParser'

export class StructureAdapterComponent extends HTMLElement {
    constructor() {
        super();
        this._parser = new StructureDataParser('');
        this._pdbFeatures = {};
    }

    static get observedAttributes() { return ['accession']; }

    connectedCallback() {
        console.log('connectedCallback', this._accession);
        this.addEventListener('load', (e) => {
            this._parser.accession = this.accession;
            try {
                this._pdbFeatures = this._parser.parseEntry(e.detail);
                this.dispatchEvent(new CustomEvent(
                    'ready',
                    {detail: this._pdbFeatures, bubbles: true}
                ));
            } catch(error) {
                this.dispatchEvent(new CustomEvent(
                    'error',
                    {detail: error, bubbles: true}
                ));
            }
        });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('attributeChangedCallback');
        // name will always be "accession" due to observedAttributes
        this._accession = newValue;
    }

    get accession() {
        return this._accession;
    }

    set accession(acc) {
        this.setAttribute('accession', acc);
    }

    get pdbFeatures() {
        return this._pdbFeatures;
    }
}