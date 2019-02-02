import React, { Component } from 'react';

class ClickableMap extends Component {

  render() {
    return <div id="ClickableMap" className="text-center">
      <img src="images/clickable_map.png" width="475px" height="362px" usemap="#Map"/>
      <map name="Map">
        <area shape="poly" coords="408,286,444,221,442,203,470,161,432,145,385,158,360,157,322,151,307,174,333,200,331,211,346,215,333,228,363,260,378,263" href=""/>
        <area shape="poly" coords="324,351,335,340,336,332,332,328,337,319,345,318,348,300,355,290,369,286,360,267,346,246,332,230,342,216,333,211,333,200,316,189,303,172,273,198,250,212,226,222,233,247,224,270,221,287,225,314,245,319,261,319,270,314,291,316,310,329,316,337" href=""/>
        <area shape="poly" coords="118,329,156,331,201,327,226,317,217,288,231,245,221,224,174,236,129,238,100,235,92,285" href=""/>
        <area shape="poly" coords="76,322,120,330,115,319,93,283,102,234,67,222,27,208,34,217,43,216,39,226,41,242,47,252,44,261,13,256,16,272,13,287,35,318,59,324" href=""/>
        <area shape="poly" coords="63,268" href="#"/>
        <area shape="poly" coords="23,202,72,224,102,235,153,236,184,230,165,139,124,140,71,120" href=""/>
        <area shape="poly" coords="185,233,243,215,289,185,322,153,277,115,254,109,244,99,206,127,165,138" href=""/>
        <area shape="poly" coords="69,119,123,139,161,137,201,126,235,99,199,90,188,62,184,39,137,5" href=""/>
      </map>
    </div>;
  }
}

export default ClickableMap;