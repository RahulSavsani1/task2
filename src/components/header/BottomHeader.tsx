import { InfoCircleOutlined } from '@ant-design/icons';
import { Dropdown, Input, MenuProps, Space, Tooltip } from 'antd'
import { PiSortAscendingBold, PiSortDescendingBold } from 'react-icons/pi';
import { GoSearch } from 'react-icons/go';
import { useState } from 'react'

export const BottomHeader = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Applied
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Recommended
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Interview
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Offer
        </a>
      ),
    },
    {
      key: '5',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Hired
        </a>
      ),
    },
    {
      key: '6',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Rejected
        </a>
      ),
    },
  ];

  const [sortIconDir, SetsortIconDir] = useState("down")
  return (
    <div>
      <h3 className='btm_header'> Detailed Opportunity Overview</h3>
      <div className='btm_header_content'>
        <Input
          className='btm_header_search'
          placeholder="Search"
          prefix={<GoSearch className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Extra information">
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />
        {/* <div >
        </div> */}
        <div className='btm_header_right_container'>
          <div className='btm_header_dropdown' onMouseOver={() => SetsortIconDir("up")} onMouseOut={() => SetsortIconDir("down")}>
            <Dropdown menu={{ items }} >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <div className='btm_header_dropdown_content'>
                    Sort By
                    <div>
                      {sortIconDir==="up"? < PiSortDescendingBold/>:<PiSortAscendingBold /> }
                    </div>
                  </div>
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className='btm_header_button'>
            <button> Export All As CSV </button>
          </div>
        </div>
      </div>
    </div>
  )
}
