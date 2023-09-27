import { DownOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Dropdown, Space, DatePicker } from 'antd';
import type { MenuProps } from 'antd';
import './header.css'


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

type requiredProps={
    name: string
}

export const Header = ({name}:requiredProps) => {
    dayjs.extend(customParseFormat);

    const { RangePicker } = DatePicker;

    const dateFormat = 'YYYY-MM-DD';
    return (
        <div className='top_container_heading'>
            <h3 className='top_left_heading'>{name}</h3>
            <div className="top_right_heading">
                <div style={{ width: "45%" }}>
                    <Dropdown menu={{ items }} >
                        <a onClick={(e) => e.preventDefault()} href='https://www.antgroup.com'>
                            <Space>
                                London Internship Program
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
                <Space direction="vertical" size={12}>
                    <RangePicker
                        defaultValue={[dayjs('2019-09-03', dateFormat), dayjs('2019-11-22', dateFormat)]}
                        disabled={[false, false]}
                    />
                </Space>
            </div>
        </div>
    )
}
