# gatsby-plugin-snowplow

Gatsby plugin to add Snowplow tracker to your site.

## Install

`npm install --save gatsby-plugin-snowplow` or

`yarn add gatsby-plugin-snowplow`

## How to use

```
// In your gatsby-config.js
plugins: [
	{
		resolve: "gatsby-plugin-snowplow",
		options: {
			hostname: "//d1fc8wv8zag5ca.cloudfront.net",
			version: "2.9.0",
			namespace: "cf",
			collector: "d3rkrsqld9gmqf.cloudfront.net",
			config: {
				appId: "cfe23a",
  			platform: "mob"
			}
		}
	}
]
```
