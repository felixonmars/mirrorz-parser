const ustclugv1 = require("./ustclug-v1");

module.exports = async function () {
  const site = await (
    await fetch("https://mirrorz.org/static/json/site/xtom-de.json")
  ).json();
  const data = await ustclugv1(
    "https://r.zenithal.workers.dev/https://mirrors.xtom.de/",
    "https://mirrors.xtom.de/api/v1/metas"
  );

  return {
    site,
    info: data.info,
    mirrors: data.mirrors,
  };
};
