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
    $("#addfolder").select2({
      placeholder: "Add Folder",
      allowClear: true
    });
  }
})


function dashboardfilter() {
  var element = document.getElementById("my-products-main");
  element.classList.toggle("category-filter-open");
}


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
  series: [{
    name: 'series1',
    data: [31, 40, 35, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 20, 15, 32, 34, 52, 41]
  }],
  chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val.toFixed(0); // Format the label as a whole number
    },
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
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

// 

am4core.useTheme(am4themes_animated);
// Themes end

// Define country data
var countries = {
  "AR": {
    "country": "Argentina",
    "continent_code": "SA",
    "continent": "South America",
    "maps": ["argentinaLow", "argentinaHigh"]
  },
  "AT": {
    "country": "Austria",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["austriaLow", "austriaHigh"]
  },
  "AU": {
    "country": "Australia",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": ["australiaLow", "australiaHigh"]
  },
  "BA": {
    "country": "Bosnia and Herzegovina",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["bosniaHerzegovinaLow", "bosniaHerzegovinaHigh", "bosniaHerzegovinaCantonsLow", "bosniaHerzegovinaCantonsHigh"]
  },
  "BE": {
    "country": "Belgium",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["belgiumLow", "belgiumHigh"]
  },
  "BG": {
    "country": "Bulgaria",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["bulgariaLow", "bulgariaHigh"]
  },
  "BR": {
    "country": "Brazil",
    "continent_code": "SA",
    "continent": "South America",
    "maps": ["brazilLow", "brazilHigh"]
  },
  "BY": {
    "country": "Belarus",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["belarusLow", "belarusHigh"]
  },
  "CH": {
    "country": "Switzerland",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["switzerlandLow", "switzerlandHigh"]
  },
  "CL": {
    "country": "Chile",
    "continent_code": "SA",
    "continent": "South America",
    "maps": ["chileLow", "chileHigh"]
  },
  "CN": {
    "country": "China",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": ["chinaLow", "chinaHigh"]
  },
  "CO": {
    "country": "Colombia",
    "continent_code": "SA",
    "continent": "South America",
    "maps": ["colombiaLow", "colombiaHigh", "colombiaMuniLow", "colombiaMuniHigh"]
  },
  "CZ": {
    "country": "Czech Republic",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["czechiaLow", "czechiaHigh"]
  },
  "DE": {
    "country": "Germany",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["germanyLow", "germanyHigh"]
  },
  "DK": {
    "country": "Denmark",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["denmarkLow", "denmarkHigh"]
  },
  "EE": {
    "country": "Estonia",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["estoniaLow", "estoniaHigh"]
  },
  "EG": {
    "country": "Egypt",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": ["egyptLow", "egyptHigh"]
  },
  "ES": {
    "country": "Spain",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["spainLow", "spainHigh", "spainProvincesLow", "spainProvincesHigh"]
  },
  "FI": {
    "country": "Finland",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["finlandLow", "finlandHigh"]
  },
  "FR": {
    "country": "France",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["franceLow", "franceHigh", "franceDepartmentsLow", "franceDepartmentsHigh"]
  },
  "GB": {
    "country": "United Kingdom",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["ukLow", "ukHigh", "ukCountiesLow", "ukCountiesHigh"]
  },
  "GE": {
    "country": "Georgia",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["georgiaLow", "georgiaHigh", "georgiaSouthOssetiaLow", "georgiaSouthOssetiaHigh"]
  },
  "GR": {
    "country": "Greece",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["greeceLow", "greeceHigh"]
  },
  "HR": {
    "country": "Croatia",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["croatiaLow", "croatiaHigh"]
  },
  "HU": {
    "country": "Hungary",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["hungaryLow", "hungaryHigh"]
  },
  "IE": {
    "country": "Ireland",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["irelandLow", "irelandHigh"]
  },
  "IL": {
    "country": "Israel",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": ["israelLow", "israelHigh", "israelPalestineLow", "israelPalestineHigh"]
  },
  "IR": {
    "country": "Iran, Islamic Republic of",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "IS": {
    "country": "Iceland",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["icelandLow", "icelandHigh"]
  },
  "IT": {
    "country": "Italy",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["italyLow", "italyHigh"]
  },
  "JM": {
    "country": "Jamaica",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "JP": {
    "country": "Japan",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": ["japanLow", "japanHigh"]
  },
  "KR": {
    "country": "Korea, Republic of",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": ["southKoreaLow", "southKoreaHigh"]
  },
  "KZ": {
    "country": "Kazakhstan",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["kazakhstanLow", "kazakhstanHigh"]
  },
  "LI": {
    "country": "Liechtenstein",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["liechtensteinLow", "liechtensteinHigh"]
  },
  "LV": {
    "country": "Latvia",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["latviaLow", "latviaHigh"]
  },
  "MA": {
    "country": "Morocco",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": ["moroccoLow", "moroccoHigh"]
  },
  "MD": {
    "country": "Moldova, Republic of",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["moldovaLow", "moldovaHigh"]
  },
  "MX": {
    "country": "Mexico",
    "continent_code": "NA",
    "continent": "North America",
    "maps": ["mexicoLow", "mexicoHigh"]
  },
  "NL": {
    "country": "Netherlands",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["netherlandsLow", "netherlandsHigh"]
  },
  "NO": {
    "country": "Norway",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["norwayLow", "norwayHigh"]
  },
  "PL": {
    "country": "Poland",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["polandLow", "polandHigh"]
  },
  "PT": {
    "country": "Portugal",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["portugalLow", "portugalHigh", "portugalRegionsLow", "portugalRegionsHigh"]
  },
  "PY": {
    "country": "Paraguay",
    "continent_code": "SA",
    "continent": "South America",
    "maps": ["paraguayLow", "paraguayHigh"]
  },
  "RO": {
    "country": "Romania",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["romaniaLow", "romaniaHigh"]
  },
  "RS": {
    "country": "Serbia",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["serbiaLow", "serbiaHigh", "serbiaNoKosovoLow", "serbiaNoKosovoHigh"]
  },
  "RU": {
    "country": "Russian Federation",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["russiaLow", "russiaHigh", "russiaCrimeaLow", "russiaCrimeaHigh"]
  },
  "SE": {
    "country": "Sweden",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["swedenLow", "swedenHigh"]
  },
  "SI": {
    "country": "Slovenia",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["sloveniaLow", "sloveniaHigh", "sloveniaRegionsLow", "sloveniaRegionsHigh"]
  },
  "SK": {
    "country": "Slovakia",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["slovakiaLow", "slovakiaHigh"]
  },
  "TR": {
    "country": "Turkey",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["turkeyLow", "turkeyHigh"]
  },
  "UA": {
    "country": "Ukraine",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": ["ukraineLow", "ukraineHigh"]
  },
  "US": {
    "country": "United States",
    "continent_code": "NA",
    "continent": "North America",
    "maps": ["usaLow", "usaHigh", "usaTerritoriesLow", "usaTerritoriesHigh", "usaTerritories2Low", "usaTerritories2High"]
  },
  "UY": {
    "country": "Uruguay",
    "continent_code": "SA",
    "continent": "South America",
    "maps": []
  },
  "UZ": {
    "country": "Uzbekistan",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": ["uzbekinstanLow", "uzbekinstanHigh"]
  },
  "ZA": {
    "country": "South Africa",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": ["southAfricaLow", "southAfricaHigh"]
  }
};


var continents = {
  "AF": 0,
  "AN": 1,
  "AS": 2,
  "EU": 3,
  "NA": 4,
  "OC": 5,
  "SA": 6
}

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);
chart.projection = new am4maps.projections.Mercator();
chart.geodataNames = am4geodata_lang_RU;

// Create map polygon series for world map
var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
worldSeries.useGeodata = true;
worldSeries.geodata = am4geodata_worldLow;
worldSeries.exclude = ["AQ"];

var worldPolygon = worldSeries.mapPolygons.template;
worldPolygon.tooltipText = "{name}";
worldPolygon.nonScalingStroke = true;
worldPolygon.strokeOpacity = 0.5;
worldPolygon.fill = am4core.color("#eee");
worldPolygon.propertyFields.fill = "color";

var hs = worldPolygon.states.create("hover");
hs.properties.fill = chart.colors.getIndex(9);


// Create country specific series (but hide it for now)
var countrySeries = chart.series.push(new am4maps.MapPolygonSeries());
countrySeries.useGeodata = true;
countrySeries.hide();
countrySeries.geodataSource.events.on("done", function (ev) {
  worldSeries.hide();
  countrySeries.show();
});

var countryPolygon = countrySeries.mapPolygons.template;
countryPolygon.tooltipText = "{name}";
countryPolygon.nonScalingStroke = true;
countryPolygon.strokeOpacity = 0.5;
countryPolygon.fill = am4core.color("#eee");

var hs = countryPolygon.states.create("hover");
hs.properties.fill = chart.colors.getIndex(9);

var iranLow = "https://raw.githubusercontent.com/BesoKakulia/amCharts-missing-geojsons/master/countries/iranLow.json";
var jamaicaLow = "https://github.com/BesoKakulia/amCharts-missing-geojsons/blob/master/countries/jamaicaLow.json";
var uruguayLow = "https://raw.githubusercontent.com/BesoKakulia/amCharts-missing-geojsons/master/countries/uruguayLow.json";

// Set up drill-down to countries events
worldPolygon.events.on("hit", function (ev) {
  ev.target.series.chart.zoomToMapObject(ev.target);
  var map = ev.target.dataItem.dataContext.map;
  if (map) {
    ev.target.isHover = false;
    countrySeries.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/" + map + ".json";
    countrySeries.geodataSource.load();
  }
});

// Define SVG path for target icon
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
// create city markers
var imageSeries = chart.series.push(new am4maps.MapImageSeries());
imageSeries.id = "markers";

// define template
var imageSeriesTemplate = imageSeries.mapImages.template;

var circle = imageSeriesTemplate.createChild(am4core.Sprite);
circle.scale = 0.4;
circle.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
circle.path = targetSVG;

imageSeriesTemplate.propertyFields.latitude = "latitude";
imageSeriesTemplate.propertyFields.longitude = "longitude";
imageSeriesTemplate.nonScaling = true;
imageSeriesTemplate.horizontalCenter = "middle";
imageSeriesTemplate.verticalCenter = "middle";
imageSeriesTemplate.width = 8;
imageSeriesTemplate.height = 8;
imageSeriesTemplate.tooltipText = "{title}";
imageSeriesTemplate.fill = am4core.color("#000");

// set zoom events
imageSeries.events.on("datavalidated", updateImageVisibility);
chart.events.on("zoomlevelchanged", updateImageVisibility);

function updateImageVisibility(ev) {
  var chart = ev.target.baseSprite;
  var series = chart.map.getKey("markers");
  series.mapImages.each(function (image) {
    if (image.dataItem.dataContext.minZoomLevel) {
      if (image.dataItem.dataContext.minZoomLevel >= chart.zoomLevel && imageSeries.data.country !== "ES") {
        image.hide();
      }
      else {
        image.show();
      }
    }
  });
}

imageSeries.data = [
  {
    "minZoomLevel": 3.99,
    "svgPath": targetSVG,
    "country": "PR",
    "title": "Lisbon",
    "latitude": 38.7072,
    "longitude": -9.1355
  },
  // {
  //   "minZoomLevel": 3,
  //   "svgPath": targetSVG,
  //   "country": "ES",
  //   "title": "Madrid",
  //   "latitude": 40.4167,
  //   "longitude": -3.7033
  // }
];

// Set up data for countries
var data = [];
for (var id in countries) {
  if (countries.hasOwnProperty(id)) {
    var country = countries[id];
    if (country.maps.length) {
      data.push({
        id: id,
        color: chart.colors.getIndex(continents[country.continent_code]),
        map: country.maps[0]
      });
    }
  }
}
worldSeries.data = data;

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();
chart.zoomControl.marginBottom = 690;

var homeButton = new am4core.Button();
homeButton.events.on("hit", function () {
  worldSeries.show();
  countrySeries.hide();
  chart.goHome();
});

homeButton.icon = new am4core.Sprite();
homeButton.padding(7, 5, 7, 5);
homeButton.width = 30;
iconPath = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
homeButton.icon.path = iconPath;
homeButton.marginBottom = 3;
homeButton.parent = chart.zoomControl;
homeButton.insertBefore(chart.zoomControl.plusButton);