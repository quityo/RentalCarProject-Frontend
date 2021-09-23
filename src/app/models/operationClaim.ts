import { UserOperationClaim } from './userOperationClaim';
export interface OperationClaim{
    
    operationClaimId:number;
    name:string;
    userOperationClaim: UserOperationClaim[];
     }