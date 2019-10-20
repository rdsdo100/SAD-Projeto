google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartPie);
let a = 101;
let b = 22;
let c = 11
function drawChartPie() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['respoesta A',     a],
        ['respoesta b',     b],
        ['respoesta c',     c]

    ]);

    var options = {
        title: 'Pergunta 1'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechartPie'));

    chart.draw(data, options);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

google.charts.load('current', {'packages':['sankey']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');
    data.addRows([
        [ 'A', 'X', 5 ],
        [ 'A', 'Y', 7 ],
        [ 'A', 'Z', 6 ],
        [ 'B', 'l', 2 ],
        [ 'B', 'Y', 9 ],
        [ 'B', 'Z', 4 ]
    ]);

    // Sets chart options.
    var options = {
        width: 600,
    };

    // Instantiates and draws our chart, passing in some options.
    var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
    chart.draw(data, options);
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChartbar);
function drawChartbar() {
    var data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" } ],
        ["pergunta 1", a, "#b87333"],
        ["pergunta 2", b, "#000000"],
        ["pergunta 3", c, "green"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        { calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation" },
        2]);

    var options = {
        title: "Density of Precious Metals, in g/cm^3",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
    };
    var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
    chart.draw(view, options);
}