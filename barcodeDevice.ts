
interface Barcode {
    barcode: string
}

class BarcodeScanner {
    memo: Array<Barcode> = [];
    postEntry = (barcode: string):void => {
        this.memo.push({'barcode': barcode});
    }
    getEntries = () => {
        return this.memo;
    } 
}


const scanner = new BarcodeScanner();
export default scanner;