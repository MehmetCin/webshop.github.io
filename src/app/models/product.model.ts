export class Product{
    id: number;
    name: string;
    details: string;
    organisationId: number;
    price: number;
    imageLink: string;
    

   
    

  
    constructor(id: number, name: string,details: string,organisationId: number, price: number,imageLink: string ){
      this.id = id;
      this.name = name;
      this.details = details;
      this.organisationId = organisationId;
      this.price = price;
      this.imageLink = imageLink;
    }
  }