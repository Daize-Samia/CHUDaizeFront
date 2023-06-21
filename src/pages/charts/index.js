import React, { useEffect } from 'react';
import  { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Typography , Button, Box} from '@mui/material';
import { getDiagnosticsSeries, getProvinceSeries } from 'services/functions';
import { useDispatch , useSelector} from 'react-redux';
import { fetchPatients } from 'store/slices/patientSlice';

const ApexChart = () => {

  const patients = useSelector((state) => state.patient.patients);
  const dispatch = useDispatch();
  const [chartType, setChartType] = useState('diagnostics');
  //const diagnosticsSeries = [25, 15, 44, 55, 41, 17];

  const [diagnosticsSeries, setDiagnosticsSeries] = useState([]);
  const [provinceSeries, setProvinceSeries] = useState([]);


  useEffect(()=> {
    dispatch(fetchPatients());
    if(patients){
    setDiagnosticsSeries(getDiagnosticsSeries(patients));
    setProvinceSeries(getProvinceSeries(patients));
    }
  }, []);

  const diagnosticsOptions = {
    chart: {
      width: '100%',
      type: 'pie',
      height: '300px',
    },
    labels: ["Cardiopathies Congénitales", "Cardiopathies acquises ", "Suspicion de cardiopathies", "Vasculaire", "Rhumatologie", "Génétique", "Autres"],
    theme: {
      palette: 'palette2',
      monochrome: {
        enabled: true,
        color: '#004999',
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -5
        }
      }
    },
    title: {
      text: ""
    },
    dataLabels: {
      formatter(val, opts) {
        const name = opts.w.globals.labels[opts.seriesIndex]
        return [name, val.toFixed(1) + '%']
      }
    },
    legend: {
      show: false
    }
  };

  

  //const provinceSeries = [10, 20, 30, 40, 50];
  const provinceOptions = {
    chart: {
      width: '80%',
      type: 'pie',
      height: '40'
    },
    
    labels: ["Berkane", "Driouch", "Figuig", "Guercif", "Jerada", "Nador", "Oujda-Angad","Taourirt"],
    theme: {
      palette: 'palette2',
      monochrome: {
        enabled: true,
        color: '#F27F0C',
        
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -5
        }
      }
    },
    title: {
      text: ""
    },
    dataLabels: {
      formatter(val, opts) {
        const name = opts.w.globals.labels[opts.seriesIndex]
        return [name, val.toFixed(1) + '%']
      }
    },
    legend: {
      show: false
    }
  };

  const handleChartTypeChange = (type) => {
    setChartType(type);
  };

return (
    <>
      <div id="chart">
        <Typography variant="h2" component="h2" sx={{ marginBottom: '10px', color: '#004999'}}>
          Statistiques des Patients par {chartType === 'diagnostics' ? 'diagnostics' : 'province'}
        </Typography>

        <Button
          onClick={() => handleChartTypeChange('diagnostics')}
          variant={chartType === 'diagnostics' ? 'contained' : 'outlined'}
          color="primary"
          sx={{ marginRight: '10px' }}
        >
          Diagnostics
        </Button>
        <Button
          onClick={() => handleChartTypeChange('province')}
          variant={chartType === 'province' ? 'contained' : 'outlined'}
          color="warning"
        >
          Province
        </Button>
        
        <Box sx={{ width: '50%', height: '300px', marginTop: '1px'}}>
          {chartType === 'diagnostics' && (
            <ReactApexChart options={diagnosticsOptions} series={diagnosticsSeries} type="pie" />
          )}
          {chartType === 'province' && (
            <ReactApexChart options={provinceOptions} series={provinceSeries} type="pie" />
          )}
        </Box>
        
      </div>
    </>
  );
};

export default ApexChart;
