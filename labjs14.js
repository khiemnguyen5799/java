"use strict";

async function plotData() {
    let data = await fetch('https://disease.sh/v3/covid-19/historical/usa?lastdays=all');
    let jsondata = await data.json();
    // console.log(jsondata);

    // Hiện thị dữ liệu lên biểu đồ
    let cases = jsondata.timeline.cases;
    let deaths = jsondata.timeline.deaths;
    let recovers = jsondata.timeline.recovered;

    console.log(cases);
    console.log(deaths);
    console.log(recovers);


    // lấy tất cả các keys
    let x_data = Object.keys(cases);
    x_data.unshift("x_data")
    console.log(x_data);

    // lấy tất cả các values
    let casesdata = Object.values(cases);
    casesdata.unshift("Lây nhiễm");
    let deathsdata = Object.values(deaths);
    deathsdata.unshift("Chết");
    let recoversdata = Object.values(recovers);
    recoversdata.unshift("Phục hồi");

    console.log(casesdata);
    console.log(deathsdata);
    console.log(recoversdata);

    // Hiện thị lên biểu đồ

    bb.generate({
        bindto: '#demo1',
        data: {
            x: "x_data",
            columns: [
                x_data,
                deathsdata,
                recoversdata,
                casesdata
            ],
            type: "line"
        },
        axis: {
            x: {
                type: "timeseries",
                tick: {
                    format: "%Y-%m-%d",
                    count : 50
                },
                padding: {
                    left: 9999999,
                    right: 9999999
                }
            }
        }
    })



}
plotData();