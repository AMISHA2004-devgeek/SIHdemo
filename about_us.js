$('.ext_webL').click(function(event) {
    if (this.host !== window.location.host) {
        if (window.confirm("This link will take you to an external website")) {
            console.log('Click true and redirecting');
        } else {
            console.log('Click false and no redirect');
            return false;
        }
    }
});

$('.ext_webLH').click(function(event) {
    if (this.host !== window.location.host) {
        if (window.confirm("यह लिंक आपको बाहरी वेबसाइट पर ले जाएगा ")) {
            console.log('Click true and redirecting');
        } else {
            console.log('Click false and no redirect');
            return false;
        }
    }
});

// Load content into #aboutus_content
$("#about_us_123").click(function(event) {
    event.preventDefault();
    $("#aboutus_content").load("resources/html/aboutus/About-the-ministry.html");
});

$("#whoswho_id").click(function(event) {
    event.preventDefault();
    $("#aboutus_content").load("resources/html/aboutus/whoswho.html");
});

$("#meettheminister_id").click(function(event) {
    event.preventDefault();
    $("#aboutus_content").load("resources/html/aboutus/meetminister_.html");
});

$("#org_chart").click(function(event) {
    event.preventDefault();
    $("#aboutus_content").load("resources/html/aboutus/orgChart.html");
    // $("#aboutus_content").load("orgChart/demo/org_chart.html"); // Commented out
});

// Load content into #tab1_content
$("#tab-1").click(function(event) {
    event.preventDefault();
    $("#tab1_content").load("resources/html/Schemes/scheme_content/ayurgyan.html");
});

$("#tab-2").click(function(event) {
    event.preventDefault();
    $("#tab1_content").load("resources/html/Schemes/scheme_content/ayurswasthaya.html");
});

$("#tab-3").click(function(event) {
    event.preventDefault();
    $("#tab1_content").load("resources/html/Schemes/scheme_content/ChampionServices.html");
});

$("#tab-4").click(function(event) {
    event.preventDefault();
    $("#tab1_content").load("resources/html/Schemes/scheme_content/PIC.html");
});

$("#tab-5").click(function(event) {
    event.preventDefault();
    $("#tab1_content").load("resources/html/Schemes/scheme_content/IEC.html");
});

$("#tab-6").click(function(event) {
    event.preventDefault();
    $("#tab1_content").load("resources/html/Schemes/scheme_content/PAB_IHR.html");
});

$("#tab-7").click(function(event) {
    event.preventDefault();
    $("#tab1_content").load("resources/html/Schemes/scheme_content/ayushOshaudhi.html");
});

$("#tab-8").click(function(event) {
    event.preventDefault();
    $("#tab1_content").load("resources/html/Schemes/scheme_content/conservationDevelopment.html");
});

// Load content into #t4
$("#t1").click(function(event) {
    event.preventDefault();
    $("#t4").load("resources/html/Gallery/idy.html");
});

// $("#t2").click(function(event) {
    // event.preventDefault();
    // $("#t4").load("resources/html/Gallery/gaiis.html"); // Commented out
// });

$("#t3").click(function(event) {
    event.preventDefault();
    $("#t4").load("resources/html/Gallery/gctm.html");
});

// Load content into #content
$("#ayuday").click(function(event) {
    event.preventDefault();
    $("#content").load("resources/html/Gallery/ayurvedaday.html");
});

$("#idy").click(function(event) {
    event.preventDefault();
    $("#content").load("resources/html/Gallery/idy.html");
});

$("#gaiis").click(function(event) {
    event.preventDefault();
    $("#content").load("resources/html/Gallery/gaiis.html");
});

$("#gctm").click(function(event) {
    event.preventDefault();
    $("#content").load("resources/html/Gallery/gctm.html");
});

$("#otherevents").click(function(event) {
    event.preventDefault();
    $("#content").load("resources/html/Gallery/others_e.html");
});

$("#idy22").click(function(event) {
    event.preventDefault();
    $("#content").load("resources/html/Gallery/idy.html");
});

$("#idy23").click(function(event) {
    event.preventDefault();
    $("#content").load("resources/html/Gallery/idy23.html");
});

// Load content into #VideoContent
$("#idyV").click(function(event) {
    event.preventDefault();
    $("#VideoContent").load("resources/html/Gallery/videoContentIDY.html");
});

$("#gaiisV").click(function(event) {
    event.preventDefault();
    $("#VideoContent").load("resources/html/Gallery/videoContentGAIIS.html");
});

$("#gctmV").click(function(event) {
    event.preventDefault();
    $("#VideoContent").load("resources/html/Gallery/videoContentGCTM.html");
});

$("#idyV22").click(function(event) {
    event.preventDefault();
    $("#VideoContent").load("resources/html/Gallery/videoContentIDY22.html");
});

$("#idyV23").click(function(event) {
    event.preventDefault();
    $("#VideoContent").load("resources/html/Gallery/videoContentIDY23.html");
});
