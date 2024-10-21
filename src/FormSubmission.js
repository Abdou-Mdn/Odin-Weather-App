import { displayContent, displayError } from "./Display";
import fetchData, { getRequestSucces, setResultUnit } from "./FetchData";
import { displayLoading } from "./Loading"


const handleFormSubmission = async (cityName,unit) => {
    setResultUnit(unit);
    displayLoading();
    await fetchData(cityName,unit);
    const status = getRequestSucces();
    if (status) {
        displayContent();
    }else {
        displayError();
    }
}

export default handleFormSubmission;