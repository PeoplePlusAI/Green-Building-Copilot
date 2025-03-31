import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const logout_icon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 20" fill="none">
    <path d="M20.791 10.1207H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.8643 7.20465L20.7923 10.1207L17.8643 13.0367" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.3597 5.62988C15.0297 2.04988 13.6897 0.749878 8.35974 0.749878C1.25874 0.749878 1.25874 3.05988 1.25874 9.99988C1.25874 16.9399 1.25874 19.2499 8.35974 19.2499C13.6897 19.2499 15.0297 17.9499 15.3597 14.3699" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const downloadIcon = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path d="M9.5 11.5V17.5L11.5 15.5" stroke="#474747" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.5 17.5L7.5 15.5" stroke="#474747" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22.5 10.5V15.5C22.5 20.5 20.5 22.5 15.5 22.5H9.5C4.5 22.5 2.5 20.5 2.5 15.5V9.5C2.5 4.5 4.5 2.5 9.5 2.5H14.5" stroke="#474747" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22.5 10.5H18.5C15.5 10.5 14.5 9.5 14.5 6.5V2.5L22.5 10.5Z" stroke="#474747" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const favourite_icon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69001C2 5.60001 4.49 3.10001 7.56 3.10001C9.38 3.10001 10.99 3.98001 12 5.34001C13.01 3.98001 14.63 3.10001 16.44 3.10001C19.51 3.10001 22 5.60001 22 8.69001C22 15.69 15.52 19.82 12.62 20.81Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const delete_icon = <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
    <path d="M15.8892 8.55409C15.8892 16.5731 17.0435 20.1979 9.27967 20.1979C1.5149 20.1979 2.693 16.5731 2.693 8.55409" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.3651 5.47981H1.2146" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.7148 5.47981C12.7148 5.47981 13.2434 1.7141 9.28911 1.7141C5.33578 1.7141 5.86435 5.47981 5.86435 5.47981" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const mike_icon = <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
    <path d="M13 21.0834C16.5858 21.0834 19.5 18.1692 19.5 14.5834V9.16669C19.5 5.58085 16.5858 2.66669 13 2.66669C9.41417 2.66669 6.5 5.58085 6.5 9.16669V14.5834C6.5 18.1692 9.41417 21.0834 13 21.0834Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.25 12.4167V14.5834C3.25 19.9675 7.61583 24.3334 13 24.3334C18.3842 24.3334 22.75 19.9675 22.75 14.5834V12.4167" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.86914 8.60332C11.7975 7.89915 13.8991 7.89915 15.8275 8.60332" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.866 11.8533C12.166 11.4958 13.5418 11.4958 14.8418 11.8533" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const like_icon = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
    <path d="M9.21859 14.4333C8.999 14.4333 8.7865 14.4067 8.60942 14.3467C5.90359 13.4733 1.604 10.3733 1.604 5.79335C1.604 3.46001 3.60859 1.56668 6.07359 1.56668C7.27067 1.56668 8.38984 2.00668 9.21859 2.79335C10.0473 2.00668 11.1665 1.56668 12.3636 1.56668C14.8286 1.56668 16.8332 3.46668 16.8332 5.79335C16.8332 10.38 12.5336 13.4733 9.82775 14.3467C9.65067 14.4067 9.43817 14.4333 9.21859 14.4333ZM6.07359 2.56668C4.1965 2.56668 2.6665 4.01335 2.6665 5.79335C2.6665 10.3467 7.32025 12.88 8.9565 13.4067C9.084 13.4467 9.36025 13.4467 9.48775 13.4067C11.1169 12.88 15.7778 10.3533 15.7778 5.79335C15.7778 4.01335 14.2478 2.56668 12.3707 2.56668C11.294 2.56668 10.2953 3.04001 9.65067 3.86001C9.45234 4.11335 8.999 4.11335 8.80067 3.86001C8.14192 3.03335 7.15025 2.56668 6.07359 2.56668Z" fill="#65A782" />
</svg>

