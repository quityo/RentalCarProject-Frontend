import { UserOperationClaims } from './userOperationClaims';
export interface OperationClaim{
    
    operationClaimId:number;
    name:string;
    userOperationClaims: UserOperationClaims[];
     }