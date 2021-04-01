export interface ResponseModel{
    success:boolean,
    message:string
}
export interface ListResponseModel<T> extends ResponseModel{
    data:T[];
}


export interface ItemResponseModel<T>  extends ResponseModel{
    data:T
}