// const chartistPluginAxisTitle = require("../../../node_modules/chartist-plugin-axistitle/dist/chartist-plugin-axistitle")
const Chartist = require("chartist")

var sqlChart = {
    data: {
        labels: ['mySQL', "SQLite", 'Sequelize', 'Seeding', 'CSV Files', 'ORM Design', 'CLI', 'Workbench'],
        series: [
            [7.5, 6, 8, 5, 9, 8, 7, 8.5]
        ]
    },
    options: {
        low: 0,
        high: 10
    },
    animation: {
        // Let's put a sequence number aside so we can use it in the event callbacks
        seq: 0,
        delays: 80,
        durations: 200,
        // Once the chart is fully created we reset the sequence
        created: function () {
            sqlChart.animation.seq = 0;
        },
        // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
        draw: function (data) {
            sqlChart.animation.seq++;
            if (data.type === 'line') {
                // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
                data.element.animate({
                    opacity: {
                        // The delay when we like to start the animation
                        begin: sqlChart.animation.seq * sqlChart.animation.delays + 1000,
                        // Duration of the animation
                        dur: sqlChart.animation.durations,
                        // The value where the animation should start
                        from: 0,
                        // The value where it should end
                        to: 1
                    }
                });
            } else if (data.type === 'label' && data.axis === 'x') {
                data.element.animate({
                    y: {
                        begin: sqlChart.animation.seq * sqlChart.animation.delays,
                        dur: sqlChart.animation.durations,
                        from: data.y + 100,
                        to: data.y,
                        // We can specify an easing function from Chartist.Svg.Easing
                        easing: Chartist.Svg.Easing.easeOutQuart
                    }
                });
            } else if (data.type === 'label' && data.axis === 'y') {
                data.element.animate({
                    x: {
                        begin: sqlChart.animation.seq * sqlChart.animation.delays,
                        dur: sqlChart.animation.durations,
                        from: data.x - 100,
                        to: data.x,
                        easing: Chartist.Svg.Easing.easeOutQuart
                    }
                });
            } else if (data.type === 'point') {
                data.element.animate({
                    x1: {
                        begin: sqlChart.animation.seq * sqlChart.animation.delays,
                        dur: sqlChart.animation.durations,
                        from: data.x - 10,
                        to: data.x,
                        easing: Chartist.Svg.Easing.easeOutQuart
                    },
                    x2: {
                        begin: sqlChart.animation.seq * sqlChart.animation.delays,
                        dur: sqlChart.animation.durations,
                        from: data.x - 10,
                        to: data.x,
                        easing: Chartist.Svg.Easing.easeOutQuart
                    },
                    opacity: {
                        begin: sqlChart.animation.seq * sqlChart.animation.delays,
                        dur: sqlChart.animation.durations,
                        from: 0,
                        to: 1,
                        easing: Chartist.Svg.Easing.easeOutQuart
                    }
                });
            } else if (data.type === 'grid') {
                // Using data.axis we get x or y which we can use to construct our animation definition objects
                var pos1Animation = {
                    begin: sqlChart.animation.seq * sqlChart.animation.delays,
                    dur: sqlChart.animation.durations,
                    from: data[data.axis.units.pos + '1'] - 30,
                    to: data[data.axis.units.pos + '1'],
                    easing: Chartist.Svg.Easing.easeOutQuart
                };
                var pos2Animation = {
                    begin: sqlChart.animation.seq * sqlChart.animation.delays,
                    dur: sqlChart.animation.durations,
                    from: data[data.axis.units.pos + '2'] - 100,
                    to: data[data.axis.units.pos + '2'],
                    easing: Chartist.Svg.Easing.easeOutQuart
                };
                var animations = {};
                animations[data.axis.units.pos + '1'] = pos1Animation;
                animations[data.axis.units.pos + '2'] = pos2Animation;
                animations['opacity'] = {
                    begin: sqlChart.animation.seq * sqlChart.animation.delays,
                    dur: sqlChart.animation.durations,
                    from: 0,
                    to: 1,
                    easing: Chartist.Svg.Easing.easeOutQuart
                };
                data.element.animate(animations);
            }
        }
    },
    responsiveOptions: [
        [
            "screen and (max-width: 640px)",
            {
                seriesBarDistance: 5,
                axisX: {
                    // labelInterpolationFnc: function (value) {
                    //     return value[0];
                    // }
                }
            }
        ]
    ],
    plugins: {
        // chartistPluginAxisTitle: function(){
        //     chartistPluginAxisTitle({
        //     axisX: {
        //         axisTitle : 'Time (mins)',
        //         axisClass : 'ct-axis-title',
        //         offset : {
        //             x: 0,
        //             y: 50
        //         },
        //         textAnchor : 'middle'
        //     },
        //     axisY: {
        //         axisTitle : 'Goals',
        //         axisClass : 'ct-axis-title',
        //         offset : {
        //             x: 0,
        //             y: 0
        //         },
        //         textAnchor : 'middle',
        //         flipTitle : false
        //     }
        // })
        // }
    }
}

