const text_field = document.getElementById("state_input");

state_input.addEventListener("input", function () {
  const text_fieldpattern = /^[A-z]{2}$/;
  if (!text_fieldpattern.test(this.value)) {
    this.style.outline = "1px solid red";
    state_info.style.display = "inline";
  } else {
    this.style.outline = "1px solid black";
    state_info.style.display = "none";
  }
});

state_input.addEventListener("input", function () {
  const text_fieldpattern = /^[A-z]{1,}$/;
  if (!text_fieldpattern.test(this.value)) {
    this.style.outline = "1px solid red";
    state_name.style.display = "inline";
  } else {
    this.style.outline = "1px solid black";
    state_name.style.display = "none";
  }
});

$("#btn").on("click", function (e) {
  e.preventDefault();
  console.log(text_field.value);
  fetch(`http://localhost:8010/proxy/states/${text_field.value}/current.json`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const postive = data.positive;
      const probable = data.probableCases;
      const death = data.death;
      google.charts.load("current", { packages: ["corechart", "bar"] });
      google.charts.setOnLoadCallback(drawBasic);

      function drawBasic() {
        var data = new google.visualization.DataTable();
        data.addColumn("string", "COVID Data");
        data.addColumn("number", "");
        data.addRows([
          ["Positive Cases", postive],
          ["Probable Cases", probable],
          ["Deaths", death],
        ]);
        var options = {
          colors: ["white"],
          title: `COVID 19 Data for ${text_field.value}`,
          backgroundColor: "#0d0c0a",
          bar: { groupWidth: "90%" },
          width: 800,
          height: 500,
          hAxis: {
            title: "COVID Data",
            titleTextStyle: {
              color: "white",
            },
            textStyle: {
              color: "white",
            },
            viewWindow: {
              min: [7, 30, 0],
              max: [17, 30, 0],
            },
          },
          vAxis: {
            title: "Number of People",
            titleTextStyle: {
              color: "white",
            },
            textStyle: {
              color: "white",
            },
          },
          textStyle: {
            fontSize: 14,
            color: "white",
            bold: true,
          },
          titleTextStyle: {
            fontSize: 21,
            color: "white",
            bold: true,
          },
        };
        var chart = new google.visualization.ColumnChart(
          document.getElementById("chart_div")
        );
        chart.draw(data, options);
      }
    });
});
