/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/react",
]);

module.exports = withTM({
  // your custom config goes here
  reactStrictMode: true,
});
