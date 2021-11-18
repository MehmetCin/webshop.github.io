export class Organisation{
    id: number;
    email: string;
    companyNumber: string;
    accountNumber: string;
    companyName: string;
    description: string;
    image: string;
    location: string;

  
    constructor(id: number, email: string, companyNumber: string, accountNumber: string, companyName:string, description:string, image:string, location:string){
      this.id = id;
      this.email = email;
      this.companyNumber = companyNumber;
      this.accountNumber = accountNumber;
      this.companyName = companyName;
      this.description = description;
      this.image = image;
      this.location = location;
    }
  }