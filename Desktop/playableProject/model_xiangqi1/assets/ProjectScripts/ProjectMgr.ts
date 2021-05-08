import PlayableAdModule from '../Scripts/Common/Modules/AdModule/PlayableAdModule';
import ComSingleton from '../Scripts/Common/Modules/SingletonModule/ComSingleton';
import UIControl from '../Scripts/Common/Modules/UIModule/UIControl';
import { UIID } from './UIID';
const { ccclass,property } = cc._decorator;
enum CHESS {
    SHUAI,
    PAO,
    BIN,
    ZU,
    JIANG,
    SHI,
    SHI1,
    XIANG,
    MA,
    MA1,
    PAO1,
}
@ccclass
export default class ProjectMgr extends ComSingleton {
   
    
    @property(cc.Node)
    jiang: cc.Node = null;

    @property(cc.Node)
    zu: cc.Node = null;

    @property(cc.Node)
    ma: cc.Node = null;

    @property(cc.Node)
    xiang: cc.Node = null;

    @property(cc.Node)
    tip: cc.Node = null;

    @property(cc.Node)
    fail: cc.Node = null;

    @property(cc.Node)
    win: cc.Node = null;

    @property(cc.Node)
    juesha: cc.Node = null;

    @property(cc.Node)
    jiangjun: cc.Node = null;

    config = null;
    lastChose:cc.Node = null;
    step = 0;
    canMove = true;
    gameover = false;

    @property({ type: cc.AudioClip })
    aduio: cc.AudioClip = null;

    @property({ type: cc.AudioClip })
    aduio1: cc.AudioClip = null;

    @property({ type: cc.AudioClip })
    aduio2: cc.AudioClip = null;

    @property({ type: cc.AudioClip })
    aduio3: cc.AudioClip = null;
    onGameStart() {
        //这里是整个游戏入口
    }

    moveEnemy() {
        if (this.gameover) {
            return;
        }
        cc.audioEngine.playEffect(this.aduio,false);
        ProjectMgr.S().canMove = false;
        if (ProjectMgr.S().step === 0) {
            this.jiang.getChildByName("chose").active = true;
            this.jiang.getComponent("Chess").pos.y = this.jiang.getComponent("Chess").pos.y + 1;
        }

        // if (ProjectMgr.S().step === 1) {
        //     // this.jiangjun.active = true;
        //     // this.scheduleOnce(()=>{
        //     //     this.jiangjun.active = false;
        //     // },0.5);
        //     this.jiang.getChildByName("chose").active = true;
        //     this.jiang.getComponent("Chess").pos.y = this.jiang.getComponent("Chess").pos.y - 1;
        // }

        
        this.scheduleOnce(()=>{
            this.jiang.getChildByName("chose").active = false;
            this.jiang.getComponent("Chess").setPos();
            cc.audioEngine.playEffect(this.aduio1,false);
           
            ProjectMgr.S().canMove = true;
            this.tip.active = true;
            ProjectMgr.S().step++;
        },0.5);
    }

    chose() {
        this.tip.active = false;
    }

    failcall() {
        PlayableAdModule.S().gameEnd();
        this.gameover = true;
        this.scheduleOnce(()=>{
            cc.audioEngine.playEffect(this.aduio2,false);
            this.tip.active = false;
            this.fail.active = true;
        },0.55);
       
    }

    wincall() {
        this.juesha.active = true;
        this.scheduleOnce(()=>{
            this.juesha.active = false;
        },0.5);
        PlayableAdModule.S().gameEnd();
       
        this.gameover = true;
        this.scheduleOnce(()=>{
            cc.audioEngine.playEffect(this.aduio3,false);
            this.tip.active = false;
            this.win.active = true;
        },0.55);
    }

    regame() {
       
        this.lastChose = null;
        this.step = 0;
        this.canMove = true;
        this.gameover = false;
        cc.director.loadScene("Main")
    }

    failshicall() {
        ProjectMgr.S().canMove = false;
        this.zu.getChildByName("chose").active = true;
        this.zu.getComponent("Chess").pos.y = this.zu.getComponent("Chess").pos.y - 1;

        this.scheduleOnce(()=>{
            cc.audioEngine.playEffect(this.aduio1,false);
            this.zu.getChildByName("chose").active = false;
            this.zu.getComponent("Chess").setPos();
           this.juesha.active =true;
            this.scheduleOnce(()=>{
                this.juesha.active = false;
                this.failcall();
            },0.5);
        },0.5);
    }

    failpaocall() {
        ProjectMgr.S().canMove = false;
        this.ma.getChildByName("chose").active = true;
        this.ma.getComponent("Chess").pos.x = 5;
        this.ma.getComponent("Chess").pos.y = 0;

        this.scheduleOnce(()=>{
            cc.audioEngine.playEffect(this.aduio1,false);
            this.ma.getChildByName("chose").active = false;
            this.ma.getComponent("Chess").setPos();
            this.juesha.active =true;
            this.scheduleOnce(()=>{
                this.juesha.active = false;
                this.failcall();
            },0.5);
        },0.5);
    }

    failma1call() {
        ProjectMgr.S().canMove = false;
        this.xiang.getChildByName("chose").active = true;
        this.xiang.getComponent("Chess").pos.x = 6;
        this.xiang.getComponent("Chess").pos.y = 9;

        this.scheduleOnce(()=>{
            cc.audioEngine.playEffect(this.aduio1,false);
            this.xiang.getChildByName("chose").active = false;
            this.xiang.getComponent("Chess").setPos();
            this.scheduleOnce(()=>{
                this.failcall();
            },0.5);
        },0.5);
    }

    failma2call() {
        ProjectMgr.S().canMove = false;
        this.xiang.getChildByName("chose").active = true;
        this.xiang.getComponent("Chess").pos.x = 6;
        this.xiang.getComponent("Chess").pos.y = 5;

        this.scheduleOnce(()=>{
            cc.audioEngine.playEffect(this.aduio1,false);
            this.xiang.getChildByName("chose").active = false;
            this.xiang.getComponent("Chess").setPos();
            this.scheduleOnce(()=>{
                this.failcall();
            },0.5);
        },0.5);
    }

    failma3call() {
        ProjectMgr.S().canMove = false;
        this.jiang.getChildByName("chose").active = true;
        this.jiang.getComponent("Chess").pos.y = this.jiang.getComponent("Chess").pos.y + 1;

        this.scheduleOnce(()=>{
            this.jiang.getChildByName("chose").active = false;
            this.jiang.getComponent("Chess").setPos();
            cc.audioEngine.playEffect(this.aduio1,false);
           
            ProjectMgr.S().canMove = true;
            this.tip.active = true;
            ProjectMgr.S().step++;
        },0.5);
    }
}
