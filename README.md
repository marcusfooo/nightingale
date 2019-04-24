# nightingale

Nightingale is a monorepo containing visualisation web components to use with biological data. You can see them in action here: https://ebi-webcomponents.github.io/nightingale

## Installing

Nightingale uses [Lerna](https://lernajs.io/) to manage its packages.

First run `yarn` to install root packages. Then run `yarn bootstrap` to install remaining modules and link dependencies.

## Building the componens

Run `yarn build`

## Showcase application

### Locally

Run `yarn start` to run the application locally.

### Build

Run `yarn build` to build the application ready for deployment.

## Components

### ProtVista

#### Visualisation components

[protvista-zoomable](packages/protvista-zoomable): A superclass providing zooming functionality (uses D3's zoom).

[protvista-track](packages/protvista-track): The base component to render features. Responds to zoom and allows highlights. Extends `protvista-zoomable`.

[protvista-navigation](packages/protvista-navigation): The main navigation component, allows zooming and shows the position of the visible window along the sequence.

[protvista-sequence](packages/protvista-sequence): Displays the amino-acid sequence. Responds to zoom and allows highlights. Extends `protvista-zoomable`.

[protvista-variation](packages/protvista-variation): An adjacency graph to represent variation data, mapping amino-acids to position. Extends `protvista-track`.

[protvista-variation-graph](packages/protvista-variation-graph): a graph representing the number of variants at a given position. Extends `protvista-track`.

[protvista-uniprot](packages/protvista-uniprot): A "super-component" using all components to build UniProt's ProtVista tool.

[protvista-interpro-track](packages/protvista-interpro-track): A specialisation of `protvista-track` to use in InterPro. Extends `protvista-track`.

[protvista-datatable]((packages/protvista-datatable): an interactive table view of features. Can highlight/be highlighted by features from the `protvista-track`

#### Data loading and adapters
Most components use the [Proteins API](https://www.ebi.ac.uk/proteins/api/doc/)

[data-loader](packages/data-loader): this component can load json data given a url. It caches the results in the window so multiple calls 

[protvista-uniprot-entry-adapter](packages/protvista-uniprot-entry-adapter): a superclass providing basic functionality for data transformation and handling of events.

[protvista-variation-adapter](packages/protvista-variation-adapter): this component transforms data returned by the Proteins API Variation service so it can be displayed by the `protvista-variation` and `protvista-variation-graph` components. Extends `protvista-uniprot-entry-adapter`.

[protvista-feature-adapter](packages/protvista-feature-adapter) this component transforms data returned by the Proteins API Features service so it can be displayed by the `protvista-track` component. Extends `protvista-uniprot-entry-adapter`.

[protvista-proteomics-adapter](packages/protvista-proteomics-adapter) this component transforms data returned by the Proteins API Proteomics service so it can be displayed by the `protvista-track` component. Extends `protvista-uniprot-entry-adapter`.

[protvista-structure-adapter](packages/protvista-structure-adapter) this component transforms structure data returned by the Proteins API Proteins service so it can be displayed by the `protvista-track` component. Extends `protvista-uniprot-entry-adapter`.

[protvista-topology-adapter](packages/protvista-topology-adapter) this component transforms topological data returned by the Proteins API Features service so it can be displayed by the `protvista-track` component. Extends `protvista-uniprot-entry-adapter`.

#### Utilities
[protvista-manager](packages/protvista-manager): this component works as an event bus, propagating events emited by its children to specified children as attributes.

[protvista-filter](packages/protvista-filter): this component interacts with data adapters to allow filtering of the data which is displayed.

[protvista-tooltip](packages/protvista-tooltip): the tooltip component is used to display information when a feature is clicked. Tooltip content is generated by data adapters.

[protvista-utils](packages/protvista-utils): collection of util functions

### Interaction viewer
[interaction-viewer](packages/interaction-viewer): The UniProt interaction viewer

### 3D structure viewer
[protvista-structure](packages/protvista-structure): A wrapper around the LiteMol component used in UniProt.

