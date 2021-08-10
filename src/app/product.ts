export class Product {
    id:number;
    name:string;
    description:string;
    price:number;
    imageUrl:string;

    //error here
    constructor(id=0, name='', description='', price=0 ,imageUrl="https://sm.mashable.com/t/mashable_in/photo/default/185fd7c49bf8a6f803c004e652e3071de1bb161c_5cpn.960.jpg"){

        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.imageUrl=imageUrl;
    }
}
