import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserOperationClaimService } from 'src/app/services/user-operation-claim.service';
import { UserOperationClaim } from 'src/app/models/userOperationClaim';
import { OperationClaimService } from 'src/app/services/operation-claim.service';
import { OperationClaim } from 'src/app/models/operationClaim';

@Component({
  selector: 'app-user-operation-claim-update',
  templateUrl: './user-operation-claim-update.component.html',
  styleUrls: ['./user-operation-claim-update.component.css'],
})
export class UserOperationClaimUpdateComponent implements OnInit {
  users : User[];  
  roleUpdateForm: FormGroup;
  userOperationClaim: UserOperationClaim[];
  roles:OperationClaim[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userOperationClaimService: UserOperationClaimService,
    private toastrService: ToastrService,
    private userService: UserService,
    private operationClaimService: OperationClaimService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRoles();
    this.getAllUsers();
    this.createRoleUpdateForm();
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getById(params["id"])
      }
    })
  }
  createRoleUpdateForm() {
    this.roleUpdateForm = this.formBuilder.group({
      id:[''],
      operationClaimId: [''],
      userId: [''],
    });
  }
  
  getById(id:number) {
    this.userOperationClaimService.getDetailsById(id).subscribe(response => {
        this.userOperationClaim = response.data;
      })
    }
    getAllUsers(){
      this.userService.getAllUsers().subscribe(response=>{
        this.users = response.data;
      })
    }
 
/*   delete(userOperationClaim : UserOperationClaim){
    this.userOperationClaimService.delete(userOperationClaim).subscribe()
    this.router.navigate(['brandlist'])
        .then(() => {
          window.location.reload();
        });
  } */

  updateRole(){
    if(this.roleUpdateForm.valid){
      let roleModel = Object.assign({},this.roleUpdateForm.value)
      roleModel.id = this.userOperationClaim
      this.userOperationClaimService.update(roleModel).subscribe(response =>{
          
        this.toastrService.success(response.message, "Success")
      },responseError =>{
        this.toastrService.error(responseError.messaage, "Errör")
      })
    }else{
      this.toastrService.error("Form eksik","Hata")
    }
  }
        getRoles(){
          this.operationClaimService.getRoles().subscribe(response=>{
            this.roles = response.data;
          })
        }
}
