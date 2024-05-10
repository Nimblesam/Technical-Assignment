
class SPage {
    get $srch() {return $("//i[@class='fa fa-search']"); } 
    get $prodct()  {return $("//a[@href='/products']");}
    get $srchbar() { return $("//input[@id='search_product']"); }

}

export default new SPage();