var noSQLChart = {
    data: {
        labels: ['Mongo\nmLab', 'Mongoose', 'JSON', 'ORM', 'CLI', 'T3'],
        series: [
            [8, 8.5, 9, 8, 9, 8.5]
        ]
    },
    options: {
        low: 0,
        high: 10,
        showArea: true
    },
    animation: {
        // Let's put a sequence number aside so we can use it in the event callbacks
        seq: 0,
        delays: 80,
        durations: 200,
        // Once the chart is fully created we reset the sequence
        created: function () {
            noSQLChart.animation.seq = 0;
        },
        // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
        draw: function (data) {
            noSQLChart.animation.seq++;
            if (data.type === 'line') {
                // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
                data.element.animate({
                    opacity: {
                        // The delay when we like to start the animation
                        begin: noSQLChart.animation.seq * noSQLChart.animation.delays + 1000,
                        // Duration of the animation
                        dur: noSQLChart.animation.durations,
                        // The value where the animation should start
                        from: 0,
                        // The value where it should end
                        to: 1
                    }
                });
            } else if (data.type === 'label' && data.axis === 'x') {
                data.element.animate({
                    y: {
                        begin: noSQLChart.animation.seq * noSQLChart.animation.delays,
                        dur: noSQLChart.animation.durations,
                        from: data.y + 100,
                        to: data.y,
                        // We can specify an easing function from Chartist.Svg.Easing
                        easing: Chartist.Svg.Easing.easeOutQuart
                    }
                });
            } else if (data.type === 'label' && data.axis === 'y') {
                data.element.animate({
                    x: {
                        begin: noSQLChart.animation.seq * noSQLChart.animation.delays,
                        dur: noSQLChart.animation.durations,
                        from: data.x - 100,
                        to: data.x,
                        easing: Chartist.Svg.Easing.easeOutQuart
                    }
                });
            } else if (data.type === 'point') {
                data.element.animate({
                    x1: {
                        begin: noSQLChart.animation.seq * noSQLChart.animation.delays,
                        dur: noSQLChart.animation.durations,
                        from: data.x - 10,
                        to: data.x,
                        easing: Chartist.Svg.Easing.easeOutQuart
                    },
                    x2: {
                        begin: noSQLChart.animation.seq * noSQLChart.animation.delays,
                        dur: noSQLChart.animation.durations,
                        from: data.x - 10,
                        to: data.x,
                        easing: Chartist.Svg.Easing.easeOutQuart
                    },
                    opacity: {
                        begin: noSQLChart.animation.seq * noSQLChart.animation.delays,
                        dur: noSQLChart.animation.durations,
                        from: 0,
                        to: 1,
                        easing: Chartist.Svg.Easing.easeOutQuart
                    }
                });
            } else if (data.type === 'grid') {
                // Using data.axis we get x or y which we can use to construct our animation definition objects
                var pos1Animation = {
                    begin: noSQLChart.animation.seq * noSQLChart.animation.delays,
                    dur: noSQLChart.animation.durations,
                    from: data[data.axis.units.pos + '1'] - 30,
                    to: data[data.axis.units.pos + '1'],
                    easing: Chartist.Svg.Easing.easeOutQuart
                };
                var pos2Animation = {
                    begin: noSQLChart.animation.seq * noSQLChart.animation.delays,
                    dur: noSQLChart.animation.durations,
                    from: data[data.axis.units.pos + '2'] - 100,
                    to: data[data.axis.units.pos + '2'],
                    easing: Chartist.Svg.Easing.easeOutQuart
                };
                var animations = {};
                animations[data.axis.units.pos + '1'] = pos1Animation;
                animations[data.axis.units.pos + '2'] = pos2Animation;
                animations['opacity'] = {
                    begin: noSQLChart.animation.seq * noSQLChart.animation.delays,
                    dur: noSQLChart.animation.durations,
                    from: 0,
                    to: 1,
                    easing: Chartist.Svg.Easing.easeOutQuart
                };
                data.element.animate(animations);
            }
        }
    },
    responsiveOptions: [
        [
            "screen and (max-width: 640px)",
            {
                seriesBarDistance: 5,
                axisX: {
                    // labelInterpolationFnc: function (value) {
                    //     return value[0];
                    // }
                }
            }
        ]
    ],
    plugins: {
        // chartistPluginAxisTitle: function(){
        //     chartistPluginAxisTitle({
        //     axisX: {
        //         axisTitle : 'Time (mins)',
        //         axisClass : 'ct-axis-title',
        //         offset : {
        //             x: 0,
        //             y: 50
        //         },
        //         textAnchor : 'middle'
        //     },
        //     axisY: {
        //         axisTitle : 'Goals',
        //         axisClass : 'ct-axis-title',
        //         offset : {
        //             x: 0,
        //             y: 0
        //         },
        //         textAnchor : 'middle',
        //         flipTitle : false
        //     }
        // })
        // }
    }
}

