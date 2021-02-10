import { User } from './User'; //import the class to use it as type
import { Company } from './Company';

//Instruction to every other class
//on how can be an argument to  'addMarket'
interface mappable {
    location: {
        lat: number;
        lng: number;
    };
}
export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: mappable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
    }
}