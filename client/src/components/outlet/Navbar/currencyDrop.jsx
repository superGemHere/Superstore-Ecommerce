import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./currencyDrop.scss"


export default function CurrencyDropMenu ({
    isVisible,
}) {
   
    return(
        <>
        <KeyboardArrowDownIcon className='currency_arrow' />
        {isVisible && <ul className='currency_changer'><li>USD</li><li>BGN</li></ul>}
        </>
    );
}