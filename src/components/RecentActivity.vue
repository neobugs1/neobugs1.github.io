<template>
  <section
    class="flex flex-row gap-48 justify-center bg-gray-100 dark:bg-gray-900 dark:text-white overflow-hidden p-8 shadow-[inset_0_11px_8px_-10px_rgba(0,0,0,0.1),inset_0_-11px_8px_-10px_rgba(0,0,0,0.1)]"
  >
    <h2 class="text-4xl h-12 font-semibold mb-4 border-b-2 border-green-500 text-black dark:text-white">Recent Activity</h2>
    <div id="gh" data-login="neobugs1"></div>
  </section>
</template>

<script>
async function fetchData(ghLogin) {
  try {
    let response = await fetch(`https://lengthylyova.pythonanywhere.com/api/gh-contrib-graph/fetch-data/?githubLogin=${ghLogin}`, { method: "GET" });
    let data = await response.json();
    console.log("Fetched data:", data);
    return data["data"]["user"];
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

function init_table() {
  let table = document.createElement("table");
  table.className = "ghCalendarTable";
  let thead = table.createTHead();
  let tbody = table.createTBody();
  let row = thead.insertRow();
  let cell = row.insertCell();
  cell.style.width = "28px";
  for (let i = 0; i < 7; i++) {
    row = tbody.insertRow();
    cell = row.insertCell();
    switch (i) {
      case 1:
        cell.innerHTML = '<span class="ghCalendarLabel">Mon</span>';
        break;
      case 3:
        cell.innerHTML = '<span class="ghCalendarLabel">Wed</span>';
        break;
      case 5:
        cell.innerHTML = '<span class="ghCalendarLabel">Fri</span>';
        break;
    }
  }
  return [table, thead, tbody];
}

function addMonths(thead, months) {
  for (let i = 0; i < months.length - 1; i++) {
    const total_weeks = months[i]["totalWeeks"];
    if (total_weeks >= 2) {
      let cell = thead.rows[0].insertCell();
      let label = document.createElement("span");
      label.textContent = months[i]["name"];
      label.className = "ghCalendarLabel";
      cell.appendChild(label);
      cell.colSpan = months[i]["totalWeeks"];
    }
  }
}

function addWeeks(tbody, weeks, colors) {
  for (let i = 0; i < weeks.length; i++) {
    const days = weeks[i]["contributionDays"];
    for (let j = 0; j < days.length; j++) {
      const day = days[j];
      const data = document.createElement("span");
      let date = new Date(day["date"]);
      data.textContent = `${day["contributionCount"]} contributions on ${date.toDateString()}`;
      const cell = tbody.rows[day["weekday"]].insertCell();
      cell.appendChild(data);
      cell.className = "ghCalendarDayCell";
      cell.dataset.date = day["date"];
      cell.dataset.count = day["contributionCount"];
      cell.dataset.level = day["contributionLevel"];
    }
  }
}

function init_card() {
  const card = document.createElement("div");
  card.className = "ghCalendarCard";
  return card;
}

function init_card_footer() {
  const footer = document.createElement("div");
  const colors = document.createElement("div");
  footer.className = "ghCalendarCardFooter";
  colors.className = "ghCalendarCardFooterColors";
  let less = document.createElement("span");
  less.textContent = "Less";
  let more = document.createElement("span");
  more.textContent = "More";
  colors.appendChild(less);
  let levels = ["NONE", "FIRST_QUARTILE", "SECOND_QUARTILE", "THIRD_QUARTILE", "FOURTH_QUARTILE"];
  for (let i = 0; i < 5; i++) {
    let cell = document.createElement("div");
    cell.className = "ghCalendarDayCell";
    cell.dataset.level = levels[i];
    colors.appendChild(cell);
  }
  colors.appendChild(more);
  footer.appendChild(colors);
  return footer;
}

function init_canvas() {
  const canvas = document.createElement("div");
  canvas.className = "ghCalendarCanvas";
  return canvas;
}

function init_header(total_contribs, ghLogin, avatarUrl) {
  const header = document.createElement("div");
  const total = document.createElement("span");
  const profile = document.createElement("div");
  profile.innerHTML = `<a href="https://github.com/${ghLogin}">${ghLogin}</a><img src="${avatarUrl}">`;
  header.className = "ghCalendarHeader";
  total.textContent = `${total_contribs} contributions in the last year`;
  header.appendChild(total);
  header.appendChild(profile);
  return header;
}

function init_thumbnail() {
  const thumbnail = document.createElement("div");
  const thumbNailLink = document.createElement("a");
  const thumbnailImage = document.createElement("img");

  thumbnail.className = "ghThumbNail";
  thumbNailLink.href = "https://github.com/lengthylyova/gh-contrib-graph";
  thumbnailImage.src = "http://lengthylyova.pythonanywhere.com/static/gh-contrib-graph/thumbnail.png";
  thumbnailImage.style.width = "150px";
  thumbnailImage.style.marginTop = "10px";
  thumbnailImage.alt = "GitHub Contribution Graph";
  thumbNailLink.appendChild(thumbnailImage);
  thumbnail.appendChild(thumbNailLink);
  return thumbnail;
}

export default {
  mounted() {
    main();
  },
};

async function main() {
  try {
    const container = document.getElementById("gh");
    if (!container) {
      console.error("Container element #gh not found.");
      return;
    }

    const ghLogin = container.dataset.login;
    if (!ghLogin) {
      console.error("GitHub login data attribute not found on #gh element.");
      return;
    }

    const data = await fetchData(ghLogin);
    if (!data) {
      console.error("Failed to fetch GitHub data.");
      return;
    }

    const calendar = data["contributionsCollection"]["contributionCalendar"];
    const [table, thead, tbody] = init_table();
    const card = init_card();
    const canvas = init_canvas();
    const header = init_header(calendar["totalContributions"], ghLogin, data["avatarUrl"]);
    const footer = init_card_footer();

    addWeeks(tbody, calendar["weeks"], calendar["colors"]);
    addMonths(thead, calendar["months"]);

    canvas.appendChild(table);
    canvas.appendChild(footer);
    card.appendChild(canvas);
    container.appendChild(header);
    container.appendChild(card);
  } catch (error) {
    console.error("Error in main function:", error);
  }
}
</script>

<style>
:root {
  --gh-bg-color: #0d1117;
  --gh-base-size-4: 0.25rem;
  --gh-base-size-8: 0.5rem;
  --gh-base-size-12: 0.75rem;
  --gh-base-size-16: 1rem;
  --gh-base-size-32: 2rem;
  --gh-cell-level0-color: #21262d;
  --gh-cell-level1-color: #0e4429;
  --gh-cell-level2-color: #006d32;
  --gh-cell-level3-color: #26a641;
  --gh-cell-level4-color: #39d353;
  --gh-cell-info-bg-color: #6e7681;
  --gh-cell-outline-color: #ffffff0d;
  --gh-cell-border-color: rgba(255, 255, 255, 0.03);
  --gh-border-card-color: #30363d;
  --gh-border-card-width: max(1px, 0.0625rem);
  --gh-text-default-color: #e6edf3;
  --gh-text-inactive-color: #848d97;
  --gh-link-hover-color: #2f81f7;
  --gh-font-default-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

/* Main block */
#gh {
  color: var(--gh-text-default-color);
  width: fit-content;
  font-family: var(--gh-font-default-family);
}
#gh a {
  text-decoration: none;
  color: var(--gh-text-inactive-color);
}
#gh a:hover {
  color: var(--gh-link-hover-color);
}

