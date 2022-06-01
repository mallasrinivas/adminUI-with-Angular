import { Component, OnInit } from '@angular/core';
import { ItemData } from '../model/itemdata';
import { UserService } from '../service/user.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';


@Component({
  selector: 'app-admintable',
  templateUrl: './admintable.component.html',
  styleUrls: ['./admintable.component.css']
})
export class AdmintableComponent implements OnInit {

  constructor(private userService:UserService,private notification:NzNotificationService){}
  editCache: { [key: string]: { edit: boolean; data: ItemData } } = {};
  listOfData: ItemData[] = [];
  displayData: ItemData[] = [];
  searchValue:string = ''
  masterSelected!:boolean
  isDeleteSelected:boolean = false;
  index:any = []

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }
  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  checkUncheckAll(event:any) {
    for (var i = 0; i < this.displayData.length; i++) {
      this.displayData[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList(event);
  }

  saveEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }
  changePage(event:any){
    this.displayData = event;
  }
  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }

  ngOnInit(): void {
    this.userService.getUserData().subscribe((userdata:any)=>{
      this.listOfData = userdata;
      this.listOfData.map((eachItem)=>{
        eachItem.isSelected = false;
      })
      this.updateEditCache();
    },(error)=>{
      console.log("Unable to fetch the data from api")
    })

  }
  onChecked(id:any,e:any): void{
    if(e.target.checked === true){
      this.index.push(id)
    }
    else if(e.target.checked===false){
      const index = this.index.indexOf(id);
      this.index.splice(index,1);
    }
   console.log("id",this.index);
   this.isDeleteSelected = true;
  }
  OnDelete(): void{
    alert("Are sure want to delete")
    this.index.map((i:any) => {
      this.listOfData = this.listOfData.filter(d => d.id !== i);
    });
    this.isDeleteSelected = false;
    this.notification.create("success","success","User successfully deleted");
    this.index = []
    this.masterSelected = false;
  }
  getCheckedItemList(event:any){
    if(event.target.checked===true){
      for (var i = 0; i < this.displayData.length; i++) {
        if(this.displayData[i].isSelected)
        this.index.push(this.displayData[i].id);
      }
      this.isDeleteSelected = true;
    }
    else if(event.target.checked===false){
      this.index=[]
    }
    console.log("allselected",this.index)
  }

}
