const AC_GAME_OBJECT = [] // 所有继承的对象放在这个数组中
let time_last = 0 // 上一帧时间

export class AcGameObject{ 
    constructor(){
        AC_GAME_OBJECT.push(this);
        this.has_iml_start = false;
        this.time_interval = 0;
    }
    start(){

    }
    update(){

    }
}
const step = time_current => {
    for(let obj of AC_GAME_OBJECT){
        if(!obj.has_iml_start){
            obj.start();
        }else {
            obj.time_interval = time_current - time_last;
            obj.update();
        }
    }
    time_last = time_current;
}
requestAnimationFrame(step);