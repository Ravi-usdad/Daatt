$(document).ready(function () {
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".burger");
  let overlayBtn = document.querySelector(".overlay");

  // Function to add the 'active' class
  function addActiveClass() {
    sidebar.classList.add("active");
    overlayBtn.classList.add("active");
  }

  // Function to remove the 'active' class
  function removeActiveClass() {
    sidebar.classList.remove("active");
    overlayBtn.classList.remove("active");
  }

  // Attach the functions to the button click event
  sidebarBtn.addEventListener("click", addActiveClass);
  overlayBtn.addEventListener("click", removeActiveClass);

  $(".search_button").click(function () {
    $(".search_box").toggleClass("active");
  });

  // Select Vehicle Select Script
  if ($("#i-am-a").length) {
    $("#i-am-a").select2({
      placeholder: "I am a",
      allowClear: true
    });
  }
  if ($("#i-am-b").length) {
    $("#i-am-b").select2({
      placeholder: "I am b",
      allowClear: true
    });
  }
  if ($("#i-am-c").length) {
    $("#i-am-c").select2({
      placeholder: "I am c",
      allowClear: true
    });
  }
  if ($("#i-am-d").length) {
    $("#i-am-d").select2({
      placeholder: "I am d",
      allowClear: true
    });
  }
  if ($("#i-am-a").length) {
    $("#i-am-a").select2({
      placeholder: "I am a",
      allowClear: true
    });
  }
  if ($("#age_group").length) {
    $("#age_group").select2({
      placeholder: "Age Group",
      allowClear: true
    });
  }
  if ($("#location").length) {
    $("#location").select2({
      placeholder: "Location",
      allowClear: true
    });
  }
  if ($("#preferred_languages").length) {
    $("#preferred_languages").select2({
      placeholder: "Preferred languages",
      allowClear: true
    });
  }
  if ($("#affiliation").length) {
    $("#affiliation").select2({
      placeholder: "Affiliation",
      allowClear: true
    });
  }

  if ($("#i-am-a2").length) {
    $("#i-am-a2").select2({
      placeholder: "I am a",
      allowClear: true
    });
  }
  if ($("#age_group2").length) {
    $("#age_group2").select2({
      placeholder: "Age Group",
      allowClear: true
    });
  }
  if ($("#location2").length) {
    $("#location2").select2({
      placeholder: "Location",
      allowClear: true
    });
  }
  if ($("#preferred_languages2").length) {
    $("#preferred_languages2").select2({
      placeholder: "Preferred languages",
      allowClear: true
    });
  }
  if ($("#affiliation2").length) {
    $("#affiliation2").select2({
      placeholder: "Affiliation",
      allowClear: true
    });
  }
  if ($("#all_grades").length) {
    $("#all_grades").select2({
      placeholder: "All Grades",
      allowClear: true
    });
  }
  if ($("#all_subjects").length) {
    $("#all_subjects").select2({
      placeholder: "All Subjects",
      allowClear: true
    });
  }
  if ($("#all_types_ol").length) {
    $("#all_types_ol").select2({
      placeholder: "All Tyoe",
      allowClear: true
    });
  }
  if ($("#recently_opened").length) {
    $("#recently_opened").select2({
      placeholder: "Recently Opened",
      allowClear: true
    });
  }
  if ($("#selectgrades1").length) {
    $("#selectgrades1").select2({
      placeholder: "Select Grade/s",
      allowClear: true
    });
  }
  if ($("#addfolder1").length) {
    $("#addfolder1").select2({
      placeholder: "Add Folder",
      allowClear: true
    });
  }
})


var options = {
  series: [{
    name: 'Online Sales',
    data: [11, 13, 4, 12, 8, 12, 16]
  }, {
    name: 'Offline Sales',
    data: [9, 8, 15, 4, 7, 10, 8]
  }],
  chart: {
    type: 'bar',
    height: 245
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#3F8FC9', '#46C69B'],
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return value + "k";
      }
    },
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#earning-report"), options);
chart.render();


var options = {
  series: [
    {
      name: "Earnings",
      data: [28, 29, 33, 36, 32, 32, 33]
    },
    {
      name: "Sales",
      data: [12, 11, 14, 18, 17, 13, 13]
    }
  ],
  chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#07E098', '#0095FF'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: [''],

  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100]
    },
  },
  yaxis: {
    labels: false,
    min: 5,
    max: 40
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'center',
    offsetY: 0,
  }
};

var chart = new ApexCharts(document.querySelector("#sales-earnings"), options);
chart.render();



var options = {
  series: [{
    name: 'Amount Earned',
    data: [20, 25, 20, 17, 14, 15]
  }, {
    name: 'Amount Spent',
    data: [11, 13, 5, 6, 5, 9]
  }],
  chart: {
    type: 'bar',
    height: 250
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#418985', '#F28F8F'],
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: [''],
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return value + "k";
      }
    },
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#paid-promotions"), options);
chart.render();



var options = {
  series: [{
    name: 'Online Sales',
    data: [11, 13, 4, 12, 8, 12, 16]
  }, {
    name: 'Suscriptions',
    data: [9, 8, 15, 4, 7, 10, 8]
  }],
  chart: {
    type: 'bar',
    height: 380
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#FA5A7D', '#BF83FF'],
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
    curve: 'smooth'
  },
  xaxis: {
    categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return value + "k";
      }
    },
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'center',
    offsetY: 0,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#total-revenue"), options);
chart.render();