<template>
  <section
    class="flex flex-col md:flex-row justify-center bg-gray-100 dark:bg-gray-900 overflow-hidden p-4 md:p-8 shadow-[inset_0_11px_8px_-10px_rgba(0,0,0,0.1),inset_0_-11px_8px_-10px_rgba(0,0,0,0.1)]"
  >
    <section class="flex flex-col xl:w-3/5 justify-between 2xl:flex-row gap-4 md:gap-2 dark:text-white">
      <div>
        <h2 class="text-2xl md:text-3xl font-semibold text-black text-center dark:text-white">{{ $t("recentActivity") }}</h2>
        <div class="h-0.5 bg-green-500 w-20 md:w-48 mx-auto" />
      </div>
      <div id="gh" class="w-full mx-auto md:w-auto"></div>
    </section>
  </section>
</template>

<script>
import contributions from "@/assets/contributions.json"; // Import the contributions.json file

export default {
  mounted() {
    this.renderGraph();
  },
  methods: {
    renderGraph() {
      const data = contributions.data.user.contributionsCollection.contributionCalendar;
      const container = document.getElementById("gh");

      if (!container) {
        console.error("Container element #gh not found.");
        return;
      }

      // Clear the container
      container.innerHTML = "";

      // Create the table and other elements
      const [table, thead, tbody] = this.initTable();
      const card = this.initCard();
      const canvas = this.initCanvas();
      const header = this.initHeader(data.totalContributions, "neobugs1", contributions.data.user.avatarUrl);
      const footer = this.initCardFooter();

      this.addWeeks(tbody, data.weeks, data.colors);
      this.addMonths(thead, data.months);

      canvas.appendChild(table);
      canvas.appendChild(footer);
      card.appendChild(canvas);
      container.appendChild(header);
      container.appendChild(card);
    },
    initTable() {
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
    },
    addMonths(thead, months) {
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
    },
    addWeeks(tbody, weeks, colors) {
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
    },
    initCard() {
      const card = document.createElement("div");
      card.className = "ghCalendarCard";
      return card;
    },
    initCardFooter() {
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
    },
    initCanvas() {
      const canvas = document.createElement("div");
      canvas.className = "ghCalendarCanvas";
      return canvas;
    },
    initHeader(totalContribs, ghLogin, avatarUrl) {
      const header = document.createElement("div");
      const total = document.createElement("span");
      const profile = document.createElement("div");
      profile.innerHTML = `<a href="https://github.com/${ghLogin}">${ghLogin}</a><img src="${avatarUrl}">`;
      header.className = "ghCalendarHeader";
      total.textContent = `${totalContribs} contributions in the last year`;
      header.appendChild(total);
      header.appendChild(profile);
      return header;
    },
  },
};
</script>

<style>
/* Add your existing styles here */
:root {
  --gh-base-size-4: 0.25rem;
  --gh-base-size-8: 0.5rem;
  --gh-base-size-12: 0.75rem;
  --gh-base-size-16: 1rem;
  --gh-base-size-32: 2rem;
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
  border: none;
  outline: none;
}

.ghCalendarDayCell span {
  visibility: hidden;
  position: absolute;
  transform: translate(-50%, -130%);
  word-wrap: normal;
  text-wrap: nowrap;
  pointer-events: none;
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
@media (max-width: 1024px) {
  .ghCalendarTable tbody:nth-child(2) tr td:nth-child(-n + 13) {
    display: none;
  }
  .ghCalendarTable thead:nth-child(1) tr td:nth-child(-n + 3) {
    display: none;
  }
}
@media (max-width: 768px) {
  .ghCalendarTable tbody:nth-child(2) tr td:nth-child(-n + 30) {
    display: none;
  }
  .ghCalendarTable thead:nth-child(1) tr td:nth-child(-n + 8) {
    display: none;
  }
}
</style>
