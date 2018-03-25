export class Ad {
    streetName: string;
    streetNumber: number;
     City: string;
     floor: number;
     pageNumber = 1;
     assetDetails: string;
     furnitures: string;
     rooms: string;
     pets: string;
    goNext() {

        console.log(this.pageNumber);
        this.pageNumber++;
        console.log(this.pageNumber);
    }
    goBack() {
        console.log(this.pageNumber);
        this.pageNumber--;
        console.log(this.pageNumber);
    }
}