var unstructuredChart = {
    data: {
        labels: ['WebScraping', 'Normalizing\nData', 'Indexing', 'KNIME', "RegEx"],
        series: [
            [10, 9, 5, 1, 4]
        ]
    },
    options: {
        low: 0,
        high: 10
    },
    animation: {
        // Let's put a sequence number aside so we can use it in the event callbacks
        seq: 0,
        delays: 80,
        durations: 200,
        // Once the chart is fully created we reset the sequence
        created: function () {
            unstructuredChart.animation.seq = 0;
        },
        // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
        draw: function (data) {
            unstructuredChart.animation.seq++;
            if (data.type === 'line') {
                // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
                data.element.animate({
                    opacity: {
                        // The delay when we like to start the animation
                        begin: unstructuredChart.animation.seq * unstructuredChart.animation.delays + 1000,
                        // Duration of the animation
                        dur: unstructuredChart.animation.durations,
                        // The value where the animation should start
                        from: 0,
                        // The value where it should end
                        to: 1
                    }
                });
            } else if (data.type === 'label' && data.axis === 'x') {
                data.element.animate({
                    y: {
                        begin: unstructuredChart.animation.seq * unstructuredChart.animation.delays,
                        dur: unstructuredChart.animation.durations,
                        from: data.y + 100,
                        to: data.y,
                        // We can specify an easing function from Chartist.Svg.Easing
                        easing: Chartist.Svg.Easing.easeOutQuart
                    }
                });
            } else if (data.type === 'label' && data.axis === 'y') {
                data.element.animate({
                    x: {
                        begin: unstructuredChart.animation.seq * unstructuredChart.animation.delays,
                        dur: unstructuredChart.animation.durations,
                        from: data.x - 100,
                        to: data.x,
                        easing: Chartist.Svg.Easing.easeOutQuart
                    }
                });
            } else if (data.type === 'point') {
                data.element.animate({
                    x1: {
                        begin: unstructuredChart.animation.seq * unstructuredChart.animation.delays,
                        dur: unstructuredChart.animation.durations,
                        from: data.x - 10,
                        to: data.x,
                        easing: Chartist.Svg.Easing.easeOutQuart
                    },
                    x2: {
                        begin: unstructuredChart.animation.seq * unstructuredChart.animation.delays,
                        dur: unstructuredChart.animation.durations,
                        from: data.x - 10,
                        to: data.x,
                        easing: Chartist.Svg.Easing.easeOutQuart
                    },
                    opacity: {
                        begin: unstructuredChart.animation.seq * unstructuredChart.animation.delays,
                        dur: unstructuredChart.animation.durations,
                        from: 0,
                        to: 1,
                        easing: Chartist.Svg.Easing.easeOutQuart
                    }
                });
            } else if (data.type === 'grid') {
                // Using data.axis we get x or y which we can use to construct our animation definition objects
                var pos1Animation = {
                    begin: unstructuredChart.animation.seq * unstructuredChart.animation.delays,
                    dur: unstructuredChart.animation.durations,
                    from: data[data.axis.units.pos + '1'] - 30,
                    to: data[data.axis.units.pos + '1'],
                    easing: Chartist.Svg.Easing.easeOutQuart
                };
                var pos2Animation = {
                    begin: unstructuredChart.animation.seq * unstructuredChart.animation.delays,
                    dur: unstructuredChart.animation.durations,
                    from: data[data.axis.units.pos + '2'] - 100,
                    to: data[data.axis.units.pos + '2'],
                    easing: Chartist.Svg.Easing.easeOutQuart
                };
                var animations = {};
                animations[data.axis.units.pos + '1'] = pos1Animation;
                animations[data.axis.units.pos + '2'] = pos2Animation;
                animations['opacity'] = {
                    begin: unstructuredChart.animation.seq * unstructuredChart.animation.delays,
                    dur: unstructuredChart.animation.durations,
                    from: 0,
                    to: 1,
                    easing: Chartist.Svg.Easing.easeOutQuart
                };
                data.element.animate(animations);
            }
        }
    },
    responsiveOptions: [
        [
            "screen and (max-width: 640px)",
            {
                seriesBarDistance: 5,
                axisX: {
                    // labelInterpolationFnc: function (value) {
                    //     return value[0];
                    // }
                }
            }
        ]
    ],
    plugins: {
        // chartistPluginAxisTitle: function(){
        //     chartistPluginAxisTitle({
        //     axisX: {
        //         axisTitle : 'Time (mins)',
        //         axisClass : 'ct-axis-title',
        //         offset : {
        //             x: 0,
        //             y: 50
        //         },
        //         textAnchor : 'middle'
        //     },
        //     axisY: {
        //         axisTitle : 'Goals',
        //         axisClass : 'ct-axis-title',
        //         offset : {
        //             x: 0,
        //             y: 0
        //         },
        //         textAnchor : 'middle',
        //         flipTitle : false
        //     }
        // })
        // }
    }
}

module.exports = {
    sqlChart,
    noSQLChart,
    unstructuredChart
}