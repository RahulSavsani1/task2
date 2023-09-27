import React from 'react';
import './chart.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      fullSize: true
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const ds1 = [300, 700, 620, 500, 450, 370, 620]
const ds2 = [290, 350, 300, 330, 340, 300, 500]

export const data = {
  labels,
  datasets: [
    {
      label: 'Qualified',
      data: ds1,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Disqualified',
      data: ds2,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        3rd menu item
      </a>
    ),
  },
];

export const Chart = () => {
  return (
    <div className='chart_container'>
      <div className="chart_dropdown">
        <Dropdown menu={{ items }} >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Recommended
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      <Line options={options} data={data} style={{height:"15rem"}} />
    </div>
  )
}

