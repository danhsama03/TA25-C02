import{question} from 'readline-sync';
type Player={
    id:number;
    name:string;
    yearOfBirth:number;
    gender:boolean;
    Nhap:()=>void;
    Xuat:(propName:string)=>void;
    getAge:()=>number;
    setName:(playerName:string)=>void;
    setYearOfBirth:(yearOfBirth:number)=>void;
    setGender:(gender:boolean)=>void;
    update:()=>void;
};
function nhapGender():boolean{
    let gender:number=Number(question("Moi nhap gioi tinh(Nam:1 Nu:0): "));
    if(gender==1) return true;
    else return false;
}
function createPlayer():Player{
    return{
        id:0,
        name:"",
        yearOfBirth:0,
        gender:true,
        Nhap() {
            this.id=Number(question("Moi nhap id: "));
            this.name=question("Moi nhap ten: ");
            this.yearOfBirth=Number(question("Moi nhap nam sinh: "));
            this.gender=nhapGender();
        },
        Xuat(propName:string) {
            switch(propName){
                case "*":
                    console.log(this);
                    break;
                case "id":
                    console.log(this.id);
                    break;
                case "name":
                    console.log(this.name);
                    break;
                case "yearOfBirth":
                    console.log(this.yearOfBirth);
                    break;
                case "gender":
                    console.log(this.gender);
                    break;
                default:
                    console.log("Unvalid");
                    break;
            }
        },
        getAge() {
            return 2023-this.yearOfBirth;
            //return new Date().getFullYear() - player.yearOfBirth;
            // NX : thay vì gán cứng 2023 thì có thể sử dụng Date.now() --> sau đó get year để có thể tái sử dụng code
        },
        setName(playerName:string) {
            this.name=playerName;
        },
        setYearOfBirth(yearOfBirth) {
            this.yearOfBirth=yearOfBirth;
        },
        setGender(gender) {
            this.gender=gender;
        },
        update() {
            console.log(this);
            let prop=question("Moi nhap thuoc tinh muon update: ");
            while(prop!="id"&&prop!="name"&&prop!="yearOfBirth"&&prop!="gender"){
                console.log("Unvalid Properties");
                console.log("Thoat: 0");
                prop=question("Moi nhap lai: ");
                if(prop=="0") break;
            }
            switch(prop){
                case "id":
                    this.id=Number("Moi nhap id moi: ");
                    break;
                case "name":
                    this.name=question("Moi nhap ten moi: ");
                    break;
                case "yearOfBirth":
                    this.yearOfBirth=Number("Moi nhap nam sinh moi: ");
                    break;
                case "gender":
                    this.gender=Boolean(question("Moi nhap gioi tinh moi: "));
                    break;
            }
        },
    }
}
export{Player,createPlayer};