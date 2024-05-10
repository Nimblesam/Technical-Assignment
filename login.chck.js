// Logincheck.js
import { $ } from '@wdio/globals'
import Page from "./page.js";
import LoginPage from "./Login.Page.js";
class Logincheck {
    get addprod() { return $("a.btn.btn-default.add-to-cart"); }
    get continue() {return $("//button[@class='btn btn-success close-modal btn-block']")}
    get chkout() { return $("//a[@class='btn btn-default check_out']"); }
    get comment() { return $("//textarea[@name='message']")}
    get plcorder() { return $("//a[@class='btn btn-default check_out']")}
    get nameoncard()  { return $("//input[@name='name_on_card']")}
    get crdnumb() {return $("//input[@name='card_number']")}
    get cv()   { return $("//input[@placeholder='ex. 311']")} 
    get cmm  (){ return $("//input[@placeholder='MM']")} 
    get cyr  (){ return $("//input[@placeholder='YYYY']")} 
    get pay() {return $("//button[@id='submit']")}
    get chekdel() {return $("//a[@class='btn btn-primary']")}



    async Checkout(nameoncard, crdnumb, cv, cmm, cyr) {
        await this.nameoncard.setValue(nameoncard);
        await this.crdnumb.setValue(crdnumb);
        await this.cv.setValue(cv);
        await this.cmm.setValue(cmm);
        await this.cyr.setValue(cyr);
        await this.pay.click();

        
    }




    
    
  

}

export default new Logincheck();