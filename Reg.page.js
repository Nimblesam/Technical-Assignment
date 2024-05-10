// Logincheck.js
import { $ } from '@wdio/globals'
class Regpage {
    get sname() { return $("//input[@placeholder='Name']"); }
    get semail() {return $("//input[@data-qa='signup-email']")}
    get Sign() { return $("//button[normalize-space()='Signup']"); }
    get Title() { return $("#id_gender1")}
    get Rname() { return $("//input[@id='name']")}
    get Rmail()  { return $("//input[@id='email']")}
    get password() {return $("#password")}
    get dayDD()   { return $("#days")} 
    get mntDD  (){ return $("#months")} 
    get yrDD  (){ return $("#years")} 
    get location () {return $("#country")}
    get chck() {return $("#newsletter")}
    get rsp() { return $("//input[@id='optin']")} 
    get Fname  (){ return $("//input[@id='first_name']")} 
    get Lname () {return $("//input[@id='last_name']")}
    get company  (){ return $("//input[@id='company']")} 
    get address () {return $("//input[@id='address1']")}
    get address2  (){ return $("//input[@id='address2']")} 
    get state () {return $("//input[@id='state']")}
    get city  (){ return $("//input[@id='city']")} 
    get zip () {return $("//input[@id='zipcode']")}
    get tel  (){ return $("//input[@id='mobile_number']")} 
    get crt () {return $("//button[normalize-space()='Create Account']")}
    get cont() { return $("//a[@class='btn btn-primary']")}
    get del() { return $("//a[normalize-space()='Delete Account']")}
    





    async SignUp(sname, semail) {
        await this.sname.setValue(sname);
        await this.semail.setValue(semail);
        await this.Sign.click();

        
    }

    async Createaccount(Title, Rname, Rmail, password, dayDD, mntDD, yrDD, chck, rsp, Fname, Lname, company, address, address2, location, state, city, zip, tel, crt) {
        
        await this.Title.click();    
        await this.Rmail
        await this.password.setValue('Tester123');
        await this.dayDD.selectByAttribute("value", "7");
        await this.mntDD.selectByAttribute("value", "7");
        await this.yrDD.selectByAttribute("value", "1980");
        await this.chck.click();
        await this.rsp.click();
        await this.Fname.setValue('Paul');
        await this.Lname.setValue('Peterson');
        await this.company.setValue('Revolt Tech');
        await this.address.setValue('11');
        await this.address2.setValue('Bollington Road');
        await this.location.selectByAttribute("value", "Canada");
        await this.state.setValue('Essex');
        await this.city.setValue('London');
        await this.zip.setValue('SE14 5TT');
        await this.tel.setValue('0161275929');
        await this.crt.click();

        
    }

    async delete() {
        await this.del.click();
    }
    
  

}

export default new Regpage();