import Ember from 'ember';

var musicBio = `
<p>I'm a Dublin based mandolin player. I started out playing the Irish tin whistle and flute as a kid, and graduated to the guitar in my teens. Since then I've been pretty obsessed with folk and bluegrass music.</p>

<p>I like harder bluegrass, but lately I'm more interested in "folkier" songs and tunes. My favourite artists right now include Tim O'Brien, John Reischman, Mandolin Orange and Sarah Jarosz</p>

<p>If you're interested in jamming send me an email at <a href="mailto:boblong@fastmail.com">boblong@fastmail.com</a>.</p>

<h5>Gear</h5>
<p>I currently use a <a href="http://www.northfieldinstruments.com/mandolins/qsq-series">Northfield NF-5S</a> mandolin, <a href="http://siminoff.net/straight-up-strings/">Straight Up Strings</a>, and <a href="http://shop.bluechippick.net/products/CT55.html">BlueChip CT55 picks</a>. I use a <a href="https://www.zoom-na.com/products/field-video-recording/field-recording/zoom-h4n-handy-recorder">Zoom H4n</a> to record at home.</p>
`;

export default Ember.Route.extend({
  model() {
    return {
      description: musicBio,
      links: [{
        title: "Bob on Soundcloud",
        href: "https://soundcloud.com/boblongmandolin",
        description: "On Soundcloud I post myself playing original tunes, improvisation practice, and covers."
      }, {
        title: "Bob on Mandolin Cafe",
        href: "http://www.mandolincafe.com/forum/member.php?48046-bobjflong",
        description: "On Mandolin Cafe I mostly lurk, but ask the odd question."
      }]
    };
  }
});
