

export interface User{
    
    imagePath: string;
    userId:number;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    status:boolean;
    companyName:string;
    brandName:string;
    carName:string;
    rentDate : Date;
    returnDate:Date;
    userImage:UserImage[];
    
    }
    
export interface UserImage extends User{
    imageId:number;
    imagePath:string;
}
