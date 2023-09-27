import { PiUsersThree } from 'react-icons/pi'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { AiOutlineHome,AiOutlineFileZip,AiOutlineHeart, AiOutlineSetting } from 'react-icons/ai'
import { BsCalendarCheck, BsShare } from 'react-icons/bs'
import { PiNotebookBold } from 'react-icons/pi'
import { CgProfile } from 'react-icons/cg'
import './sidebar.css'

export const Sidebar = () => {
  return (
    <div className='sidebar_container'>
        <div className="top_sidebar">
            <div className='logo'>

            </div>
            <AiOutlineHome className='side_btn'/>
            <PiUsersThree className='side_btn'/>
            <BsCalendarCheck className='side_btn'/>
            <BsShare className='side_btn'/>
            <AiOutlineFileZip className='side_btn'/>
            <PiNotebookBold className='side_btn'/>
            <AiOutlineHeart className='side_btn'/>
            <MdOutlineArrowBackIos className='side_btn'/>
        </div>
        <div className="bottom_sidebar">
            <AiOutlineSetting className='side_btn'/>
            <CgProfile className='side_btn'/>
        </div>
    </div>
  )
}