const send_message_icon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4.58818 8.11939L5.31435 8.30697L4.58818 8.11939ZM8.08799 4.82533L8.22926 5.56191L8.08799 4.82533ZM10.1526 13.5436L9.94105 12.8241L10.1526 13.5436ZM11.2594 14.6503L10.5398 14.4387L11.2594 14.6503ZM16.6836 20.2148L16.8712 20.941L16.6836 20.2148ZM19.9777 16.715L20.7142 16.8563L19.9777 16.715ZM21.7323 7.56593L20.9957 7.42466L21.7323 7.56593ZM17.237 3.07069L17.0958 2.33411L17.237 3.07069ZM6.0052 17.7371C5.71231 18.03 5.71231 18.5049 6.0052 18.7978C6.2981 19.0907 6.77297 19.0907 7.06586 18.7978L6.0052 17.7371ZM8.48008 17.3836C8.77297 17.0907 8.77297 16.6158 8.48008 16.3229C8.18718 16.03 7.71231 16.03 7.41942 16.3229L8.48008 17.3836ZM6.71231 21.2727C6.41942 21.5656 6.41942 22.0404 6.71231 22.3333C7.0052 22.6262 7.48008 22.6262 7.77297 22.3333L6.71231 21.2727ZM9.18718 20.9191C9.48008 20.6262 9.48008 20.1514 9.18718 19.8585C8.89429 19.5656 8.41942 19.5656 8.12652 19.8585L9.18718 20.9191ZM2.46967 17.03C2.17678 17.3229 2.17678 17.7978 2.46967 18.0907C2.76256 18.3836 3.23744 18.3836 3.53033 18.0907L2.46967 17.03ZM4.94454 16.6765C5.23744 16.3836 5.23744 15.9087 4.94454 15.6158C4.65165 15.3229 4.17678 15.3229 3.88388 15.6158L4.94454 16.6765ZM20.9957 7.42466L19.2411 16.5737L20.7142 16.8563L22.4689 7.70719L20.9957 7.42466ZM8.22926 5.56191L17.3783 3.80726L17.0958 2.33411L7.94673 4.08876L8.22926 5.56191ZM5.31435 8.30697C5.67585 6.90754 6.81437 5.83326 8.22926 5.56191L7.94673 4.08876C5.95789 4.47018 4.36735 5.97563 3.86202 7.9318L5.31435 8.30697ZM9.94105 12.8241C7.18864 13.6335 4.59178 11.1041 5.31435 8.30697L3.86202 7.9318C2.85311 11.8374 6.47515 15.4068 10.3642 14.2631L9.94105 12.8241ZM11.9789 14.8619C12.3454 13.6155 11.1874 12.4575 9.94105 12.8241L10.3642 14.2631C10.4716 14.2315 10.5714 14.3313 10.5398 14.4387L11.9789 14.8619ZM16.496 19.4887C13.6989 20.2112 11.1695 17.6144 11.9789 14.8619L10.5398 14.4387C9.39617 18.3278 12.9656 21.9499 16.8712 20.941L16.496 19.4887ZM19.2411 16.5737C18.9697 17.9886 17.8955 19.1272 16.496 19.4887L16.8712 20.941C18.8274 20.4357 20.3328 18.8451 20.7142 16.8563L19.2411 16.5737ZM22.4689 7.70719C23.08 4.52059 20.2824 1.72297 17.0958 2.33411L17.3783 3.80726C19.5237 3.39582 21.4072 5.2793 20.9957 7.42466L22.4689 7.70719ZM7.06586 18.7978L8.48008 17.3836L7.41942 16.3229L6.0052 17.7371L7.06586 18.7978ZM7.77297 22.3333L9.18718 20.9191L8.12652 19.8585L6.71231 21.2727L7.77297 22.3333ZM3.53033 18.0907L4.94454 16.6765L3.88388 15.6158L2.46967 17.03L3.53033 18.0907Z" fill="#F2F4F5" />
</svg>

const fileUploadIcon = <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 54 54" fill="none">
    <path d="M20.25 38.25V24.75L15.75 29.25" stroke="#66A682" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20.25 24.75L24.75 29.25" stroke="#66A682" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M49.5 22.5V33.75C49.5 45 45 49.5 33.75 49.5H20.25C9 49.5 4.5 45 4.5 33.75V20.25C4.5 9 9 4.5 20.25 4.5H31.5" stroke="#66A682" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M49.5 22.5H40.5C33.75 22.5 31.5 20.25 31.5 13.5V4.5L49.5 22.5Z" stroke="#66A682" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
</svg>

const back_button_icon = <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 19" fill="none">
    <path d="M7.99984 17.4201L1.47984 10.9001C0.709844 10.1301 0.709844 8.87008 1.47984 8.10008L7.99984 1.58008" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
</svg>

const play_icon = <CiPlay1 />
const pause_icon = <CiPause1 />
const searchIcon = <IoIosSearch className="fs-5 text-secondary" />
const searchCancelIcon = <IoMdClose className="fs-5 text-secondary" />


const Icons = {
    logout_icon,
    downloadIcon,
    favourite_icon,
    delete_icon,
    mike_icon,
    like_icon,
    send_message_icon,
    play_icon,
    pause_icon,
    searchIcon,
    searchCancelIcon,
    fileUploadIcon,
    back_button_icon
}

export default Icons