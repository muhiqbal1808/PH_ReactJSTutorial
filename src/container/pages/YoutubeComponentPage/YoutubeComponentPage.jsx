import React, { Component } from "react";

import YoutubeComponent from "../../../components/YoutubeComponent/YoutubeComponent";

class YoutubeComponentPage extends Component {
  render() {
    return (
      <>
        <p>Youtube Component</p>
        <hr />
        <YoutubeComponent
          time="7.12"
          title="FULL MATCH FINAL GAME 2: INDONESIA VS JEPANG | AFC eASIAN CUP QATAR"
          desc="2x ditonton, 9 Jam yang lalu"
        />
        <YoutubeComponent
          time="8.22"
          title="FULL MATCH FINAL GAME 1: INDONESIA VS JEPANG | AFC eASIAN CUP QATAR"
          desc="2x ditonton, 9 Jam yang lalu"
        />
        <YoutubeComponent
          time="5.04"
          title="FULL MATCH GAME 2: INDONESIA VS THAILAND | AFC eASIAN CUP QATAR"
          desc="2x ditonton, 14 Jam yang lalu"
        />
        <YoutubeComponent
          time="7.52"
          title="FULL MATCH GAME 1: INDONESIA VS THAILAND | AFC eASIAN CUP QATAR"
          desc="2x ditonton, 14 Jam yang lalu"
        />
        <YoutubeComponent />
      </>
    );
  }
}

export default YoutubeComponentPage;