/* Table */
.ghCalendarTable {
  color: var(--gh-text-default-color);
  border-spacing: 3px;
  border-collapse: separate;
}
.ghCalendarTable tr {
  height: 10px;
}
.ghCalendarTable td {
  text-align: left;
  box-sizing: border-box;
  position: relative;
}

/* DayCell */
.ghCalendarDayCell {
  width: 10px;
  border-radius: 2px;
  outline-offset: -2px;
}
.ghCalendarDayCell[data-level="NONE"] {
  background-color: var(--gh-cell-level0-color);
  border: none;
  outline: none;
}
.ghCalendarDayCell[data-level="FIRST_QUARTILE"] {
  background-color: var(--gh-cell-level1-color);
}
.ghCalendarDayCell[data-level="SECOND_QUARTILE"] {
  background-color: var(--gh-cell-level2-color);
}
.ghCalendarDayCell[data-level="THIRD_QUARTILE"] {
  background-color: var(--gh-cell-level3-color);
}
.ghCalendarDayCell[data-level="FOURTH_QUARTILE"] {
  background-color: var(--gh-cell-level4-color);
}
.ghCalendarDayCell span {
  visibility: hidden;
  position: absolute;
  transform: translate(-50%, -130%);
  word-wrap: normal;
  text-wrap: nowrap;
  pointer-events: none;
  background-color: var(--gh-cell-info-bg-color);
  padding: 10px;
  font-size: 12px;
  border-radius: 6px;
  font-family: var(--gh-font-default-family);
}
.ghCalendarDayCell span::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  border-width: 5px;
  border-style: solid;
  border-color: var(--gh-cell-info-bg-color) transparent transparent transparent;
}
.ghCalendarDayCell:hover span {
  visibility: visible;
}
.ghCalendarLabel {
  font-size: 12px;
  position: absolute;
  bottom: -3px;
  font-weight: 400;
  font-family: var(--gh-font-default-family);
}

/* Containers */
.ghCalendarCard {
  background-color: var(--gh-bg-color);
  padding: var(--gh-base-size-16);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border: var(--gh-border-card-width, 1px) solid var(--gh-border-card-color);
}
.ghCalendarCanvas {
  display: flex !important;
  flex-direction: column;
  padding-top: var(--gh-base-size-8, 4px) !important;
  text-align: center !important;
  margin-right: var(--gh-base-size-8, 8px) !important;
  margin-left: var(--gh-base-size-8, 8px) !important;
  overflow: visible;
}

/* Header */
.ghCalendarHeader {
  margin-bottom: var(--gh-base-size-4);
  height: 20px;
}
.ghCalendarHeader span {
  float: left;
}
.ghCalendarHeader div {
  display: flex;
  flex-direction: row;
  float: right;
}
.ghCalendarHeader div img {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-left: var(--gh-base-size-4);
}

/* Footer */
.ghCalendarCardFooter {
  display: block;
  padding: var(--gh-base-size-4, 4px) var(--gh-base-size-32, 32px) !important;
  text-align: center !important;
  font-size: var(--gh-base-size-12);
  font-family: var(--gh-font-default-family);
  color: var(--gh-text-inactive-color);
}
.ghCalendarCardFooterLink {
  display: block;
  float: left;
}
.ghCalendarCardFooterColors {
  display: flex;
  flex-direction: row;
  float: right;
  align-items: center;
}
.ghCalendarCardFooterColors * {
  margin-right: var(--gh-base-size-4);
}
.ghCalendarCardFooterColors div {
  width: 10px;
  height: 10px;
}
</style>
