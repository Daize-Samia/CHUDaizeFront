import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options

import { useDispatch , useSelector} from 'react-redux';
import { fetchPatients } from 'store/slices/patientSlice';
import { getSexeSeries } from 'services/functions';


const columnChartOptions = {
    chart: {
        type: 'bar',
        height: 430,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '30%',
            borderRadius: 4
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 8,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yaxis: {
        title: {
            text: 'personnes'
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter(val) {
                return ` ${val} personnes`;
            }
        }
    },
    legend: {
        show: true,
        fontFamily: `'Public Sans', sans-serif`,
        offsetX: 10,
        offsetY: 10,
        labels: {
            useSeriesColors: false
        },
        markers: {
            width: 16,
            height: 16,
            radius: '50%',
            offsexX: 2,
            offsexY: 2
        },
        itemMargin: {
            horizontal: 15,
            vertical: 50
        }
    },
    responsive: [
        {
            breakpoint: 600,
            options: {
                yaxis: {
                    show: false
                }
            }
        }
    ]
};

// ==============================|| SALES COLUMN CHART ||============================== //

const SalesColumnChart = () => {
    const theme = useTheme();

    const { primary, secondary } = theme.palette.text;
    const line = theme.palette.divider;

    const warning = theme.palette.warning.main;
    const primaryMain = theme.palette.primary.main;
    const successDark = theme.palette.success.dark;

    const patients = useSelector((state) => state.patient.patients);
    const dispatch = useDispatch();


    const [series, setSeries] = useState([
        {
            name: 'Féminin',
            data: [180, 90, 135, 114, 120, 145]
        },
        {
            name: 'Masculin',
            data: [120, 45, 78, 150, 168, 99]
        }
    ]);

    const [options, setOptions] = useState(columnChartOptions);

    useEffect(() => {
        dispatch(fetchPatients());
        if(patients){
        setSeries(
            [
                {
                    name: 'Féminin',
                    data: getSexeSeries(patients)["female"]
                },
                {
                    name: 'Masculin',
                    data: getSexeSeries(patients)["male"]
                }
            ]
        )
        }
    }, [])

    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            colors: ['#FF69B4', primaryMain],
            xaxis: {
                labels: {
                    style: {
                        colors: [secondary, secondary, secondary, secondary, secondary, secondary]
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [secondary]
                    }
                }
            },
            grid: {
                borderColor: line
            },
            tooltip: {
                theme: 'light'
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                labels: {
                    colors: 'grey.500'
                }
            }
        }));
    }, [primary, secondary, line, warning, primaryMain, successDark]);

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="bar" height={430} />
        </div>
    );
};

export default SalesColumnChart;
