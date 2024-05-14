export const API_KEY = 'AIzaSyCND8My9MSK4aYSVA8awDmTbpCb1zf3QDg';

export const value_converter = (value) =>{
    if(value>=1000000){
        return Math.floor(value/1000000) +"M";
    }
    else if (value>=1000){
        return Math.floor(value/1000) +"K";
    }
    else {
        return value;
    }
}