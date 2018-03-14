import * as React from 'react';
import PropTypes from 'prop-types';

const JSTrackerFile = ({ hostname, version }) => (
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
};p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;n.crossorigin="anonymous";
n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","${hostname}/${version}/sp.js","snowplow"));
      `,
    }}
  />
);
JSTrackerFile.propTypes = { hostname: PropTypes.string, version: PropTypes.string };
JSTrackerFile.defaultProps = { hostname: '//d1fc8wv8zag5ca.cloudfront.net', version: '2.9.0' };

const SnowplowInstall = ({ namespace, collector, config }) => (
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `snowplow('newTracker', '${namespace}', '${collector}', ${JSON.stringify(config)});`,
    }}
  />
);
SnowplowInstall.propTypes = { namespace: PropTypes.string, collector: PropTypes.string, config: PropTypes.object };
SnowplowInstall.defaultProps = { namespace: 'cf', collector: '', config: {} };

exports.onRenderBody = ({ setHeadComponents }, { hostname, version, namespace, collector, config }) => {
  return setHeadComponents([
    <JSTrackerFile hostname={hostname} version={version} key="gatsby-plugin-snowplow-jsfile" />,
    <SnowplowInstall
      namespace={namespace}
      collector={collector}
      config={config}
      key="gatsby-plugin-snowplow-install"
    />,
  ]);
};
