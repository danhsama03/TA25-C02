import{question} from 'readline-sync';
import { Player } from './player';
import { createPlayer } from './player';
type FootballClub={
    name:string;
    listPlayer:Player[];
    trophies:number;
    input:()=>void;
    output:()=>void;
    filterByAge:(minAge:number, maxAge:number)=>Player[];
    check:()=>boolean;
    addPlayer:(playerList:Player[])=>void;
    deletePlayer:(playerId:number)=>Player;
}
function FootballClub(this:FootballClub):any{
    this.name="";
    this.listPlayer=[];
    this.trophies=0;
    this.input= function(){
        let luaChon:number=1;
        while(luaChon!=0){
            let player:Player=createPlayer();
            player.Nhap();
            this.listPlayer[this.listPlayer.length]=player;
            luaChon=Number(question("Ban muon nhap them cau thu khong?(1.Co, 0.Khong): "));
        }
    };
    this.addPlayer=function(playerList:Player[]){
        let addIndex:number=this.listPlayer.length;
        for(let i:number=0; i<playerList.length;i++){
            this.listPlayer[addIndex]=playerList[i];
            addIndex++;
        }
    };
    this.output=function(){
        for(let i:number=0;i<this.listPlayer.length;i++){
            console.log(this.listPlayer[i]);
        }
    };
    this.filterByAge=function(minAge:number, maxAge:number){
        let playerList:Player[]=[];
        for(let i:number=0;i<this.listPlayer.length;i++){
            if(this.listPlayer[i].getAge()>=minAge &&  this.listPlayer[i].getAge()<=maxAge){
                playerList[playerList.length]=this.listPlayer[i];
            }
        }
        return playerList;
    }
    this.check=function(){
        let flag:boolean=true;
        for(let i:number=1; i<this.listPlayer.length;i++){
            if(this.listPlayer[0].gender!=this.listPlayer[i].gender){
                flag=false;
                break;
            }
        }
        return flag;
    };
    this.deletePlayer=function(playerId:number){
        let player:Player= createPlayer();
        for(let i:number=0;i<this.listPlayer.length;i++){
            if(this.listPlayer[i].id==playerId){
                player=this.listPlayer[i];
                for(let j:number=i;j<this.listPlayer.length-i;j++){
                    this.listPlayer[j]=this.listPlayer[j+1];
                }
                this.listPlayer.splice(this.listPlayer.length-1,1);
                break;
            }
        }
        return player;
    }
}
function main():void{
    let luaChon:number=1;
    let club:FootballClub= new (FootballClub as any)();
    while(true){
        console.log("Menu");
        console.log("1.Nhap danh sach cau thu");
        console.log("2.Xuat danh sach cau thu");
        console.log("3.Loc danh sach cau thu theo do tuoi");
        console.log("4.Kiem tra doi bong co binh thuong hay khong?");
        console.log("5.Them cau thu");
        console.log("6.Xoa cau thu");
        console.log("0.Thoat");
        luaChon=Number(question("Moi lua chon: "));
        if(luaChon==0) break;
        switch(luaChon){
            case 1:
                club.input();
                break;
            case 2:
                club.output();
                break;
            case 3:
                let min:number=Number(question("Nhap so tuoi min: "));
                let max:number=Number(question("Nhap so tuoi max: "));
                console.log(club.filterByAge(min,max));
                break;
            case 4:
                if(club.check()==true) console.log("Doi bong binh thuong");
                else console.log("Doi bong bat thuong");
                break;
            case 5:
                let luaChon:number=1;
                let players:Player[]=[];
                while(luaChon!=0){
                    let player:Player=createPlayer();
                    player.Nhap();
                    players[players.length]=player;
                    luaChon=Number(question("Ban muon nhap them cau thu khong?(1.Co, 0.Khong): "));
                }
                club.addPlayer(players);
                break;
            case 6:
                let id:number=Number(question("Moi nhap id cua cau thu muon xoa: "));
                console.log("Thong tin cau thu bi xoa: ");
                console.log(club.deletePlayer(id));
                break;
        }
        console.log("---------------------------------");
    }
}
main();