
export interface UserOperationClaim{
   id:number;
   userId:number;
   operationClaimId:number;
   name:string;
   firstName:string;
 }
 export interface OperationClaim extends UserOperationClaim{
  name:string;
  operationClaimId:number;
}
export interface User extends UserOperationClaim{
  firstName:string;
  lastName:string;
}